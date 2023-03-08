import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { Page } from 'src/entities/page.entity'
import { DataSource } from 'typeorm'
import { GetPageListDto } from './dto/get-user-list.dto'

@Injectable()
export class BuilderService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR get page list
  async getPageList(dto: GetPageListDto) {
    const limit = 12
    const offset = (dto.page - 1) * limit

    // count
    const count = await this.datasource
      .getRepository(Page)
      .createQueryBuilder('p')
      .select(['count(1) as count'])
      .where('1=1')
      .getRawOne()

    // data
    const data = await this.datasource
      .getRepository(Page)
      .createQueryBuilder('p')
      .select([
        'p.id as id',
        'p.url as url',
        'p.title as title',
        'p.sub_title as subTitle',
        'p.use_list_api as useListApi',
        'p.list_api as listApi',
        'p.use_create_api as useCreateApi',
        'p.create_api as createApi',
        'p.use_detail_api as useDetailApi',
        'p.detail_api as detailApi',
        'p.use_delete_api as useDeleteApi',
        'p.delete_api as deleteApi',
        'p.table_header as tableHeader',
        'p.add_form as addForm',
        'p.detail_form as detailForm',
        'p.search_form as searchForm',
        'p.action_list as actionList',
        'p.created_at as createdAt',
        'p.updated_at as updatedAt'
      ])
      .where('1=1')
      .orderBy('p.created_at', 'DESC')
      .limit(limit)
      .offset(offset)
      .getRawMany()

    return {
      count: Number(count.count),
      data
    }
  }
}