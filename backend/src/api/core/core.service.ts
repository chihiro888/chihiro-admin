import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { Page } from 'src/entities/page.entity'
import { DataSource } from 'typeorm'
import { GetPageByUrlDto } from './dto/get-page-by-url.dto'
import moment from 'moment'
import DATE from 'src/common/constants/date'
import { Result } from 'src/common/interface'

@Injectable()
export class CoreService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR convert JSON
  convertJson(data) {
    try {
      return JSON.parse(data)
    } catch (e) {
      return []
    }
  }

  // ANCHOR get page
  async getPageByUrl(dto: GetPageByUrlDto) {
    try {
      const data = await this.datasource.getRepository(Page).findOne({
        where: {
          url: dto.url,
          deletedAt: null
        }
      })

      // JSON 변경
      if (data) {
        data.tableHeader = this.convertJson(data.tableHeader)
        data.addForm = this.convertJson(data.addForm)
        data.detailForm = this.convertJson(data.detailForm)
        data.searchForm = this.convertJson(data.searchForm)
        data.actionList = this.convertJson(data.actionList)

        return { result: true, data: data }
      } else {
        return { result: false, data: 'Cannot found page' }
      }
    } catch (err) {
      return { result: false, data: 'Unknown error' }
    }
  }
}
