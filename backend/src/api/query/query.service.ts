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
    const result = await this.datasource.query(`
      ${dto.query}
    `)

    return result
  }
}
