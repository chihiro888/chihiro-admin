import { AdminController } from './admin.controller'
import { Module } from '@nestjs/common'
import { AdminService } from './admin.service'

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
