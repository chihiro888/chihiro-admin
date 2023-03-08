import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
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

  // ANCHOR common line chart query
  async lineChartQuery(tableName: string) {
    // y-axis
    const yAxis = await this.datasource.query(`
      select count(1) as data
      from ${tableName}
      where DATE_FORMAT(created_at, '%y%m%d') = DATE_FORMAT(now(), '%y%m%d')
      union all
      select count(1) as data
      from ${tableName}
      where DATE_FORMAT(created_at, '%y%m%d') = DATE_FORMAT(now() - INTERVAL 1 DAY, '%y%m%d')
      union all
      select count(1) as data
      from ${tableName}
      where DATE_FORMAT(created_at, '%y%m%d') = DATE_FORMAT(now() - INTERVAL 2 DAY, '%y%m%d')
      union all
      select count(1) 
      from ${tableName}
      where DATE_FORMAT(created_at, '%y%m%d') = DATE_FORMAT(now() - INTERVAL 3 DAY, '%y%m%d')
      union all
      select count(1) 
      from ${tableName}
      where DATE_FORMAT(created_at, '%y%m%d') = DATE_FORMAT(now() - INTERVAL 4 DAY, '%y%m%d')
      union all
      select count(1) 
      from ${tableName}
      where DATE_FORMAT(created_at, '%y%m%d') = DATE_FORMAT(now() - INTERVAL 5 DAY, '%y%m%d')
      union all
      select count(1) 
      from ${tableName}
      where DATE_FORMAT(created_at, '%y%m%d') = DATE_FORMAT(now() - INTERVAL 6 DAY, '%y%m%d');    
    `)

    // x-axis
    const xAxis = await this.datasource.query(`
      select DATE_FORMAT(now(), '%Y.%m.%d') as data
      union all
      select DATE_FORMAT(now() - INTERVAL 1 DAY, '%Y.%m.%d') as data
      union all
      select DATE_FORMAT(now() - INTERVAL 2 DAY, '%Y.%m.%d') as data
      union all
      select DATE_FORMAT(now() - INTERVAL 3 DAY, '%Y.%m.%d') as data
      union all
      select DATE_FORMAT(now() - INTERVAL 4 DAY, '%Y.%m.%d') as data
      union all
      select DATE_FORMAT(now() - INTERVAL 5 DAY, '%Y.%m.%d') as data
      union all
      select DATE_FORMAT(now() - INTERVAL 6 DAY, '%Y.%m.%d') as data
    `)

    const yAxisList = []
    for (let i = 0; i < yAxis.length; i++) {
      const val = yAxis[i].data
      yAxisList.push(val)
    }

    const xAxisList = []
    for (let i = 0; i < xAxis.length; i++) {
      const val = xAxis[i].data
      xAxisList.push(val)
    }

    return { yAxis: yAxisList.reverse(), xAxis: xAxisList.reverse() }
  }

  // ANCHOR get user count
  async getUserCount() {
    return await this.countQuery('_user')
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

  // ANCHOR get user line chart
  async getUserLineChart() {
    return await this.lineChartQuery('_user')
  }

  // ANCHOR get login history line chart
  async getLoginHistoryLineChart() {
    return await this.lineChartQuery('_login_history')
  }

  // ANCHOR get image line chart
  async getImageLineChart() {
    return await this.lineChartQuery('_file')
  }

  // ANCHOR get setting line chart
  async getSettingLineChart() {
    return await this.lineChartQuery('_global')
  }
}
