import { User } from './../../entities/user.entity'
import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { ExecuteQueryDto } from './dto/execute-query.dto'
import { QueryHistoryDto } from './dto/query-history.dto'
import { Query } from 'src/entities/query.entity'
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
      const sql = `INSERT INTO _query (type,exec_query, success_cnt,fail_cnt, user_id,ip_address,created_at,updated_at, deleted_at)
                    VALUE ('${type}','${query}',${successCnt},${failCnt},${userId},'${ipAddress}',now(), null, null)`
      const result = await this.datasource.query(sql)

      return result
    } catch (error) {
      return error
    }
  }

  // ANCHOR history list pagination
  async historyListPagination(dto: QueryHistoryDto) {
    // setting parameter
    const limit = 10
    const offset = (dto.page - 1) * limit

    // execute SQL
    const historyTotalCount = await this.datasource
      .getRepository(Query)
      .createQueryBuilder('q')
      .select(['count(1) as totalCount'])
      .where('1=1')
      .andWhere(dto.id === '' ? '1=1' : 'id = :id', {
        id: dto.id
      })
      .andWhere(dto.type === '' ? '1=1' : 'type = :type', {
        type: dto.type
      })
      .andWhere(
        dto.createdAt === '' ? '1=1' : 'DATE(created_at) = :createdAt',
        {
          createdAt: dto.createdAt
        }
      )
      .getRawOne()

    // execute SQL
    const historyList = await this.datasource
      .getRepository(Query)
      .createQueryBuilder('q')
      .select([
        'q.id as id',
        'q.type as type',
        'q.exec_query as execQuery',
        'q.success_cnt as successCnt',
        'q.fail_cnt as failCnt',
        'u.account as account',
        'q.ip_address as ipAddress',
        'q.created_at as createdAt'
      ])
      .innerJoin(User, 'u', 'q.user_id = u.id')
      .where('1=1')
      .andWhere(dto.id === '' ? '1=1' : 'q.id = :id', {
        id: dto.id
      })
      .andWhere(dto.type === '' ? '1=1' : 'q.type = :type', {
        type: dto.type
      })
      .andWhere(
        dto.createdAt === '' ? '1=1' : 'DATE(q.created_at) = :createdAt',
        {
          createdAt: dto.createdAt
        }
      )
      .orderBy('q.created_at', 'DESC')
      .limit(limit)
      .offset(offset)
      .getRawMany()

    return {
      historyTotalCount: Number(historyTotalCount.totalCount),
      historyList
    }
  }
}
