// ** Module
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import moment from 'moment'

// ** Dto
import { CreateGlobalDto } from './dto/create-global.dto'
import { DeleteGlobalDto } from './dto/delete-global.dto'
import { UpdateGlobalDto } from './dto/update-global.dto'

// ** Entity
import { Global } from 'src/entities/global.entity'

// ** Const
import DATE from 'src/common/constants/date'

// ** Interface
import { CommonResult } from 'src/common/interface'

// ** Util

@Injectable()
export class GlobalService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR get global
  async getGlobal(key: string): Promise<string> {
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
  async getGlobalList(): Promise<CommonResult> {
    let data = null
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        data = await transactionalEntityManager.getRepository(Global).find({
          order: {
            createdAt: 'DESC'
          }
        })
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })
    return {
      message: '',
      data: data
    }
  }

  // ANCHOR create global
  async createGlobal(dto: CreateGlobalDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const global = new Global()
        global.key = dto.key
        global.value = dto.value
        global.memo = dto.memo

        await transactionalEntityManager.getRepository(Global).save(global)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })
    return {
      message: '',
      data: null
    }
  }

  // ANCHOR update global
  async updateGlobal(dto: UpdateGlobalDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        for (let i = 0; i < dto.globalList.length; i++) {
          const g = dto.globalList[i]
          const global = await transactionalEntityManager
            .getRepository(Global)
            .findOne({
              where: {
                key: g.key
              }
            })
          global.value = g.value
          global.memo = g.memo
          global.updatedAt = moment().format(DATE.DATETIME)
          await transactionalEntityManager.getRepository(Global).save(global)
        }
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })
    return {
      message: '',
      data: null
    }
  }

  // ANCHOR delete global
  async deleteGlobal(dto: DeleteGlobalDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        await transactionalEntityManager
          .createQueryBuilder()
          .delete()
          .from(Global)
          .where('key = :key', { key: dto.key })
          .execute()
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })
    return {
      message: '',
      data: null
    }
  }

  // ANCHOR get app info
  async getAppInfo(): Promise<CommonResult> {
    let appInfo = {}

    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        const data = await transactionalEntityManager
          .getRepository(Global)
          .find()

        for (let i = 0; i < data.length; i++) {
          const g = data[i]
          if (g.key.includes('app')) {
            appInfo[g.key] = g.value
          }
        }
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })
    return {
      message: '',
      data: appInfo
    }
  }
}
