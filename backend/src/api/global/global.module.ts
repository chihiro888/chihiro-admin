// ** Module
import { Module } from '@nestjs/common'

// ** Controller
import { GlobalController } from './global.controller'

// ** Service
import { GlobalService } from './global.service'

@Module({
  imports: [],
  controllers: [GlobalController],
  providers: [GlobalService]
})
export class GlobalModule {}
