// ** Module
import { Module } from '@nestjs/common'

// ** Controller
import { DashboardController } from './dashboard.controller'

// ** Service
import { DashboardService } from './dashboard.service'

@Module({
  imports: [],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
