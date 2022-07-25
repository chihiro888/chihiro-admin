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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import SWAGGER from 'src/common/constants/swagger'
import { Response } from 'express'
import { MethodDto } from './dto/method.dto'

// ANCHOR auth controller
@ApiTags(SWAGGER.DEVELOP.TAG)
@Controller(SWAGGER.DEVELOP.URL)
export class DevelopController {
  constructor() {
    //
  }

  // ANCHOR GET Method API
  @ApiOperation({
    summary: SWAGGER.DEVELOP.getMethod.SUMMARY,
    description: SWAGGER.DEVELOP.getMethod.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.DEVELOP.getMethod.RES.OK
  })
  @Get(SWAGGER.DEVELOP.getMethod.URL)
  async getMethod(@Res() res: Response, @Query() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.DEVELOP.getMethod.MSG.OK,
      data: dto
    })
  }

  // ANCHOR POST Method API
  @ApiOperation({
    summary: SWAGGER.DEVELOP.postMethod.SUMMARY,
    description: SWAGGER.DEVELOP.postMethod.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.DEVELOP.postMethod.RES.OK
  })
  @Post(SWAGGER.DEVELOP.postMethod.URL)
  async postMethod(@Res() res: Response, @Body() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.DEVELOP.postMethod.MSG.OK,
      data: dto
    })
  }

  // ANCHOR PUT Method API
  @ApiOperation({
    summary: SWAGGER.DEVELOP.putMethod.SUMMARY,
    description: SWAGGER.DEVELOP.putMethod.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.DEVELOP.putMethod.RES.OK
  })
  @Put(SWAGGER.DEVELOP.putMethod.URL)
  async putMethod(@Res() res: Response, @Body() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.DEVELOP.putMethod.MSG.OK,
      data: dto
    })
  }

  // ANCHOR Delete Method API
  @ApiOperation({
    summary: SWAGGER.DEVELOP.deleteMethod.SUMMARY,
    description: SWAGGER.DEVELOP.deleteMethod.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.DEVELOP.deleteMethod.RES.OK
  })
  @Delete(SWAGGER.DEVELOP.deleteMethod.URL)
  async deleteMethod(@Res() res: Response, @Query() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.DEVELOP.deleteMethod.MSG.OK,
      data: dto
    })
  }
}
