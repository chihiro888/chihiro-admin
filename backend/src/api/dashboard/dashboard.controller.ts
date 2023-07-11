// ** Module
import { Controller, Get, HttpStatus, Res, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

// ** Service
import { DashboardService } from './dashboard.service'

// ** Guard
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'

// ANCHOR dashboard controller
@ApiTags('dashboard')
@Controller('api/dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  // ANCHOR get user count
  @UseGuards(SystemAdminGuard)
  @Get('getUserCount')
  @ApiOperation({ summary: '사용자 카운트 (시스템 관리자 기능)' })
  async getUserCount(@Res() res: Response) {
    const data = await this.dashboardService.getUserCount()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get login history count
  @UseGuards(SystemAdminGuard)
  @Get('getLoginHistoryCount')
  @ApiOperation({ summary: '로그인 이력 카운트 (시스템 관리자 기능)' })
  async getLoginHistoryCount(@Res() res: Response) {
    const data = await this.dashboardService.getLoginHistoryCount()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get image count
  @UseGuards(SystemAdminGuard)
  @Get('getImageCount')
  @ApiOperation({ summary: '이미지 카운트 (시스템 관리자 기능)' })
  async getImageCount(@Res() res: Response) {
    const data = await this.dashboardService.getImageCount()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get setting count
  @UseGuards(SystemAdminGuard)
  @Get('getSettingCount')
  @ApiOperation({ summary: '설정 카운트 (시스템 관리자 기능)' })
  async getSettingCount(@Res() res: Response) {
    const data = await this.dashboardService.getSettingCount()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get user line chart
  @UseGuards(SystemAdminGuard)
  @Get('getUserLineChart')
  @ApiOperation({ summary: '사용자 라인 차트 (시스템 관리자 기능)' })
  async getUserLineChart(@Res() res: Response) {
    const data = await this.dashboardService.getUserLineChart()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get login history line chart
  @UseGuards(SystemAdminGuard)
  @Get('getLoginHistoryLineChart')
  @ApiOperation({ summary: '로그인 이력 라인 차트 (시스템 관리자 기능)' })
  async getLoginHistoryLineChart(@Res() res: Response) {
    const data = await this.dashboardService.getLoginHistoryLineChart()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get image line chart
  @UseGuards(SystemAdminGuard)
  @Get('getImageLineChart')
  @ApiOperation({ summary: '이미지 라인 차트 (시스템 관리자 기능)' })
  async getImageLineChart(@Res() res: Response) {
    const data = await this.dashboardService.getImageLineChart()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get setting line chart
  @UseGuards(SystemAdminGuard)
  @Get('getSettingLineChart')
  @ApiOperation({ summary: '설정 라인 차트 (시스템 관리자 기능)' })
  async getSettingLineChart(@Res() res: Response) {
    const data = await this.dashboardService.getSettingLineChart()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }
}
