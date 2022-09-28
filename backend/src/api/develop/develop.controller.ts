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
import { Response } from 'express'
import SWAGGER from './develop.swagger'
import { MethodDto } from './dto/method.dto'

// ANCHOR auth controller
@ApiTags(SWAGGER.TAG)
@Controller(SWAGGER.URL)
export class DevelopController {
  constructor() {
    //
  }

  // ANCHOR GET Method API
  @ApiOperation({
    summary: SWAGGER.getMethod.SUMMARY,
    description: SWAGGER.getMethod.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.getMethod.RES.OK
  })
  @Get(SWAGGER.getMethod.URL)
  async getMethod(@Res() res: Response, @Query() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.getMethod.MSG.OK,
      data: dto
    })
  }

  // ANCHOR POST Method API
  @ApiOperation({
    summary: SWAGGER.postMethod.SUMMARY,
    description: SWAGGER.postMethod.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.postMethod.RES.OK
  })
  @Post(SWAGGER.postMethod.URL)
  async postMethod(@Res() res: Response, @Body() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.postMethod.MSG.OK,
      data: dto
    })
  }

  // ANCHOR PUT Method API
  @ApiOperation({
    summary: SWAGGER.putMethod.SUMMARY,
    description: SWAGGER.putMethod.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.putMethod.RES.OK
  })
  @Put(SWAGGER.putMethod.URL)
  async putMethod(@Res() res: Response, @Body() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.putMethod.MSG.OK,
      data: dto
    })
  }

  // ANCHOR Delete Method API
  @ApiOperation({
    summary: SWAGGER.deleteMethod.SUMMARY,
    description: SWAGGER.deleteMethod.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.deleteMethod.RES.OK
  })
  @Delete(SWAGGER.deleteMethod.URL)
  async deleteMethod(@Res() res: Response, @Query() dto: MethodDto) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.deleteMethod.MSG.OK,
      data: dto
    })
  }
}
