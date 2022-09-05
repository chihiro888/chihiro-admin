import { Inject, Injectable } from '@nestjs/common'
import { User } from 'src/entities/user.entity'
import { DataSource } from 'typeorm'

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
}
