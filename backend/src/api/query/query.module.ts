import { Module } from '@nestjs/common'
import { QueryController } from './query.controller'
import { QueryService } from './query.service'

@Module({
  imports: [],
  controllers: [QueryController],
  providers: [QueryService]
})
export class QueryModule {}
