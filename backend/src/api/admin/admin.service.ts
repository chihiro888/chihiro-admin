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
import { LoginDto } from './dto/login.dto'
import { LogoutDto } from './dto/logout.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import { UpdateAdminProfileDto } from './dto/update-admin-profile.dto'

// ** Entity
import { Admin } from 'src/entities/admin.entity'
import { File } from 'src/entities/file.entity'
import { LoginHistory } from 'src/entities/login-history.entity'

// ** Util
import { createPassword, isMatch } from 'src/common/util/auth'

// ** Service
import { GlobalService } from '../global/global.service'

// ** Constant
import DATE from 'src/common/constants/date'

// ** Interface
import { CommonResult } from 'src/common/interface'
import { GetAdminBySessionDto } from './dto/get-admin-by-session.dto'

@Injectable()
export class AdminService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource,
    private globalService: GlobalService
  ) {}

  // ANCHOR login
  async login(dto: LoginDto): Promise<CommonResult> {
    let admin = null

    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const admin = await transactionalEntityManager
          .getRepository(Admin)
          .findOne({
            where: {
              account: dto.account,
              deletedAt: IsNull()
            }
          })

        // 유효성: 계정이 틀린 경우
        if (!admin) {
          throw new HttpException(
            'The account or password is not valid.',
            HttpStatus.BAD_REQUEST
          )
        }

        if (await isMatch(dto.password, admin.password)) {
          // 로그인 이력 기록
          const loginHistory = new LoginHistory()
          loginHistory.userId = admin.id
          loginHistory.type = 1
          await transactionalEntityManager
            .getRepository(LoginHistory)
            .save(loginHistory)
        } else {
          // 비밀번호가 틀린 경우
          throw new HttpException(
            'The account or password is not valid.',
            HttpStatus.BAD_REQUEST
          )
        }
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      data: admin,
      message: 'Login Successful'
    }
  }

  // ANCHOR logout
  async logout(dto: LogoutDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        // 로그아웃 이력 기록
        const loginHistory = new LoginHistory()
        loginHistory.userId = dto.userId
        loginHistory.type = 0

        await transactionalEntityManager
          .getRepository(LoginHistory)
          .save(loginHistory)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      data: null,
      message: ''
    }
  }

  // ANCHOR update password
  async updatePassword(dto: UpdatePasswordDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const user = await this.datasource.getRepository(Admin).findOne({
          where: {
            id: dto.userId,
            deletedAt: IsNull()
          }
        })

        if (await isMatch(dto.newPassword, user.password)) {
          // 새 비밀번호가 기존 비밀번호와 같은 경우
          throw new HttpException(
            '새로운 비밀번호가 기존 비밀번호와 동일합니다.',
            HttpStatus.BAD_REQUEST
          )
        }

        // 비밀번호 변경
        user.password = await createPassword(dto.newPassword)
        user.updatedAt = moment().format(DATE.DATETIME)

        await this.datasource.getRepository(Admin).save(user)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      data: null,
      message: '비밀번호 변경이 완료되었습니다.'
    }
  }

  // ANCHOR check system admin
  async checkSystemAdmin(): Promise<CommonResult> {
    let adminList = null
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        adminList = await transactionalEntityManager.getRepository(Admin).find({
          where: {
            role: 'SA',
            deletedAt: IsNull()
          }
        })
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: adminList.length === 0
    }
  }

  // ANCHOR create system admin
  async createSystemAdmin(dto: CreateSystemAdminDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const { data } = await this.checkSystemAdmin()
        if (!data) {
          throw new HttpException(
            'Administrator already exists.',
            HttpStatus.BAD_REQUEST
          )
        }

        const admin = new Admin()
        admin.account = dto.account
        admin.password = await createPassword(dto.password)
        admin.username = dto.username
        admin.role = 'SA'

        await transactionalEntityManager.getRepository(Admin).save(admin)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: 'Administrator creation is complete.',
      data: null
    }
  }

  // ANCHOR get admin list
  async getAdminList(dto: GetAdminListDto): Promise<CommonResult> {
    let count = null
    let totalCount = null
    let data = null

    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const limit = dto.limit === 0 ? 10 : dto.limit
        const offset = (dto.page - 1) * limit

        // count
        count = await transactionalEntityManager
          .getRepository(Admin)
          .createQueryBuilder('a')
          .select(['count(1) as count'])
          .leftJoin(
            (qb) =>
              qb
                .from(File, 'file')
                .select('file.table_pk')
                .where('file.table_name = :table_name', {
                  table_name: '_admin'
                }),
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
            dto.createdStartAt === ''
              ? '1=1'
              : 'DATE(a.created_at) >= :createdStartAt',
            {
              createdStartAt: dto.createdStartAt
            }
          )
          .andWhere(
            dto.createdEndAt === ''
              ? '1=1'
              : 'DATE(a.created_at) <= :createdEndAt',
            {
              createdEndAt: dto.createdEndAt
            }
          )
          .getRawOne()

        // count
        totalCount = await transactionalEntityManager
          .getRepository(Admin)
          .createQueryBuilder('a')
          .select(['count(1) as count'])
          .leftJoin(
            (qb) =>
              qb
                .from(File, 'file')
                .select('file.table_pk')
                .where('file.table_name = :table_name', {
                  table_name: '_admin'
                }),
            'f',
            'a.id = f.table_pk'
          )
          .where('1=1')
          .andWhere('a.deleted_at is null')
          .getRawOne()

        // data
        data = await transactionalEntityManager
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
                .where('file.table_name = :table_name', {
                  table_name: '_admin'
                }),
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
            dto.createdStartAt === ''
              ? '1=1'
              : 'DATE(a.created_at) >= :createdStartAt',
            {
              createdStartAt: dto.createdStartAt
            }
          )
          .andWhere(
            dto.createdEndAt === ''
              ? '1=1'
              : 'DATE(a.created_at) <= :createdEndAt',
            {
              createdEndAt: dto.createdEndAt
            }
          )
          .orderBy('a.created_at', 'DESC')
          .limit(limit)
          .offset(offset)
          .getRawMany()
          
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: {
        count: Number(count.count),
        data: data,
        info: [
          { label: '현재', value: Number(count.count) },
          { label: '전체', value: Number(totalCount.count) }
        ]
      }
    }
  }

  // ANCHOR get admin by session
  async getAdminBySession(dto: GetAdminBySessionDto): Promise<CommonResult> {
    let admin = null

    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        admin = await transactionalEntityManager.getRepository(Admin).findOne({
          where: {
            id: dto.userId,
            deletedAt: IsNull()
          }
        })

        const profile = await transactionalEntityManager
          .getRepository(File)
          .find({
            where: {
              tableName: '_admin',
              tablePk: dto.userId
            }
          })

        if (profile.length !== 0) {
          profile[0]['url'] =
            (await this.globalService.getGlobal('imageDomain')) +
            '/' +
            profile[0].encName
        }
        admin['profile'] = profile
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: admin
    }
  }

  // ANCHOR get admin
  async getAdmin(dto: GetAdminDto): Promise<CommonResult> {
    let admin = null

    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        admin = await transactionalEntityManager.getRepository(Admin).findOne({
          where: {
            id: dto.id,
            deletedAt: IsNull()
          }
        })

        const profile = await transactionalEntityManager
          .getRepository(File)
          .find({
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
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: admin
    }
  }

  // ANCHOR create admin
  async createAdmin(dto: CreateAdminDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const admin = new Admin()
        admin.account = dto.account
        admin.password = await createPassword(dto.password)
        admin.username = dto.username
        admin.intro = dto.intro
        admin.role = dto.role

        const createdUser = await transactionalEntityManager
          .getRepository(Admin)
          .save(admin)
        if (dto.profile) {
          const params = new UpdateAdminProfileDto()
          params.id = createdUser.id
          params.profile = dto.profile
          await this.updateAdminProfile(params)
        }
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '관리자 추가가 완료되었습니다.',
      data: null
    }
  }

  // ANCHOR delete admin
  async deleteAdmin(dto: DeleteAdminDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        if (dto.userId === Number(dto.id)) {
          throw new HttpException(
            '본인 아이디는 삭제할 수 없습니다.',
            HttpStatus.BAD_REQUEST
          )
        }

        const admin = await transactionalEntityManager
          .getRepository(Admin)
          .findOne({
            where: {
              id: dto.id,
              deletedAt: IsNull()
            }
          })

        if (!admin) {
          throw new HttpException(
            '삭제하려는 대상이 존재하지 않습니다.',
            HttpStatus.BAD_REQUEST
          )
        }

        admin.deletedAt = moment().format(DATE.DATETIME)
        await transactionalEntityManager.getRepository(Admin).save(admin)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '관리자 삭제가 완료되었습니다.',
      data: null
    }
  }

  // ANCHOR update admin password
  async updateAdminPassword(
    dto: UpdateAdminPasswordDto
  ): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const admin = await transactionalEntityManager
          .getRepository(Admin)
          .findOne({
            where: {
              id: dto.id,
              deletedAt: IsNull()
            }
          })
        admin.password = await createPassword(dto.newPassword)
        admin.updatedAt = moment().format(DATE.DATETIME)
        await transactionalEntityManager.getRepository(Admin).save(admin)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '비밀번호 변경이 완료되었습니다.',
      data: null
    }
  }

  // ANCHOR update admin username
  async updateAdminUsername(
    dto: UpdateAdminUsernameDto
  ): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const admin = await transactionalEntityManager
          .getRepository(Admin)
          .findOne({
            where: {
              id: dto.id,
              deletedAt: IsNull()
            }
          })
        admin.username = dto.username
        admin.updatedAt = moment().format(DATE.DATETIME)
        await transactionalEntityManager.getRepository(Admin).save(admin)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '관리자명 변경이 완료되었습니다.',
      data: null
    }
  }

  // ANCHOR update admin role
  async updateAdminRole(dto: UpdateAdminRoleDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const admin = await transactionalEntityManager
          .getRepository(Admin)
          .findOne({
            where: {
              id: dto.id,
              deletedAt: IsNull()
            }
          })
        admin.role = dto.role
        admin.updatedAt = moment().format(DATE.DATETIME)
        await transactionalEntityManager.getRepository(Admin).save(admin)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '관리자 권한 변경이 완료되었습니다.',
      data: null
    }
  }

  // ANCHOR update admin profile
  async updateAdminProfile(dto: UpdateAdminProfileDto): Promise<CommonResult> {
    const userId = dto.id
    const profile = dto.profile

    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const userProfile = await transactionalEntityManager
          .getRepository(File)
          .findOne({
            where: {
              tableName: '_admin',
              tablePk: userId
            }
          })

        if (userProfile) {
          userProfile.tableName = null
          userProfile.tablePk = null
          userProfile.updatedAt = moment().format(DATE.DATETIME)
          await transactionalEntityManager.getRepository(File).save(userProfile)
        }
        if (profile[0]) {
          const updateProfile = await transactionalEntityManager
            .getRepository(File)
            .findOne({
              where: {
                id: profile[0]
              }
            })
          updateProfile.tableName = '_admin'
          updateProfile.tablePk = userId
          await transactionalEntityManager
            .getRepository(File)
            .save(updateProfile)
        }
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '관리자 프로필 변경이 완료되었습니다.',
      data: null
    }
  }

  // ANCHOR update admin intro
  async updateAdminIntro(dto: UpdateAdminIntroDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const admin = await transactionalEntityManager
          .getRepository(Admin)
          .findOne({
            where: {
              id: dto.id,
              deletedAt: IsNull()
            }
          })

        admin.intro = dto.intro
        await transactionalEntityManager.getRepository(Admin).save(admin)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '관리자 자기소개 변경이 완료되었습니다.',
      data: null
    }
  }

  // ANCHOR get login history list
  async getLoginHistoryList(
    dto: GetLoginHistoryListDto
  ): Promise<CommonResult> {
    let count = null
    let totalCount = null
    let loginCount = null
    let logoutCount = null
    let data = null

    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const limit = dto.limit === 0 ? 10 : dto.limit
        const offset = (dto.page - 1) * limit

        // count
        count = await transactionalEntityManager
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
            dto.createdStartAt === ''
              ? '1=1'
              : 'DATE(lh.created_at) >= :createdStartAt',
            {
              createdStartAt: dto.createdStartAt
            }
          )
          .andWhere(
            dto.createdEndAt === ''
              ? '1=1'
              : 'DATE(lh.created_at) <= :createdEndAt',
            {
              createdEndAt: dto.createdEndAt
            }
          )
          .getRawOne()

        // count
        totalCount = await transactionalEntityManager
          .getRepository(LoginHistory)
          .createQueryBuilder('lh')
          .select(['count(1) as count'])
          .innerJoin(Admin, 'a', 'lh.user_id = a.id')
          .where('1=1')
          .andWhere('lh.deleted_at is null')
          .andWhere(dto.account === '' ? '1=1' : 'a.account like :account', {
            account: `%${dto.account}%`
          })
          .andWhere(
            dto.createdStartAt === ''
              ? '1=1'
              : 'DATE(lh.created_at) >= :createdStartAt',
            {
              createdStartAt: dto.createdStartAt
            }
          )
          .andWhere(
            dto.createdEndAt === ''
              ? '1=1'
              : 'DATE(lh.created_at) <= :createdEndAt',
            {
              createdEndAt: dto.createdEndAt
            }
          )
          .getRawOne()

        // count
        loginCount = await transactionalEntityManager
          .getRepository(LoginHistory)
          .createQueryBuilder('lh')
          .select(['count(1) as count'])
          .innerJoin(Admin, 'a', 'lh.user_id = a.id')
          .where('1=1')
          .andWhere('lh.deleted_at is null')
          .andWhere(dto.account === '' ? '1=1' : 'a.account like :account', {
            account: `%${dto.account}%`
          })
          .andWhere('lh.type = 1')

          .getRawOne()

        // count
        logoutCount = await transactionalEntityManager
          .getRepository(LoginHistory)
          .createQueryBuilder('lh')
          .select(['count(1) as count'])
          .innerJoin(Admin, 'a', 'lh.user_id = a.id')
          .where('1=1')
          .andWhere('lh.deleted_at is null')
          .andWhere(dto.account === '' ? '1=1' : 'a.account like :account', {
            account: `%${dto.account}%`
          })
          .andWhere('lh.type = 0')

          .getRawOne()

        // data
        data = await transactionalEntityManager
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
            dto.createdStartAt === ''
              ? '1=1'
              : 'DATE(lh.created_at) >= :createdStartAt',
            {
              createdStartAt: dto.createdStartAt
            }
          )
          .andWhere(
            dto.createdEndAt === ''
              ? '1=1'
              : 'DATE(lh.created_at) <= :createdEndAt',
            {
              createdEndAt: dto.createdEndAt
            }
          )
          .orderBy('lh.created_at', 'DESC')
          .limit(limit)
          .offset(offset)
          .getRawMany()
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: {
        count: Number(count.count),
        data: data,
        info: [
          { label: '현재', value: Number(count.count) },
          { label: '전체', value: Number(totalCount.count) },
          { label: '로그인', value: Number(loginCount.count) },
          { label: '로그아웃', value: Number(logoutCount.count) }
        ]
      }
    }
  }

  // ANCHOR get login history
  async getLoginHistory(dto: GetLoginHistoryDto): Promise<CommonResult> {
    let data = null

    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        data = await transactionalEntityManager
          .getRepository(LoginHistory)
          .findOne({ where: { id: dto.id } })
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: data
    }
  }
}
