import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { Admin } from 'src/entities/admin.entity'
import { DataSource } from 'typeorm'

@Injectable()
export class DashboardService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR common count query
  async countQuery(tableName: string) {
    // count
    const count = await this.datasource.query(`
      select  w.total,
              w.today,
              (w.today - w.yesterday) as diff
      from (
        select (select count(1) from ${tableName}) as total
        ,(select count(1) from ${tableName} where DATE_FORMAT(created_at, '%y%m%d') = DATE_FORMAT(now(), '%y%m%d')) as today
        ,(select count(1) from ${tableName} where DATE_FORMAT(created_at, '%y%m%d') = DATE_FORMAT(now() - INTERVAL 1 DAY, '%y%m%d')) as yesterday
      ) w;
    `)

    return count[0]
  }

  // ANCHOR get admin count
  async getAdminCount() {
    return await this.countQuery('_admin')
  }

  // ANCHOR get login history count
  async getLoginHistoryCount() {
    return await this.countQuery('_login_history')
  }

  // ANCHOR get image count
  async getImageCount() {
    return await this.countQuery('_file')
  }

  // ANCHOR get setting count
  async getSettingCount() {
    return await this.countQuery('_global')
  }
}
