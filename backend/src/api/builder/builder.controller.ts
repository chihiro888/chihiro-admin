// ** Module
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

// ** Dto
import { GetPageDto } from './dto/get-page.dto'
import { GetPageListDto } from './dto/get-page-list.dto'
import { DeletePageDto } from './dto/delete-page.dto'
import { UpdatePageDto } from './dto/update-page.dto'
import { CreatePageDto } from './dto/create-page.dto'
import { GetPageByUrlDto } from './dto/get-page-by-url.dto'

// ** Service
import { BuilderService } from './builder.service'

// ** Guard
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'

// ANCHOR builder controller
@ApiTags('builder')
@Controller('api/builder')
export class BuilderController {
  constructor(private builderService: BuilderService) {}

  // ANCHOR get page list
  @UseGuards(SystemAdminGuard)
  @Get('getPageList')
  @ApiOperation({ summary: '페이지 목록 조회 (시스템 관리자 기능)' })
  async getPageList(@Res() res: Response, @Query() dto: GetPageListDto) {
    const result = await this.builderService.getPageList(dto)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR get page
  @UseGuards(SystemAdminGuard)
  @Get('getPage')
  @ApiOperation({ summary: '페이지 조회 (시스템 관리자 기능)' })
  async getPage(@Res() res: Response, @Query() dto: GetPageDto) {
    const result = await this.builderService.getPage(dto)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR get page by url
  @UseGuards(SystemAdminGuard)
  @Get('getPageByUrl')
  @ApiOperation({ summary: '페이지 조회 (시스템 관리자 기능)' })
  async getPageByUrl(@Res() res: Response, @Query() dto: GetPageByUrlDto) {
    const result = await this.builderService.getPageByUrl(dto)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR create page
  @UseGuards(SystemAdminGuard)
  @Post('createPage')
  @ApiOperation({ summary: '페이지 생성 (시스템 관리자 기능)' })
  async createPage(@Res() res: Response, @Body() dto: CreatePageDto) {
    const result = await this.builderService.createPage(dto)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR update page
  @UseGuards(SystemAdminGuard)
  @Put('updatePage')
  @ApiOperation({ summary: '페이지 수정 (시스템 관리자 기능)' })
  async updatePage(@Res() res: Response, @Body() dto: UpdatePageDto) {
    const result = await this.builderService.updatePage(dto)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR delete page
  @UseGuards(SystemAdminGuard)
  @Delete('deletePage')
  @ApiOperation({ summary: '페이지 삭제 (시스템 관리자 기능)' })
  async deletePage(@Res() res: Response, @Query() dto: DeletePageDto) {
    const result = await this.builderService.deletePage(dto)
    res.status(result.statusCode).json(result)
  }
}
