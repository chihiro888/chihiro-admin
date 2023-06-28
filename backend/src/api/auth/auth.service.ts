// ** Module
import { Inject, Injectable } from '@nestjs/common'
import { DataSource, IsNull } from 'typeorm'
import moment from 'moment'

// ** Dto
import { LoginDto } from './dto/login.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'

// ** Entity
import { LoginHistory } from 'src/entities/login-history.entity'
import { File } from 'src/entities/file.entity'
import { Admin } from 'src/entities/admin.entity'

// ** Util
import { createPassword } from './../../common/util/auth'
import { isMatch } from 'src/common/util/auth'

// ** Service
import { GlobalService } from '../global/global.service'

// ** Const
import DATE from 'src/common/constants/date'

// ** Interface
import { Result } from 'src/common/interface'

@Injectable()
export class AuthService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource,
    private globalService: GlobalService
  ) {}

  // ANCHOR login
  async login(dto: LoginDto): Promise<Result> {
    const user = await this.datasource.getRepository(Admin).findOne({
      where: {
        account: dto.account,
        deletedAt: IsNull()
      }
    })

    // 유효성
    // 계정이 틀린 경우
    // 권한이 SA, A가 아닌 경우
    if (!user || !(user.role === 'SA' || user.role === 'A')) {
      return {
        result: false,
        data: null,
        message: 'The account or password is not valid.'
      }
    }

    if (await isMatch(dto.password, user.password)) {
      // 로그인 이력 기록
      const loginHistory = new LoginHistory()
      loginHistory.userId = user.id
      loginHistory.type = 1
      await this.datasource.getRepository(LoginHistory).save(loginHistory)

      return { result: true, data: user, message: 'Login Successful' }
    } else {
      // 비밀번호가 틀린 경우
      return {
        result: false,
        data: null,
        message: 'The account or password is not valid.'
      }
    }
  }

  // ANCHOR logout
  async logout(userId: number): Promise<void> {
    // 로그아웃 이력 기록
    const loginHistory = new LoginHistory()
    loginHistory.userId = userId
    loginHistory.type = 0

    await this.datasource.getRepository(LoginHistory).save(loginHistory)
  }

  // ANCHOR get admin by user id
  async getAdminByUserId(userId: number): Promise<Admin> {
    // 사용자 정보 조회
    const user = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: userId,
        deletedAt: IsNull()
      }
    })

    // 프로필 정보 조회
    const profile = await this.datasource.getRepository(File).findOne({
      where: {
        tableName: '_user',
        tablePk: userId
      },
      order: {
        createdAt: 'DESC'
      }
    })

    if (profile) {
      // 프로필 이미지가 존재하는 경우
      const imageDomain = await this.globalService.getGlobal('imageDomain')
      user['url'] = `${imageDomain}/${profile.encName}`
    }

    return user
  }

  // ANCHOR update password
  async updatePassword(dto: UpdatePasswordDto): Promise<Result> {
    const user = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.userId,
        deletedAt: IsNull()
      }
    })

    if (await isMatch(dto.newPassword, user.password)) {
      // 새 비밀번호가 기존 비밀번호와 같은 경우
      return {
        result: false,
        message: 'The new password is the same as the old password.'
      }
    }

    // 비밀번호 변경
    user.password = await createPassword(dto.newPassword)
    user.updatedAt = moment().format(DATE.DATETIME)

    await this.datasource.getRepository(Admin).save(user)

    return {
      result: true,
      message: 'Password has been changed successfully.'
    }
  }
}
