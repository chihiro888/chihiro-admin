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
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { DevelopService } from './develop.service'
import { MethodDto } from './dto/method.dto'

// ANCHOR develop controller
@ApiTags('develop')
@Controller('api/develop')
export class DevelopController {
  constructor(private developService: DevelopService) {}

  // ANCHOR GET Method API
  @Get('getMethod')
  async getMethod(@Res() res: Response, @Query() dto: MethodDto) {
    // const data = await this.developService.throwTest()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: dto
    })
  }

  // ANCHOR POST Method API
  @Post('postMethod')
  async postMethod(@Res() res: Response, @Body() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: dto
    })
  }

  // ANCHOR PUT Method API
  @Put('putMethod')
  async putMethod(@Res() res: Response, @Body() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: dto
    })
  }

  // ANCHOR Delete Method API
  @Delete('deleteMethod')
  async deleteMethod(@Res() res: Response, @Query() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: dto
    })
  }
}
