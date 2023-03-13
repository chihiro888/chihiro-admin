import { DeletePageDto } from './dto/delete-page.dto'
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { Page } from 'src/entities/page.entity'
import { DataSource } from 'typeorm'
import { CreatePageDto } from './dto/create-page.dto'
import { GetPageListDto } from './dto/get-page-list.dto'
import { GetPageDto } from './dto/get-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'
import moment from 'moment'
import DATE from 'src/common/constants/date'
import { Result } from 'src/common/interface'

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
      .andWhere('p.deleted_at is null')
      .andWhere(dto.url === '' ? '1=1' : 'p.url like :url', {
        url: `%${dto.url}%`
      })
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
      .andWhere('p.deleted_at is null')
      .andWhere(dto.url === '' ? '1=1' : 'p.url like :url', {
        url: `%${dto.url}%`
      })
      .orderBy('p.created_at', 'DESC')
      .limit(limit)
      .offset(offset)
      .getRawMany()

    return {
      count: Number(count.count),
      data
    }
  }

  // ANCHOR convert JSON
  convertJson(data) {
    try {
      return JSON.parse(data)
    } catch (e) {
      return []
    }
  }

  // ANCHOR get page
  async getPage(dto: GetPageDto) {
    const data = await this.datasource.getRepository(Page).findOne({
      where: {
        id: dto.id,
        deletedAt: null
      }
    })

    // JSON 변경
    data.tableHeader = this.convertJson(data.tableHeader)
    data.addForm = this.convertJson(data.addForm)
    data.detailForm = this.convertJson(data.detailForm)
    data.searchForm = this.convertJson(data.searchForm)
    data.actionList = this.convertJson(data.actionList)

    return data
  }

  // ANCHOR create page
  async createPage(dto: CreatePageDto): Promise<Result> {
    // 유효성
    const exist = await this.datasource.getRepository(Page).findOne({
      where: {
        url: dto.url
      }
    })

    if (exist) {
      return {
        result: false,
        message: '이미 존재하는 URL 입니다.'
      }
    }

    // 페이지 생성
    const page = new Page()
    page.url = dto.url
    page.title = dto.title
    page.subTitle = dto.subTitle
    page.useListApi = dto.useListApi
    page.listApi = dto.listApi
    page.useCreateApi = dto.useCreateApi
    page.createApi = dto.createApi
    page.useDetailApi = dto.useDetailApi
    page.detailApi = dto.detailApi
    page.useDeleteApi = dto.useDeleteApi
    page.deleteApi = dto.deleteApi
    page.tableHeader = JSON.stringify(dto.tableHeader)
    page.addForm = JSON.stringify(dto.addForm)
    page.detailForm = JSON.stringify(dto.detailForm)
    page.searchForm = JSON.stringify(dto.searchForm)
    page.actionList = JSON.stringify(dto.actionList)

    await this.datasource.getRepository(Page).save(page)

    return {
      result: true,
      message: '페이지 생성이 완료되었습니다.'
    }
  }

  // ANCHOR update page
  async updatePage(dto: UpdatePageDto): Promise<Result> {
    const page = await this.datasource.getRepository(Page).findOne({
      where: {
        id: dto.id
      }
    })

    // 페이지 수정
    page.url = dto.url
    page.title = dto.title
    page.subTitle = dto.subTitle
    page.useListApi = dto.useListApi
    page.listApi = dto.listApi
    page.useCreateApi = dto.useCreateApi
    page.createApi = dto.createApi
    page.useDetailApi = dto.useDetailApi
    page.detailApi = dto.detailApi
    page.useDeleteApi = dto.useDeleteApi
    page.deleteApi = dto.deleteApi
    page.tableHeader = JSON.stringify(dto.tableHeader)
    page.addForm = JSON.stringify(dto.addForm)
    page.detailForm = JSON.stringify(dto.detailForm)
    page.searchForm = JSON.stringify(dto.searchForm)
    page.actionList = JSON.stringify(dto.actionList)

    await this.datasource.getRepository(Page).save(page)

    return {
      result: true,
      message: '페이지 수정이 완료되었습니다.'
    }
  }

  // ANCHOR delete page
  async deletePage(dto: DeletePageDto) {
    const page = await this.datasource.getRepository(Page).findOne({
      where: {
        id: dto.id,
        deletedAt: null
      }
    })

    page.deletedAt = moment().format(DATE.DATETIME)

    await this.datasource.getRepository(Page).save(page)
  }
}
