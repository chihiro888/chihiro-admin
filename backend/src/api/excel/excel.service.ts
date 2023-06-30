// ** Module
import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

// ** Dto
import { GetQueryListDto } from './dto/get-query-list.dto'
import { CreateQueryDto } from './dto/create-query.dto'
import { DeleteQueryDto } from './dto/delete-query.dto'
import { ExcelDownloadDto } from './dto/excel-download.dto'

// ** Entity
import { Excel } from '../../entities/excel.entity'
// ** Constant
import DATE from 'src/common/constants/date'

// ** Util
import { exportToExcel } from 'src/common/excel/excel-file-stream'

@Injectable()
export class ExcelService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR get page list
  async getQueryList(dto: GetQueryListDto) {
    const limit = 30
    const offset = (dto.page - 1) * limit

    // count
    const count = await this.datasource
      .getRepository(Excel)
      .createQueryBuilder('e')
      .select(['count(1) as count'])
      .where('1=1')
      .andWhere('e.deleted_at is null')
      .getRawOne()

    // data
    const data = await this.datasource
      .getRepository(Excel)
      .createQueryBuilder('e')
      .select([
        'e.id as id',
        'e.title as title',
        'e.query as query',
        'e.stock as stock',
        'e.created_at as createdAt'
      ])
      .where('1=1')
      .andWhere('e.deleted_at is null')
      .orderBy('e.created_at', 'DESC')
      .limit(limit)
      .offset(offset)
      .getRawMany()

    return {
      count: Number(count.count),
      data
    }
  }

  // ANCHOR get page list
  async createQuery(dto: CreateQueryDto) {
    const excel = new Excel()
    excel.title = dto.title
    excel.query = dto.query
    excel.stock = 0
    const createdExcel = await this.datasource.getRepository(Excel).save(excel)

    return {
      result: true,
      message: '',
      id: createdExcel.id
    }
  }

  // ANCHOR delete excel
  async deleteExcel(dto: DeleteQueryDto) {
    const excel = await this.datasource.getRepository(Excel).findOne({
      where: {
        id: dto.id,
        deletedAt: null
      }
    })

    excel.deletedAt = moment().format(DATE.DATETIME)

    const res = await this.datasource.getRepository(Excel).save(excel)
  }

  async findExcelFileName(dto: ExcelDownloadDto) {
    const res = await this.datasource
      .getRepository(Excel)
      .createQueryBuilder('e')
      .select(['e.file_name as fileName,e.title as title'])
      .where('1=1')
      .andWhere(`e.id = ${dto.id}`)
      .andWhere('e.stock = 1')
      .andWhere('e.deleted_at is null')
      .getRawOne()

    return {
      fileName: res.fileName,
      title: res.title
    }
  }

  async createExcel(dto: CreateQueryDto, id: number): Promise<void> {
    const query = dto.query
    try {
      const result = await this.datasource.query(query)
      const excel = await this.datasource
        .getRepository(Excel)
        .findOne({ where: { id } })
      if (!result) {
        excel.stock = 9
        await this.datasource.getRepository(Excel).save(excel)
        console.warn('Incorrect query.')
      }
      const fileName = `${uuidv4()}`
      const res = exportToExcel(fileName, result)
      if (!res) {
        console.warn('Excel creation fail.')
      }
      excel.fileName = `${fileName}.xlsx`
      excel.stock = 1
      await this.datasource.getRepository(Excel).save(excel)
      console.log(`create excel: ${fileName} `)
    } catch (err) {
      console.log(err)
    }
  }
}
