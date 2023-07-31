import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ActionService } from './action.service'
import {
  Body,
  Query,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpStatus,
  Session,
  Res,
  HttpException,
  UseGuards,
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common'
import { ApiConsumes } from '@nestjs/swagger'
import { Response } from 'express'
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'
import SWAGGER from 'src/common/constants/swagger'
import { GetActionListDto } from './dto/get-action-list.dto'

// ANCHOR action controller
@ApiTags('action')
@Controller('api/action')
export class ActionController {
  constructor(private actionService: ActionService) {}

  // ANCHOR get action list
  @UseGuards(SystemAdminGuard)
  @Get('getActionList')
  @ApiOperation({
    summary: '액션 리스트 조회 (시스템 관리자 기능)',
    description: '세션이 유효한 경우 액션 리스트를 반환합니다.'
  })
  async getActionList(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: GetActionListDto
  ) {
    // get admin
    const adminList = await this.actionService.getActionList(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: adminList
    })
  }
}
