// ** Module
import { HttpStatus, Inject, Injectable } from '@nestjs/common'
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
import { handleError } from 'src/common/util'

// ** Service
import { GlobalService } from '../global/global.service'

// ** Constant
import DATE from 'src/common/constants/date'

// ** Interface
import { Result } from 'src/common/interface'
import { GetAdminBySessionDto } from './dto/get-admin-by-session.dto'

@Injectable()
export class AdminService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource,
    private globalService: GlobalService
  ) {}

  // ANCHOR login
  async login(dto: LoginDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const admin = await queryRunner.manager.getRepository(Admin).findOne({
        where: {
          account: dto.account,
          deletedAt: IsNull()
        }
      })

      // 유효성: 계정이 틀린 경우
      if (!admin) {
        return {
          statusCode: HttpStatus.OK,
          data: null,
          message: 'The account or password is not valid.'
        }
      }

      if (await isMatch(dto.password, admin.password)) {
        // 로그인 이력 기록
        const loginHistory = new LoginHistory()
        loginHistory.userId = admin.id
        loginHistory.type = 1
        await queryRunner.manager.getRepository(LoginHistory).save(loginHistory)

        await queryRunner.commitTransaction()

        return {
          statusCode: HttpStatus.OK,
          data: admin,
          message: 'Login Successful'
        }
      } else {
        // 비밀번호가 틀린 경우
        return {
          statusCode: HttpStatus.UNAUTHORIZED,
          data: null,
          message: 'The account or password is not valid.'
        }
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR logout
  async logout(dto: LogoutDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // 로그아웃 이력 기록
      const loginHistory = new LoginHistory()
      loginHistory.userId = dto.userId
      loginHistory.type = 0

      await queryRunner.manager.getRepository(LoginHistory).save(loginHistory)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        data: null,
        message: ''
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR update password
  async updatePassword(dto: UpdatePasswordDto) {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const user = await this.datasource.getRepository(Admin).findOne({
        where: {
          id: dto.userId,
          deletedAt: IsNull()
        }
      })

      if (await isMatch(dto.newPassword, user.password)) {
        // 새 비밀번호가 기존 비밀번호와 같은 경우
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          data: null,
          message: '새로운 비밀번호가 기존 비밀번호와 동일합니다.'
        }
      }

      // 비밀번호 변경
      user.password = await createPassword(dto.newPassword)
      user.updatedAt = moment().format(DATE.DATETIME)

      await this.datasource.getRepository(Admin).save(user)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        data: null,
        message: '비밀번호 변경이 완료되었습니다.'
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR check system admin
  async checkSystemAdmin(): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const adminList = await queryRunner.manager.getRepository(Admin).find({
        where: {
          role: 'SA',
          deletedAt: IsNull()
        }
      })
      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: adminList.length === 0
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR create system admin
  async createSystemAdmin(dto: CreateSystemAdminDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const { data } = await this.checkSystemAdmin()
      if (!data) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Administrator already exists.',
          data: null
        }
      }

      const admin = new Admin()
      admin.account = dto.account
      admin.password = await createPassword(dto.password)
      admin.username = dto.username
      admin.role = 'SA'

      await queryRunner.manager.getRepository(Admin).save(admin)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: 'Administrator creation is complete.',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR get admin list
  async getAdminList(dto: GetAdminListDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const limit = dto.limit === 0 ? 10 : dto.limit
      const offset = (dto.page - 1) * limit

      // count
      const count = await queryRunner.manager
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
      const totalCount = await queryRunner.manager
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
        .getRawOne()

      // data
      const data = await queryRunner.manager
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

      return {
        statusCode: HttpStatus.OK,
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
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR get admin by session
  async getAdminBySession(dto: GetAdminBySessionDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const admin = await queryRunner.manager.getRepository(Admin).findOne({
        where: {
          id: dto.userId,
          deletedAt: IsNull()
        }
      })

      const profile = await queryRunner.manager.getRepository(File).find({
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

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: admin
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR get admin
  async getAdmin(dto: GetAdminDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const admin = await queryRunner.manager.getRepository(Admin).findOne({
        where: {
          id: dto.id,
          deletedAt: IsNull()
        }
      })

      const profile = await queryRunner.manager.getRepository(File).find({
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

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: admin
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR create admin
  async createAdmin(dto: CreateAdminDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const admin = new Admin()
      admin.account = dto.account
      admin.password = await createPassword(dto.password)
      admin.username = dto.username
      admin.intro = dto.intro
      admin.role = dto.role

      const createdUser = await queryRunner.manager
        .getRepository(Admin)
        .save(admin)
      if (dto.profile) {
        const params = new UpdateAdminProfileDto()
        params.id = createdUser.id
        params.profile = dto.profile
        await this.updateAdminProfile(params)
      }

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '관리자 추가가 완료되었습니다.',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR delete admin
  async deleteAdmin(dto: DeleteAdminDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      if (dto.userId === Number(dto.id)) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: '본인 아이디는 삭제할 수 없습니다.',
          data: null
        }
      }

      const admin = await queryRunner.manager.getRepository(Admin).findOne({
        where: {
          id: dto.id,
          deletedAt: IsNull()
        }
      })

      if (!admin) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: '삭제하려는 대상이 존재하지 않습니다.',
          data: null
        }
      }

      admin.deletedAt = moment().format(DATE.DATETIME)
      await queryRunner.manager.getRepository(Admin).save(admin)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '관리자 삭제가 완료되었습니다.',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR update admin password
  async updateAdminPassword(dto: UpdateAdminPasswordDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const admin = await queryRunner.manager.getRepository(Admin).findOne({
        where: {
          id: dto.id,
          deletedAt: IsNull()
        }
      })
      admin.password = await createPassword(dto.newPassword)
      admin.updatedAt = moment().format(DATE.DATETIME)
      await queryRunner.manager.getRepository(Admin).save(admin)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '비밀번호 변경이 완료되었습니다.',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR update admin username
  async updateAdminUsername(dto: UpdateAdminUsernameDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const admin = await queryRunner.manager.getRepository(Admin).findOne({
        where: {
          id: dto.id,
          deletedAt: IsNull()
        }
      })
      admin.username = dto.username
      admin.updatedAt = moment().format(DATE.DATETIME)
      await queryRunner.manager.getRepository(Admin).save(admin)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '관리자명 변경이 완료되었습니다.',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR update admin role
  async updateAdminRole(dto: UpdateAdminRoleDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const admin = await queryRunner.manager.getRepository(Admin).findOne({
        where: {
          id: dto.id,
          deletedAt: IsNull()
        }
      })
      admin.role = dto.role
      admin.updatedAt = moment().format(DATE.DATETIME)
      await queryRunner.manager.getRepository(Admin).save(admin)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '관리자 권한 변경이 완료되었습니다.',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR update admin profile
  async updateAdminProfile(dto: UpdateAdminProfileDto): Promise<Result> {
    const userId = dto.id
    const profile = dto.profile

    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const userProfile = await queryRunner.manager
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
        await queryRunner.manager.getRepository(File).save(userProfile)
      }
      if (profile[0]) {
        const updateProfile = await queryRunner.manager
          .getRepository(File)
          .findOne({
            where: {
              id: profile[0]
            }
          })
        updateProfile.tableName = '_admin'
        updateProfile.tablePk = userId
        await queryRunner.manager.getRepository(File).save(updateProfile)
      }

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '관리자 프로필 변경이 완료되었습니다.',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR update admin intro
  async updateAdminIntro(dto: UpdateAdminIntroDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const admin = await queryRunner.manager.getRepository(Admin).findOne({
        where: {
          id: dto.id,
          deletedAt: IsNull()
        }
      })

      admin.intro = dto.intro
      await queryRunner.manager.getRepository(Admin).save(admin)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '관리자 자기소개 변경이 완료되었습니다.',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR get login history list
  async getLoginHistoryList(dto: GetLoginHistoryListDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const limit = dto.limit === 0 ? 10 : dto.limit
      const offset = (dto.page - 1) * limit

      // count
      const count = await queryRunner.manager
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
      const totalCount = await queryRunner.manager
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
      const loginCount = await queryRunner.manager
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
      const logoutCount = await queryRunner.manager
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
      const data = await queryRunner.manager
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

      return {
        statusCode: HttpStatus.OK,
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
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR get login history
  async getLoginHistory(dto: GetLoginHistoryDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const data = await queryRunner.manager
        .getRepository(LoginHistory)
        .findOne({ where: { id: dto.id } })

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: data
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }
}
