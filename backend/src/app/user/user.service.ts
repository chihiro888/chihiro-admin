import { createPassword } from './../../common/util/auth'
import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto } from 'src/api/user/dto/create-user.dto'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  // ANCHOR find user by account
  async findUserByAccount(account: string): Promise<User> | null {
    const user = await this.userRepository.findOne({
      where: {
        account
      }
    })
    return user
  }

  // ANCHOR find user by id
  async findUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
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
    const result = await this.userRepository.save(user)

    return result
  }
}
