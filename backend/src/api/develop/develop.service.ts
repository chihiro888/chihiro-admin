// ** Module
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Injectable()
export class DevelopService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR throw test
  async throwTest() {
    throw new HttpException('test', HttpStatus.BAD_REQUEST)
  }
}
