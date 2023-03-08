import { GetPageDto } from './dto/get-page.dto'
import { GetPageListDto } from './dto/get-page-list.dto'
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
import { DeletePageDto } from './dto/delete-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'
import { CreatePageDto } from './dto/create-page.dto'

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

  // ANCHOR get page
  @UseGuards(SystemAdminGuard)
  @Get('getPage')
  @ApiOperation({
    summary: '페이지 조회 (시스템 관리자 기능)',
    description: '페이지를 조회합니다.'
  })
  async getPage(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: GetPageDto
  ) {
    // get page
    const data = await this.builderService.getPage(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR create page
  @UseGuards(SystemAdminGuard)
  @Post('createPage')
  @ApiOperation({
    summary: '페이지 생성 (시스템 관리자 기능)',
    description: '페이지를 생성합니다.'
  })
  async createPage(
    @Res() res: Response,
    @Session() session: any,
    @Body() dto: CreatePageDto
  ) {
    // create page
    await this.builderService.createPage(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: null
    })
  }

  // ANCHOR update page
  @UseGuards(SystemAdminGuard)
  @Put('updatePage')
  @ApiOperation({
    summary: '페이지 수정 (시스템 관리자 기능)',
    description: '페이지를 수정합니다.'
  })
  async updatePage(
    @Res() res: Response,
    @Session() session: any,
    @Body() dto: UpdatePageDto
  ) {
    // update page
    await this.builderService.updatePage(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: null
    })
  }

  // ANCHOR delete page
  @UseGuards(SystemAdminGuard)
  @Delete('deletePage')
  @ApiOperation({
    summary: '페이지 삭제 (시스템 관리자 기능)',
    description: '페이지를 삭제합니다.'
  })
  async deletePage(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: DeletePageDto
  ) {
    // delete page
    await this.builderService.deletePage(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '페이지 삭제가 완료되었습니다.',
      data: null
    })
  }
}
