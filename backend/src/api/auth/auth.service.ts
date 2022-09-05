import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'

@Injectable()
export class AuthService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}
}
