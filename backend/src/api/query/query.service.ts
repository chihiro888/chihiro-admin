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
    // check type
    let type = 'ETC'
    const selectReg = /^select|SELECT/
    const insertReg = /^insert|INSERT/
    const deleteReg = /^delete|DELETE/
    const updateReg = /^update|UPDATE/
    if (selectReg.test(dto.query)) {
      type = 'SEL'
    } else if (insertReg.test(dto.query)) {
      type = 'INS'
    } else if (deleteReg.test(dto.query)) {
      type = 'DEL'
    } else if (updateReg.test(dto.query)) {
      type = 'UPD'
    }

    try {
      // execute query
      const result = await this.datasource.query(`
      ${dto.query}
    `)

      // create history
      const query = new Query()
      query.type = type
      query.execQuery = dto.query
      query.successCnt = 1
      query.failCnt = 0
      query.ipAddress = dto.ipAddress
      query.userId = dto.userId
      await this.datasource.getRepository(Query).save(query)

      return result
    } catch (error) {
      // create history
      const query = new Query()
      query.type = 'ERR'
      query.execQuery = dto.query
      query.successCnt = 0
      query.failCnt = 1
      query.ipAddress = dto.ipAddress
      query.userId = dto.userId
      await this.datasource.getRepository(Query).save(query)

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
      .innerJoin(User, 'u', 'q.user_id = u.id')
      .where('1=1')
      .andWhere(dto.id === '' ? '1=1' : 'q.id = :id', {
        id: dto.id
      })
      .andWhere(dto.type === '' ? '1=1' : 'q.type = :type', {
        type: dto.type
      })
      .andWhere(dto.account === '' ? '1=1' : 'u.account like :account', {
        account: `%${dto.account}%`
      })
      .andWhere(
        dto.createdAt === '' ? '1=1' : 'DATE(q.created_at) = :createdAt',
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
      .andWhere(dto.account === '' ? '1=1' : 'u.account like :account', {
        account: `%${dto.account}%`
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
