// ** Module
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

// ** Dto
import { GetSampleDto } from './dto/get-sample.dto'
import { CreateSampleDto } from './dto/create-sample.dto'
import { UpdateSampleDto } from './dto/update-sample.dto'
import { DeleteSampleDto } from './dto/delete-sample.dto'

// ** Util

// ** Interface
import { CommonResult } from 'src/common/interface'

@Injectable()
export class DevelopService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR get sample
  async getSample(dto: GetSampleDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        // TODO 코드를 작성하십시오.
        // const entity = await transactionalEntityManager
        //   .getRepository(Entity)
        // if ("validation false") {
        //   throw new HttpException('message', HttpStatus.BAD_REQUEST)
        // }
        // await transactionalEntityManager.getRepository(Entity).save(entity)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: null
    }
  }

  // ANCHOR create sample
  async createSample(dto: CreateSampleDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        // TODO 코드를 작성하십시오.
        // const entity = await transactionalEntityManager
        //   .getRepository(Entity)
        // if ("validation false") {
        //   throw new HttpException('message', HttpStatus.BAD_REQUEST)
        // }
        // await transactionalEntityManager.getRepository(Entity).save(entity)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: null
    }
  }

  // ANCHOR update sample
  async updateSample(dto: UpdateSampleDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        // TODO 코드를 작성하십시오.
        // const entity = await transactionalEntityManager
        //   .getRepository(Entity)
        // if ("validation false") {
        //   throw new HttpException('message', HttpStatus.BAD_REQUEST)
        // }
        // await transactionalEntityManager.getRepository(Entity).save(entity)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: null
    }
  }

  // ANCHOR delete sample
  async deleteSample(dto: DeleteSampleDto): Promise<CommonResult> {
    await this.datasource.transaction(async (transactionalEntityManager) => {
      try {
        // TODO 코드를 작성하십시오.
        // const entity = await transactionalEntityManager
        //   .getRepository(Entity)
        // if ("validation false") {
        //   throw new HttpException('message', HttpStatus.BAD_REQUEST)
        // }
        // await transactionalEntityManager.getRepository(Entity).save(entity)
      } catch (error) {
        throw new HttpException(error.message, error.status)
      }
    })

    return {
      message: '',
      data: null
    }
  }
}
