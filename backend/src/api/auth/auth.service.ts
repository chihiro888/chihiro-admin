import { createPassword } from './../../common/util/auth'
import { UpdatePasswordDto } from './../admin/dto/update-password.dto'
import { Inject, Injectable } from '@nestjs/common'
import { isMatch } from 'src/common/util/auth'
import { DataSource, IsNull } from 'typeorm'
import { LoginDto } from './dto/login.dto'
import { LoginHistory } from 'src/entities/login-history.entity'
import { File } from 'src/entities/file.entity'
import { GlobalService } from '../global/global.service'
import { User } from 'src/entities/user.entity'
import moment from 'moment'
import DATE from 'src/common/constants/date'

@Injectable()
export class AuthService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource,
    private globalService: GlobalService
  ) {}

  // ANCHOR login
  async login(dto: LoginDto) {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        account: dto.account,
        deletedAt: IsNull()
      }
    })

    if (!user || !(user.role === 'SA' || user.role === 'A')) {
      return { result: false, data: null }
    }

    if (await isMatch(dto.password, user.password)) {
      // insert login history
      const loginHistory = new LoginHistory()
      loginHistory.userId = user.id
      loginHistory.type = 1
      await this.datasource.getRepository(LoginHistory).save(loginHistory)
      return { result: true, data: user }
    } else {
      return { result: false, data: null }
    }
  }

  // ANCHOR logout
  async logout(userId) {
    // insert login history
    const loginHistory = new LoginHistory()
    loginHistory.userId = userId
    loginHistory.type = 0
    await this.datasource.getRepository(LoginHistory).save(loginHistory)
  }

  // ANCHOR get admin by user id
  async getAdminByUserId(userId: number) {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        id: userId,
        deletedAt: IsNull()
      }
    })

    const profile = await this.datasource.getRepository(File).find({
      where: {
        tableName: '_user',
        tablePk: userId
      }
    })

    if (profile.length !== 0) {
      profile[0]['url'] =
        (await this.globalService.getGlobal('imageDomain')) +
        '/' +
        profile[0].encName
    }
    user['profile'] = profile[0]

    return user
  }

  // ANCHOR update password
  async updatePassword(dto: UpdatePasswordDto) {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        id: dto.userId,
        deletedAt: IsNull()
      }
    })

    user.password = await createPassword(dto.newPassword)
    user.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(User).save(user)
  }
}
