import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
  UseGuards
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { DashboardService } from './dashboard.service'

// ANCHOR dashboard controller
@ApiTags('dashboard')
@Controller('api/dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  // ANCHOR get admin count
  @UseGuards(AuthGuard)
  @Get('getAdminCount')
  async getAdminCount(@Res() res: Response) {
    const data = await this.dashboardService.getAdminCount()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get login history count
  @UseGuards(AuthGuard)
  @Get('getLoginHistoryCount')
  async getLoginHistoryCount(@Res() res: Response) {
    const data = await this.dashboardService.getLoginHistoryCount()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get image count
  @UseGuards(AuthGuard)
  @Get('getImageCount')
  async getImageCount(@Res() res: Response) {
    const data = await this.dashboardService.getImageCount()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get setting count
  @UseGuards(AuthGuard)
  @Get('getSettingCount')
  async getSettingCount(@Res() res: Response) {
    const data = await this.dashboardService.getSettingCount()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }
}
