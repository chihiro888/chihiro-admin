// ** Module
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { DataSource, IsNull } from 'typeorm'
import moment from 'moment'

// ** Dto
import { CreateSystemAdminDto } from './dto/create-system-admin.dto'
import { GetAdminListDto } from './dto/get-admin-list.dto'
import { GetAdminDto } from './dto/get-admin.dto'
import { CreateAdminDto } from './dto/create-admin.dto'
import { DeleteAdminDto } from './dto/delete-admin.dto'
import { UpdateAdminUsernameDto } from './dto/update-admin-username.dto'
import { UpdateAdminRoleDto } from './dto/update-admin-role.dto'
import { UpdateAdminIntroDto } from './dto/update-admin-intro.dto'
import { GetLoginHistoryListDto } from './dto/get-login-history-list.dto'
import { GetLoginHistoryDto } from './dto/get-login-history.dto'
import { UpdateAdminPasswordDto } from './dto/update-admin-password.dto'

// ** Entity
import { Admin } from 'src/entities/admin.entity'
import { File } from 'src/entities/file.entity'
import { LoginHistory } from 'src/entities/login-history.entity'

// ** Util
import { createPassword } from 'src/common/util/auth'

// ** Service
import { GlobalService } from '../global/global.service'

// ** Constant
import DATE from 'src/common/constants/date'

@Injectable()
export class AdminService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource,
    private globalService: GlobalService
  ) {}

  // ANCHOR check system admin
  async checkSystemAdmin(): Promise<boolean> {
    const adminList = await this.datasource.getRepository(Admin).find({
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
    const admin = new Admin()
    admin.account = dto.account
    admin.password = await createPassword(dto.password)
    admin.username = dto.username
    admin.role = 'SA'

    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR get user by account
  async getAdminByAccount(account: string) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        account,
        deletedAt: IsNull()
      }
    })

    return admin
  }

  // ANCHOR get admin list
  async getAdminList(dto: GetAdminListDto) {
    const limit = 12
    const offset = (dto.page - 1) * limit

    // count
    const count = await this.datasource
      .getRepository(Admin)
      .createQueryBuilder('a')
      .select(['count(1) as count'])
      .leftJoin(
        (qb) =>
          qb
            .from(File, 'file')
            .select('file.table_pk')
            .where('file.table_name = :table_name', { table_name: '_admin' }),
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
      .getRepository(Admin)
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
            .where('file.table_name = :table_name', { table_name: '_admin' }),
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

  // ANCHOR get admin
  async getAdmin(dto: GetAdminDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
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

  // ANCHOR create admin
  async createAdmin(dto: CreateAdminDto) {
    const admin = new Admin()
    admin.account = dto.account
    admin.password = await createPassword(dto.password)
    admin.username = dto.username
    admin.intro = dto.intro
    admin.role = dto.role

    const createdUser = await this.datasource.getRepository(Admin).save(admin)
    if (dto.profile) {
      await this.updateAdminProfile(createdUser.id, dto.profile)
    }
  }

  // ANCHOR delete admin
  async deleteAdmin(dto: DeleteAdminDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })

    if (!admin) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Target to delete does not exist.',
          data: null
        },
        HttpStatus.BAD_REQUEST
      )
    }

    admin.deletedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR update admin password
  async updateAdminPassword(dto: UpdateAdminPasswordDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })
    admin.password = await createPassword(dto.newPassword)
    admin.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR update admin username
  async updateAdminUsername(dto: UpdateAdminUsernameDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })
    admin.username = dto.username
    admin.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR update admin role
  async updateAdminRole(dto: UpdateAdminRoleDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })
    admin.role = dto.role
    admin.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR update admin profile
  async updateAdminProfile(userId: number, profile: number[]) {
    const userProfile = await this.datasource.getRepository(File).findOne({
      where: {
        tableName: '_admin',
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
      updateProfile.tableName = '_admin'
      updateProfile.tablePk = userId
      await this.datasource.getRepository(File).save(updateProfile)
    }
  }

  // ANCHOR update admin intro
  async updateAdminIntro(dto: UpdateAdminIntroDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.id,
        deletedAt: IsNull()
      }
    })

    admin.intro = dto.intro
    await this.datasource.getRepository(Admin).save(admin)
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
      .innerJoin(Admin, 'a', 'lh.user_id = a.id')
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
      .innerJoin(Admin, 'a', 'lh.user_id = a.id')
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
