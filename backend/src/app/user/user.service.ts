import { createPassword } from './../../common/util/auth'
import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto } from 'src/api/user/dto/create-user.dto'

import { User } from './user.entity'
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

  // ANCHOR create user
  async createUser(dto: CreateUserDto) {
    // init user object
    const user = new User()
    user.account = dto.account
    const hash = await createPassword(dto.password)
    user.password = hash
    user.username = dto.username

    // create user
    const result = await this.datasource.getRepository(User).save(user)

    return result
  }
}
