import { Inject, Injectable } from '@nestjs/common'
import { createPassword } from 'src/common/util/auth'
import { User } from 'src/entities/user.entity'
import { DataSource } from 'typeorm'
import { ChangePasswordDto } from './dto/change-password.dto'
import moment from 'moment'
import DATE from 'src/common/constants/date'
import { UserListPaginationDto } from './dto/user-list-pagination.dto'

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

  // ANCHOR user list pagination
  async userListPagination(dto: UserListPaginationDto) {
    // setting parameter
    const limit = 10
    const offset = (dto.page - 1) * limit

    // execute SQL
    const totalItemsCount = await this.datasource
      .getRepository(User)
      .createQueryBuilder('u')
      .select(['count(1) as totalItemsCount'])
      .where('1=1')
      .andWhere(dto.id === '' ? '1=1' : 'id = :id', {
        id: dto.id
      })
      .andWhere(dto.account === '' ? '1=1' : 'account like :account', {
        account: `%${dto.account}%`
      })
      .andWhere(dto.username === '' ? '1=1' : 'username like :username', {
        username: `%${dto.username}%`
      })
      .andWhere(dto.isAdmin === '' ? '1=1' : 'is_admin = :isAdmin', {
        isAdmin: dto.isAdmin
      })
      .andWhere(
        dto.isDeveloper === '' ? '1=1' : 'is_developer = :isDeveloper',
        {
          isDeveloper: dto.isDeveloper
        }
      )
      .andWhere(
        dto.createdAt === '' ? '1=1' : 'DATE(created_at) = :createdAt',
        {
          createdAt: dto.createdAt
        }
      )
      .getRawOne()

    const data = await this.datasource
      .getRepository(User)
      .createQueryBuilder('u')
      .select([
        'id as id',
        'account as account',
        'username as username',
        'is_admin as isAdmin',
        'is_developer as isDeveloper',
        'sign_in_at as signInAt',
        'sign_out_at as signOutAt',
        'created_at as createdAt',
        'updated_at as updatedAt'
      ])
      .where('1=1')
      .andWhere(dto.id === '' ? '1=1' : 'id = :id', {
        id: dto.id
      })
      .andWhere(dto.account === '' ? '1=1' : 'account like :account', {
        account: `%${dto.account}%`
      })
      .andWhere(dto.username === '' ? '1=1' : 'username like :username', {
        username: `%${dto.username}%`
      })
      .andWhere(dto.isAdmin === '' ? '1=1' : 'is_admin = :isAdmin', {
        isAdmin: dto.isAdmin
      })
      .andWhere(
        dto.isDeveloper === '' ? '1=1' : 'is_developer = :isDeveloper',
        {
          isDeveloper: dto.isDeveloper
        }
      )
      .andWhere(
        dto.createdAt === '' ? '1=1' : 'DATE(created_at) = :createdAt',
        {
          createdAt: dto.createdAt
        }
      )
      .orderBy('created_at', 'DESC')
      .limit(limit)
      .offset(offset)
      .getRawMany()

    return {
      totalItemsCount: Number(totalItemsCount.totalItemsCount),
      data
    }
  }
}
