// ** Module
import { Inject, Injectable } from '@nestjs/common'
import { DataSource, IsNull } from 'typeorm'

// ** Dto
import { CreateSystemAdminDto } from './dto/create-system-admin.dto'

// ** Entity
import { User } from 'src/entities/user.entity'

// ** Util
import { createPassword } from 'src/common/util/auth'

@Injectable()
export class AdminService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
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
  async createSystemAdmin(dto: CreateSystemAdminDto): Promise<void> {
    const user = new User()
    user.account = dto.account
    user.password = await createPassword(dto.password)
    user.username = dto.username
    user.role = 'SA'
    await this.datasource.getRepository(User).save(user)
  }
}
