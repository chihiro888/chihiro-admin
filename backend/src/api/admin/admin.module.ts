// ** Module
import { Module } from '@nestjs/common'

// ** Controller
import { AdminController } from './admin.controller'

// ** Service
import { AdminService } from './admin.service'
import { GlobalService } from '../global/global.service'

@Module({
  imports: [],
  controllers: [AdminController],
  providers: [AdminService, GlobalService]
})
export class AdminModule {}
