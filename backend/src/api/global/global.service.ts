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
import { Result } from 'src/common/interface'

// ** Util
import { handleError } from 'src/common/util'

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
  async getGlobalList(): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const data = await queryRunner.manager.getRepository(Global).find({
        order: {
          createdAt: 'DESC'
        }
      })

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: data
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR create global
  async createGlobal(dto: CreateGlobalDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const global = new Global()
      global.key = dto.key
      global.value = dto.value
      global.memo = dto.memo

      await queryRunner.manager.getRepository(Global).save(global)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR update global
  async updateGlobal(dto: UpdateGlobalDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      for (let i = 0; i < dto.globalList.length; i++) {
        const g = dto.globalList[i]
        const global = await queryRunner.manager.getRepository(Global).findOne({
          where: {
            key: g.key
          }
        })
        global.value = g.value
        global.memo = g.memo
        global.updatedAt = moment().format(DATE.DATETIME)
        await queryRunner.manager.getRepository(Global).save(global)
      }

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR delete global
  async deleteGlobal(dto: DeleteGlobalDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      await queryRunner.manager
        .createQueryBuilder()
        .delete()
        .from(Global)
        .where('key = :key', { key: dto.key })
        .execute()

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR get app info
  async getAppInfo(): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const data = await queryRunner.manager.getRepository(Global).find()

      const appInfo = {}
      for (let i = 0; i < data.length; i++) {
        const g = data[i]
        if (g.key.includes('app')) {
          appInfo[g.key] = g.value
        }
      }

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: appInfo
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }
}
