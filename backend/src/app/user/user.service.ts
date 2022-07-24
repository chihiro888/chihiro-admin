import { Inject, Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  // ANCHOR find account
  async findUserByAccount(account: string) {
    const user = await this.userRepository.findOne({
      where: {
        account
      }
    })
    return user
  }
}
