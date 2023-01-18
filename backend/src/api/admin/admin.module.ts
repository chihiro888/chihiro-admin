import { AdminController } from './admin.controller'
import { Module } from '@nestjs/common'
import { AdminService } from './admin.service'
import { GlobalService } from '../global/global.service'

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminService, GlobalService]
})
export class AdminModule {}
