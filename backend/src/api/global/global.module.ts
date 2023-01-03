import { GlobalController } from './global.controller'
import { Module } from '@nestjs/common'
import { GlobalService } from './global.service'

@Module({
  imports: [],
  controllers: [GlobalController],
  providers: [GlobalService]
})
export class GlobalModule {}
