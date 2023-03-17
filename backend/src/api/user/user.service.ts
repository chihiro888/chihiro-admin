// ** Module
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { DataSource, IsNull } from 'typeorm'
import moment from 'moment'

// ** Dto
import { GetLoginHistoryDto } from './dto/get-login-history.dto'
import { GetLoginHistoryListDto } from './dto/get-login-history-list.dto'
import { UpdateUsernameDto } from './dto/update-username.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { GetUserDto } from './dto/get-user.dto'
import { UpdateUserRoleDto } from './dto/update-user-role.dto'
import { DeleteUserDto } from './dto/delete-user.dto'
import { UpdateUserIntroDto } from './dto/update-user-intro.dto'
import { GetUserListDto } from './dto/get-user-list.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'

// ** Entity
import { File } from 'src/entities/file.entity'
import { LoginHistory } from 'src/entities/login-history.entity'
import { User } from 'src/entities/user.entity'

// ** Constant
import DATE from 'src/common/constants/date'

// ** Util
import { createPassword } from 'src/common/util/auth'

// ** Service
import { GlobalService } from '../global/global.service'

@Injectable()
export class UserService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource,
    private globalService: GlobalService
  ) {}

  // ANCHOR get user by account
  async getUserByAccount(account: string) {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        account,
        deletedAt: IsNull()
      }
    })

    return user
  }

  // ANCHOR get user list
  async getUserList(dto: GetUserListDto) {
    const limit = 12
    const offset = (dto.page - 1) * limit

    // count
    const count = await this.datasource
      .getRepository(User)
      .createQueryBuilder('a')
      .select(['count(1) as count'])
      .leftJoin(
        (qb) =>
          qb
            .from(File, 'file')
            .select('file.table_pk')
            .where('file.table_name = :table_name', { table_name: '_user' }),
        'f',
        'a.id = f.table_pk'
      )
      .where('1=1')
      .andWhere('a.deleted_at is null')
      .andWhere(dto.account === '' ? '1=1' : 'a.account like :account', {
        account: `%${dto.account}%`
      })
      .andWhere(dto.role === '' ? '1=1' : 'role = :role', {
        role: dto.role
      })
      .andWhere(
        dto.createdAt === '' ? '1=1' : 'DATE(a.created_at) = :createdAt',
        {
          createdAt: dto.createdAt
        }
      )
      .getRawOne()

    // data
    const data = await this.datasource
      .getRepository(User)
      .createQueryBuilder('a')
      .select([
        'a.id as id',
        'a.account as account',
        'a.password as password',
        'a.username as username',
        'a.intro as intro',
        'file_id as profileId',
        'f.abs_path as abs_path',
        `concat('${await this.globalService.getGlobal(
          'imageDomain'
        )}', '/', f.enc_name) as url`,
        `role as role`,
        'a.created_at as createdAt',
        'a.updated_at as updatedAt'
      ])
      .leftJoin(
        (qb) =>
          qb
            .from(File, 'file')
            .select([
              'file.id as file_id',
              'file.abs_path',
              'file.table_pk',
              'file.enc_name'
            ])
            .where('file.table_name = :table_name', { table_name: '_user' }),
        'f',
        'a.id = f.table_pk'
      )
      .where('1=1')
      .andWhere('a.deleted_at is null')
      .andWhere(dto.account === '' ? '1=1' : 'a.account like :account', {
        account: `%${dto.account}%`
      })
      .andWhere(dto.role === '' ? '1=1' : 'role = :role', {
        role: dto.role
      })
      .andWhere(
        dto.createdAt === '' ? '1=1' : 'DATE(a.created_at) = :createdAt',
        {
          createdAt: dto.createdAt
        }
      )
      .orderBy('a.created_at', 'DESC')
      .limit(limit)
      .offset(offset)
      .getRawMany()

    return {
      count: Number(count.count),
      data
    }
  }

  // ANCHOR get user
  async getUser(dto: GetUserDto) {
    const admin = await this.datasource.getRepository(User).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })

    const profile = await this.datasource.getRepository(File).find({
      where: {
        tableName: '_admin',
        tablePk: dto.id
      }
    })

    if (profile.length !== 0) {
      profile[0]['url'] =
        (await this.globalService.getGlobal('imageDomain')) +
        '/' +
        profile[0].encName
    }
    admin['profile'] = profile

    return admin
  }

  // ANCHOR create user
  async createUser(dto: CreateUserDto) {
    const user = new User()
    user.account = dto.account
    user.password = await createPassword(dto.password)
    user.username = dto.username
    user.intro = dto.intro
    user.role = dto.role

    const createdUser = await this.datasource.getRepository(User).save(user)
    if (dto.profile) {
      await this.updateUserProfile(createdUser.id, dto.profile)
    }
  }

  // ANCHOR delete user
  async deleteUser(dto: DeleteUserDto) {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })

    if (!user) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Target to delete does not exist.',
          data: null
        },
        HttpStatus.BAD_REQUEST
      )
    }

    user.deletedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(User).save(user)
  }

  // ANCHOR update user password
  async updateUserPassword(dto: UpdatePasswordDto) {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })
    user.password = await createPassword(dto.newPassword)
    user.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(User).save(user)
  }

  // ANCHOR update username
  async updateUsername(dto: UpdateUsernameDto) {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })
    user.username = dto.username
    user.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(User).save(user)
  }

  // ANCHOR update user role
  async updateUserRole(dto: UpdateUserRoleDto) {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })
    user.role = dto.role
    user.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(User).save(user)
  }

  // ANCHOR update user profile
  async updateUserProfile(userId: number, profile: number[]) {
    const userProfile = await this.datasource.getRepository(File).findOne({
      where: {
        tableName: '_user',
        tablePk: userId
      }
    })

    if (userProfile) {
      userProfile.tableName = null
      userProfile.tablePk = null
      userProfile.updatedAt = moment().format(DATE.DATETIME)
      await this.datasource.getRepository(File).save(userProfile)
    }
    if (profile[0]) {
      const updateProfile = await this.datasource.getRepository(File).findOne({
        where: {
          id: profile[0]
        }
      })
      updateProfile.tableName = '_user'
      updateProfile.tablePk = userId
      await this.datasource.getRepository(File).save(updateProfile)
    }
  }

  // ANCHOR update user intro
  async updateUserIntro(dto: UpdateUserIntroDto) {
    const user = await this.datasource.getRepository(User).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })

    user.intro = dto.intro
    await this.datasource.getRepository(User).save(user)
  }

  // ANCHOR get login history list
  async getLoginHistoryList(dto: GetLoginHistoryListDto) {
    const limit = 12
    const offset = (dto.page - 1) * limit

    // count
    const count = await this.datasource
      .getRepository(LoginHistory)
      .createQueryBuilder('lh')
      .select(['count(1) as count'])
      .innerJoin(User, 'a', 'lh.user_id = a.id')
      .where('1=1')
      .andWhere('lh.deleted_at is null')
      .andWhere(dto.account === '' ? '1=1' : 'a.account like :account', {
        account: `%${dto.account}%`
      })
      .andWhere(dto.type === '' ? '1=1' : 'lh.type = :type', {
        type: `${dto.type}`
      })
      .andWhere(
        dto.createdAt === '' ? '1=1' : 'DATE(lh.created_at) = :createdAt',
        {
          createdAt: dto.createdAt
        }
      )
      .getRawOne()

    // data
    const data = await this.datasource
      .getRepository(LoginHistory)
      .createQueryBuilder('lh')
      .select([
        'lh.id as id',
        'lh.user_id as userId',
        'a.account as account',
        'a.username as username',
        'lh.type as type',
        'lh.created_at as createdAt',
        'lh.updated_at as updatedAt'
      ])
      .innerJoin(User, 'a', 'lh.user_id = a.id')
      .where('1=1')
      .andWhere('lh.deleted_at is null')
      .andWhere(dto.account === '' ? '1=1' : 'a.account like :account', {
        account: `%${dto.account}%`
      })
      .andWhere(dto.type === '' ? '1=1' : 'lh.type = :type', {
        type: `${dto.type}`
      })
      .andWhere(
        dto.createdAt === '' ? '1=1' : 'DATE(lh.created_at) = :createdAt',
        {
          createdAt: dto.createdAt
        }
      )
      .orderBy('lh.created_at', 'DESC')
      .limit(limit)
      .offset(offset)
      .getRawMany()

    return {
      count: Number(count.count),
      data
    }
  }

  // ANCHOR get login history
  async getLoginHistory(dto: GetLoginHistoryDto) {
    const data = await this.datasource
      .getRepository(LoginHistory)
      .findOne({ where: { id: dto.id } })

    return data
  }
}
