import { Inject, Injectable } from '@nestjs/common'
import { isMatch } from 'src/common/util/auth'
import { DataSource, IsNull } from 'typeorm'
import { LoginDto } from './dto/login.dto'

import { LoginHistory } from 'src/entities/login-history.entity'

import { File } from 'src/entities/file.entity'
import { GlobalService } from '../global/global.service'
import { User } from 'src/entities/user.entity'

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

    if (!user) {
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
}
