import { Inject, Injectable } from '@nestjs/common'
import { createPassword } from 'src/common/util/auth'
import { User } from 'src/entities/user.entity'
import { DataSource } from 'typeorm'
import { ChangePasswordDto } from './dto/change-password.dto'
import * as moment from 'moment'
import DATE from 'src/common/constants/date'

@Injectable()
export class UserService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR find user by account
  async findUserByAccount(account: string): Promise<User> | null {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        account
      }
    })
    return user
  }

  // ANCHOR find user by id
  async findUserById(id: number): Promise<User> {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        id
      }
    })
    return user
  }

  // ANCHOR change password
  async changePassword(dto: ChangePasswordDto): Promise<boolean> {
    const hash = await createPassword(dto.newPassword)
    const result = await this.datasource
      .createQueryBuilder()
      .update(User)
      .set({
        password: hash,
        updatedAt: moment().format(DATE.FULL_FORMAT)
      })
      .where('id = :id', { id: dto.userId })
      .execute()

    if (result.affected === 1) {
      return true
    } else {
      return false
    }
  }
}
