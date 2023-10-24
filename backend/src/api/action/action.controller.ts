import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ActionService } from './action.service'
import {
  Query,
  Controller,
  Get,
  HttpStatus,
  Session,
  Res,
  UseGuards
} from '@nestjs/common'
import { Response } from 'express'
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'
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
    const result = await this.actionService.getActionList(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }
}
