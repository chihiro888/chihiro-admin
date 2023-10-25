// ** Module
import {
  Body,
  Query,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  UseGuards,
  HttpStatus
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

// ** Dto
import { DeleteGlobalDto } from './dto/delete-global.dto'
import { CreateGlobalDto } from './dto/create-global.dto'
import { UpdateGlobalDto } from './dto/update-global.dto'

// ** Service
import { GlobalService } from './global.service'

// ** Guard
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'

// ANCHOR global controller
@ApiTags('global')
@Controller('api/global')
export class GlobalController {
  constructor(private globalService: GlobalService) {}

  // ANCHOR get global list
  @UseGuards(SystemAdminGuard)
  @Get('getGlobalList')
  @ApiOperation({ summary: '전역 데이터 리스트 조회 (시스템 관리자 기능)' })
  async getGlobalList(@Res() res: Response) {
    const result = await this.globalService.getGlobalList()
    res.status(HttpStatus.OK).json(
      {
        statusCode: HttpStatus.OK,
        message: result.message,
        data: result.data
      }
    ) 
  }

  // ANCHOR create global
  @UseGuards(SystemAdminGuard)
  @Post('createGlobal')
  @ApiOperation({ summary: '전역 데이터 생성 (시스템 관리자 기능)' })
  async createGlobal(@Res() res: Response, @Body() dto: CreateGlobalDto) {
    const result = await this.globalService.createGlobal(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR update global
  @UseGuards(SystemAdminGuard)
  @Put('updateGlobal')
  @ApiOperation({ summary: '전역 데이터 수정 (시스템 관리자 기능)' })
  async updateGlobal(@Res() res: Response, @Body() dto: UpdateGlobalDto) {
    const result = await this.globalService.updateGlobal(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR delete global
  @UseGuards(SystemAdminGuard)
  @Delete('deleteGlobal')
  @ApiOperation({ summary: '전역 데이터 삭제 (시스템 관리자 기능)' })
  async deleteGlobal(@Res() res: Response, @Query() dto: DeleteGlobalDto) {
    const result = await this.globalService.deleteGlobal(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR get app info
  @Get('getAppInfo')
  @ApiOperation({ summary: '앱 정보 조회' })
  async getAppInfo(@Res() res: Response) {
    const result = await this.globalService.getAppInfo()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }
}
