import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { ExecuteQueryDto } from './dto/execute-query.dto'

@Injectable()
export class QueryService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR execute query
  async executeQuery(dto: ExecuteQueryDto) {
    try {
      const result = await this.datasource.query(`
      ${dto.query}
    `)

      return result
    } catch (error) {
      return error
    }
  }

  // ANCHOR register history execute query
  async registerHistoryForExecuteQuery(
    dto: ExecuteQueryDto,
    execResult: boolean,
    userId: number,
    ipAddress: string
  ) {
    try {
      // Params
      const query = dto.query
      let type = ''
      let successCnt = 0
      let failCnt = 0

      // check Query Type
      if (query.match(/INSERT/g)) {
        type = 'IST'
      } else if (query.match(/UPDATE/g)) {
        type = 'UPD'
      } else if (query.match(/SELECT/g)) {
        type = 'SLT'
      } else if (query.match(/DELETE/g)) {
        type = 'DEL'
      }

      // check execQueryResult
      if (execResult) {
        successCnt++
      } else {
        failCnt++
      }

      // history insert
      const sql = `INSERT INTO (type,exec_query, success_cnt,fail_cnt, user_id,ip_address,created_at,updated,deleted_at)
                    VALUE (${type},${query},${successCnt},${failCnt},${userId},${ipAddress},now())`
      const result = await this.datasource.query(sql)

      return result
    } catch (error) {
      return error
    }
  }
}
