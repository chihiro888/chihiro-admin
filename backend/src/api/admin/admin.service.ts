import { Inject, Injectable } from '@nestjs/common'
import DATE from 'src/common/constants/date'
import { createPassword, isMatch } from 'src/common/util/auth'
import { Admin } from 'src/entities/admin.entity'
import { DataSource } from 'typeorm'
import { CreateAdminDto } from './dto/create-admin.dto'
import { LoginDto } from './dto/login.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import moment from 'moment'
@Injectable()
export class AdminService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR check admin
  async checkAdmin(): Promise<boolean> {
    const adminList = await this.datasource.getRepository(Admin).find()
    if (adminList.length === 0) {
      return true
    } else {
      return false
    }
  }

  // ANCHOR get admin
  async getAdmin(userId: number) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: userId
      }
    })

    return admin
  }

  // ANCHOR create admin
  async createAdmin(dto: CreateAdminDto) {
    const admin = new Admin()
    admin.account = dto.account
    admin.password = await createPassword(dto.password)
    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR update password
  async updatePassword(dto: UpdatePasswordDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        id: dto.userId
      }
    })

    admin.password = await createPassword(dto.newPassword)
    admin.updatedAt = moment().format(DATE.DATETIME)
    await this.datasource.getRepository(Admin).save(admin)
  }

  // ANCHOR login
  async login(dto: LoginDto) {
    const admin = await this.datasource.getRepository(Admin).findOne({
      where: {
        account: dto.account
      }
    })

    if (!admin) {
      return { result: false, data: null }
    }

    if (await isMatch(dto.password, admin.password)) {
      // update login date time
      // admin.loginAt = moment().format(DATE.DATETIME)
      // await this.datasource.getRepository(Admin).save(admin)
      return { result: true, data: admin }
    } else {
      return { result: false, data: null }
    }
  }

  // ANCHOR logout
  async logout(userId) {
    // const admin = await this.datasource.getRepository(Admin).findOne({
    //   where: {
    //     id: userId
    //   }
    // })
    // admin.logoutAt = moment().format(DATE.DATETIME)
    // await this.datasource.getRepository(Admin).save(admin)
  }
}
