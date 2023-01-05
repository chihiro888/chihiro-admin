import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import DATE from 'src/common/constants/date'
import { createPassword, isMatch } from 'src/common/util/auth'
import { Admin } from 'src/entities/admin.entity'
import { DataSource, IsNull } from 'typeorm'
import { CreateSystemAdminDto } from './dto/create-system-admin.dto'
import { LoginDto } from './dto/login.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import moment from 'moment'
import { GetAdminListDto } from './dto/get-admin-list.dto'
import { LoginHistory } from 'src/entities/login-history.entity'
import { GetAdminDetailDto } from './dto/get-admin-detail.dto'
import { CreateAdminDto } from './dto/create-admin.dto'
import { DeleteAdminDto } from './dto/delete-admin.dto'
import { UpdateAdminPasswordDto } from './dto/update-admin-password.dto'
import { UpdateAdminUsernameDto } from './dto/update-admin-username.dto'
import { UpdateAdminLevelDto } from './dto/update-admin-level.dto'
@Injectable()
export class AdminService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR check system admin
  async checkSystemAdmin(): Promise<boolean> {
    const adminList = await this.datasource.getRepository(Admin).find({
      where: {
        isSystemAdmin: 1,
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
    const admin = new Admin()
    admin.account = dto.account
    admin.password = await createPassword(dto.password)
    admin.username = dto.username
    admin.isSystemAdmin = 1
    admin.isAdmin = 1
    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR login
  async login(dto: LoginDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        account: dto.account,
        deletedAt: IsNull()
      }
    })

    if (!admin) {
      return { result: false, data: null }
    }

    if (await isMatch(dto.password, admin.password)) {
      // insert login history
      const loginHistory = new LoginHistory()
      loginHistory.userId = admin.id
      loginHistory.type = 1
      await this.datasource.getRepository(LoginHistory).save(loginHistory)
      return { result: true, data: admin }
    } else {
      return { result: false, data: null }
    }
  }

  // ANCHOR logout
  async logout(userId) {
    // insert login history
    const loginHistory = new LoginHistory()
    loginHistory.userId = userId
    loginHistory.type = 0
    await this.datasource.getRepository(LoginHistory).save(loginHistory)
  }

  // ANCHOR get admin by user id
  async getAdminByUserId(userId: number) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: userId,
        deletedAt: IsNull()
      }
    })

    return admin
  }

  // ANCHOR get admin by account
  async getAdminByAccount(account: string) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        account,
        deletedAt: IsNull()
      }
    })

    return admin
  }

  // ANCHOR update password
  async updatePassword(dto: UpdatePasswordDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.userId,
        deletedAt: IsNull()
      }
    })

    admin.password = await createPassword(dto.newPassword)
    admin.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(Admin).save(admin)
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
      .where('1=1')
      .andWhere('deleted_at is null')
      .andWhere(dto.account === '' ? '1=1' : 'a.account like :account', {
        account: `%${dto.account}%`
      })
      .andWhere(
        dto.level === 'SA' ? 'is_system_admin = 1 and is_admin = 1' : '1=1'
      )
      .andWhere(
        dto.level === 'A' ? 'is_system_admin = 0 and is_admin = 1' : '1=1'
      )
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
        'id as id',
        'account as account',
        'password as password',
        'username as username',
        `case 
          when is_system_admin = 1 and is_admin = 1
          then 1
          else 0
        end as level`,
        'is_system_admin as isSystemAdmin',
        'is_admin as isAdmin',
        'created_at as createdAt',
        'updated_at as updatedAt'
      ])
      .where('1=1')
      .andWhere('deleted_at is null')
      .andWhere(dto.account === '' ? '1=1' : 'a.account like :account', {
        account: `%${dto.account}%`
      })
      .andWhere(
        dto.level === 'SA' ? 'is_system_admin = 1 and is_admin = 1' : '1=1'
      )
      .andWhere(
        dto.level === 'A' ? 'is_system_admin = 0 and is_admin = 1' : '1=1'
      )
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

  // ANCHOR get admin detail
  async getAdminDetail(dto: GetAdminDetailDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.userId,
        deletedAt: IsNull()
      }
    })
    return admin
  }

  // ANCHOR create admin
  async createAdmin(dto: CreateAdminDto) {
    const admin = new Admin()
    admin.account = dto.account
    admin.password = await createPassword(dto.password)
    admin.username = dto.username
    if (dto.level === 'SA') {
      admin.isSystemAdmin = 1
      admin.isAdmin = 1
    } else {
      admin.isSystemAdmin = 0
      admin.isAdmin = 1
    }
    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR delete admin
  async deleteAdmin(dto: DeleteAdminDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.userId,
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
        id: dto.userId,
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
        id: dto.userId,
        deletedAt: IsNull()
      }
    })
    admin.username = dto.username
    admin.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR update admin level
  async updateAdminLevel(dto: UpdateAdminLevelDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.userId,
        deletedAt: IsNull()
      }
    })
    if (dto.level === 'SA') {
      admin.isSystemAdmin = 1
      admin.isAdmin = 1
    } else {
      admin.isSystemAdmin = 0
      admin.isAdmin = 1
    }
    admin.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(Admin).save(admin)
  }
}
