import { GetPageListDto } from './dto/get-user-list.dto'
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'
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
  Session,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { BuilderService } from './builder.service'
import { MethodDto } from './dto/method.dto'

// ANCHOR builder controller
@ApiTags('builder')
@Controller('api/builder')
export class BuilderController {
  constructor(private builderService: BuilderService) {}

  // ANCHOR get page list
  @UseGuards(SystemAdminGuard)
  @Get('getPageList')
  @ApiOperation({
    summary: '페이지 목록 조회 (시스템 관리자 기능)',
    description: '페이지 목록을 조회합니다.'
  })
  async getPageList(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: GetPageListDto
  ) {
    // get page list
    const data = await this.builderService.getPageList(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }
}
