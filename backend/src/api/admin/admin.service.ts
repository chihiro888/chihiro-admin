import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import DATE from 'src/common/constants/date'
import { createPassword, isMatch } from 'src/common/util/auth'
import { DataSource, IsNull } from 'typeorm'
import { CreateSystemAdminDto } from './dto/create-system-admin.dto'
import { LoginDto } from './dto/login.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import moment from 'moment'
import { GetAdminListDto } from './dto/get-admin-list.dto'
import { LoginHistory } from 'src/entities/login-history.entity'
import { UpdateAdminPasswordDto } from './dto/update-admin-password.dto'
import { GetLoginHistoryDetailDto } from './dto/get-login-history-detail.dto'
import { GetLoginHistoryListDto } from './dto/get-login-history-list.dto'
import { File } from 'src/entities/file.entity'
import { GlobalService } from '../global/global.service'
import { User } from 'src/entities/user.entity'
import { UpdateUsernameDto } from './dto/update-username.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { GetUserDetailDto } from './dto/get-user-detail.dto'
import { UpdateUserLevelDto } from './dto/update-user-level.dto'
import { DeleteUserDto } from './dto/delete-user.dto'
import { UpdateUserIntroDto } from './dto/update-user-intro.dto'
@Injectable()
export class AdminService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource,
    private globalService: GlobalService
  ) {}

  // ANCHOR check system admin
  async checkSystemAdmin(): Promise<boolean> {
    const adminList = await this.datasource.getRepository(User).find({
      where: {
        role: 'SA',
        deletedAt: IsNull()
      }
    })
    if (adminList.length === 0) {
      return true
    } else {
      return false
    }
  }

  // ANCHOR create system admin
  async createSystemAdmin(dto: CreateSystemAdminDto) {
    const user = new User()
    user.account = dto.account
    user.password = await createPassword(dto.password)
    user.username = dto.username
    user.role = 'SA'
    await this.datasource.getRepository(User).save(user)
  }

}
