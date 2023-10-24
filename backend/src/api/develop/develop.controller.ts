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
  Res
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

// ** Dto
import { GetSampleDto } from './dto/get-sample.dto'
import { CreateSampleDto } from './dto/create-sample.dto'
import { UpdateSampleDto } from './dto/update-sample.dto'
import { DeleteSampleDto } from './dto/delete-sample.dto'

// ** Service
import { DevelopService } from './develop.service'

// ANCHOR develop controller
@ApiTags('develop')
@Controller('api/develop')
export class DevelopController {
  constructor(private developService: DevelopService) {}

  // ANCHOR get sample
  @Get('getSample')
  @ApiOperation({ summary: 'summary' })
  async getSample(@Res() res: Response, @Query() dto: GetSampleDto) {
    const result = await this.developService.getSample(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR create sample
  @Post('createSample')
  @ApiOperation({ summary: 'summary' })
  async createSample(@Res() res: Response, @Body() dto: CreateSampleDto) {
    const result = await this.developService.createSample(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR update sample
  @Put('updateSample')
  @ApiOperation({ summary: 'summary' })
  async updateSample(@Res() res: Response, @Body() dto: UpdateSampleDto) {
    const result = await this.developService.updateSample(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR delete sample
  @Delete('deleteSample')
  @ApiOperation({ summary: 'summary' })
  async deleteSample(@Res() res: Response, @Query() dto: DeleteSampleDto) {
    const result = await this.developService.deleteSample(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }
}
