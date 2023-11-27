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
    return await this.datasource.transaction(
      async (transactionalEntityManager) => {
        try {
          const data = await transactionalEntityManager
            .getRepository(Global)
            .find({
              order: {
                createdAt: 'DESC'
              }
            })

          return {
            message: '',
            data: data
          }
        } catch (error) {
          throw new HttpException(
            error.message,
            HttpStatus.INTERNAL_SERVER_ERROR
          )
        }
      }
    )
  }

  // ANCHOR create global
  async createGlobal(dto: CreateGlobalDto): Promise<CommonResult> {
    return await this.datasource.transaction(
      async (transactionalEntityManager) => {
        try {
          const global = new Global()
          global.key = dto.key
          global.value = dto.value
          global.memo = dto.memo

          await transactionalEntityManager.getRepository(Global).save(global)

          return {
            message: '',
            data: null
          }
        } catch (error) {
          throw new HttpException(
            error.message,
            HttpStatus.INTERNAL_SERVER_ERROR
          )
        }
      }
    )
  }

  // ANCHOR update global
  async updateGlobal(dto: UpdateGlobalDto): Promise<CommonResult> {
    return await this.datasource.transaction(
      async (transactionalEntityManager) => {
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

            return {
              message: '',
              data: null
            }
          }
        } catch (error) {
          throw new HttpException(
            error.message,
            HttpStatus.INTERNAL_SERVER_ERROR
          )
        }
      }
    )
  }

  // ANCHOR delete global
  async deleteGlobal(dto: DeleteGlobalDto): Promise<CommonResult> {
    return await this.datasource.transaction(
      async (transactionalEntityManager) => {
        try {
          await transactionalEntityManager
            .createQueryBuilder()
            .delete()
            .from(Global)
            .where('key = :key', { key: dto.key })
            .execute()

          return {
            message: '',
            data: null
          }
        } catch (error) {
          throw new HttpException(
            error.message,
            HttpStatus.INTERNAL_SERVER_ERROR
          )
        }
      }
    )
  }

  // ANCHOR get app info
  async getAppInfo(): Promise<CommonResult> {
    return await this.datasource.transaction(
      async (transactionalEntityManager) => {
        try {
          let appInfo = {}

          const data = await transactionalEntityManager
            .getRepository(Global)
            .find()

          for (let i = 0; i < data.length; i++) {
            const g = data[i]
            if (g.key.includes('app')) {
              appInfo[g.key] = g.value
            }
          }

          return {
            message: '',
            data: appInfo
          }
        } catch (error) {
          throw new HttpException(
            error.message,
            HttpStatus.INTERNAL_SERVER_ERROR
          )
        }
      }
    )
  }
}
