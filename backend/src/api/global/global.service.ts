import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { Global } from 'src/entities/global.entity'
import { DataSource } from 'typeorm'
import { CreateGlobalDto } from './dto/create-global.dto'
import { DeleteGlobalDto } from './dto/delete-global.dto'
import { SaveGlobalDto } from './dto/save-global.dto'
import moment from 'moment'
import DATE from 'src/common/constants/date'

@Injectable()
export class GlobalService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR get global
  async getGlobal(key: string) {
    const data = await this.datasource
      .getRepository(Global)
      .findOne({ where: { key: key } })
    if (data) {
      return data.value
    } else {
      throw new HttpException(
        'Please set global variable ' + key,
        HttpStatus.BAD_REQUEST
      )
    }
  }

  // ANCHOR get global list
  async getGlobalList() {
    const data = await this.datasource.getRepository(Global).find({
      order: {
        createdAt: 'DESC'
      }
    })
    return data
  }

  // ANCHOR create global
  async createGlobal(dto: CreateGlobalDto) {
    const global = new Global()
    global.key = dto.key
    global.value = dto.value
    global.memo = dto.memo
    await this.datasource.getRepository(Global).save(global)
  }

  // ANCHOR save global
  async saveGlobal(dto: SaveGlobalDto) {
    for (let i = 0; i < dto.globalList.length; i++) {
      const g = dto.globalList[i]
      const global = await this.datasource.getRepository(Global).findOne({
        where: {
          key: g.key
        }
      })
      global.value = g.value
      global.memo = g.memo
      global.updatedAt = moment().format(DATE.DATETIME)
      await this.datasource.getRepository(Global).save(global)
    }
  }

  // ANCHOR delete global
  async deleteGlobal(dto: DeleteGlobalDto) {
    await this.datasource
      .createQueryBuilder()
      .delete()
      .from(Global)
      .where('key = :key', { key: dto.key })
      .execute()
  }
}
