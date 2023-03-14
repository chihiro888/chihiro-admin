import { GetPageByUrlDto } from './dto/get-page-by-url.dto'
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
import { CoreService } from './core.service'

// ANCHOR core controller
@ApiTags('core')
@Controller('api/core')
export class CoreController {
  constructor(private coreService: CoreService) {}

  // ANCHOR get page
  @UseGuards(SystemAdminGuard)
  @Get('getPageByUrl')
  @ApiOperation({
    summary: '페이지 조회 (시스템 관리자 기능)',
    description: '페이지를 조회합니다.'
  })
  async getPage(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: GetPageByUrlDto
  ) {
    // get page
    const data = await this.coreService.getPageByUrl(dto)

    if (data.result) {
      // return 200 response
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: '',
        data: data.data
      })
    } else {
      // return 400 response
      res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: data.data,
        data: null
      })
    }
  }
}
