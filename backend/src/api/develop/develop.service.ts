// ** Module
import { HttpStatus, Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

// ** Dto
import { GetSampleDto } from './dto/get-sample.dto'
import { GetSampleListDto } from './dto/get-sample-list.dto'
import { CreateSampleDto } from './dto/create-sample.dto'
import { UpdateSampleDto } from './dto/update-sample.dto'
import { DeleteSampleDto } from './dto/delete-sample.dto'

// ** Util
import { handleError } from 'src/common/util'

// ** Interface
import { Result } from 'src/common/interface'

@Injectable()
export class DevelopService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR get sample
  async getSample(dto: GetSampleDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // TODO 코드를 작성하십시오.

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

  // ANCHOR get sample list
  async getSampleList(dto: GetSampleListDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // TODO 코드를 작성하십시오.

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

  // ANCHOR create sample
  async createSample(dto: CreateSampleDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // TODO 코드를 작성하십시오.

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

  // ANCHOR update sample
  async updateSample(dto: UpdateSampleDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // TODO 코드를 작성하십시오.

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

  // ANCHOR delete sample
  async deleteSample(dto: DeleteSampleDto): Promise<Result> {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // TODO 코드를 작성하십시오.

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
}
