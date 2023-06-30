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
import * as path from 'path'

// ** Dto
import { GetQueryListDto } from './dto/get-query-list.dto'
import { CreateQueryDto } from './dto/create-query.dto'
import { DeleteQueryDto } from './dto/delete-query.dto'
import { ExcelDownloadDto } from './dto/excel-download.dto'
// ** Service
import { ExcelService } from './excel.service'

// ** Guard
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'
// ** Util
import { getUploadExcelPath } from 'src/common/util'

// ANCHOR excel controller
@ApiTags('excel')
@Controller('api/excel')
export class ExcelController {
  constructor(private excelService: ExcelService) {}

  // ANCHOR get page list
  @UseGuards(SystemAdminGuard)
  @Get('getQueryList')
  @ApiOperation({
    summary: 'excel 출력용 query 일람 취득(시스템 관리자 기능)',
    description: '엑셀 출력하도록 등록한 query 일람을 취득합니다.'
  })
  async getQueryList(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: GetQueryListDto
  ) {
    // get page list
    const data = await this.excelService.getQueryList(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get page list
  @UseGuards(SystemAdminGuard)
  @Post('create')
  @ApiOperation({
    summary: 'excel 출력용 내용 등록(시스템 관리자 기능)',
    description: 'excel 출력용 query, 타이틀명을 등록합니다.'
  })
  async createQuery(
    @Res() res: Response,
    @Session() session: any,
    @Body() dto: CreateQueryDto
  ) {
    // get page list
    const data = await this.excelService.createQuery(dto)
    this.excelService.createExcel(dto, data.id)
    if (data.result) {
      // return 200 response
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: '',
        data
      })
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: data.message,
        data
      })
    }
  }

  // ANCHOR get page list
  @UseGuards(SystemAdminGuard)
  @Delete('deleteExcel')
  @ApiOperation({
    summary: '저장된 엑셀 정보 삭제(시스템 관리자 기능)',
    description: '저장된 엑셀 정보를 삭제합니다.'
  })
  async delete(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: DeleteQueryDto
  ) {
    console.log(dto)
    // get page list
    await this.excelService.deleteExcel(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: ''
    })
  }

  // ANCHOR excel download
  @UseGuards(SystemAdminGuard)
  @Get('downloadExcel')
  @ApiOperation({
    summary: 'excel DownLoad(시스템 관리자 기능)',
    description: '저장된 쿼리 결과가 담긴 엑셀 파일을 다운로드합니다.'
  })
  async downloadExcel(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: ExcelDownloadDto
  ) {
    // get page list
    const data = await this.excelService.findExcelFileName(dto)
    // idに基づいてExcelファイルのパスを特定します
    const filePath = path.join(getUploadExcelPath(), `${data.fileName}`)

    res.setHeader(
      'Content-Disposition',
      'attachment; filename=' + `${data.title}.xlsx`
    )
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )

    res.sendFile(filePath, (err) => {
      if (err) {
        // ファイル送信中にエラーが発生した場合の処理
        console.error(err)
        res.status(500).send('Error occurred while sending file.')
      }
    })
  }
}
