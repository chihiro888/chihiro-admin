import { Controller, Get, HttpStatus, Res } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import SWAGGER from 'src/common/constants-swagger'
import { Response } from 'express'

// ANCHOR auth controller
@ApiTags(SWAGGER.AUTH.TAG)
@Controller(SWAGGER.AUTH.URL)
export class AuthController {
  constructor() {
    //
  }

  // ANCHOR test API
  @ApiOperation({
    summary: SWAGGER.AUTH.TEST.SUMMARY,
    description: SWAGGER.AUTH.TEST.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.AUTH.TEST.RES_200
  })
  @Get(SWAGGER.AUTH.TEST.URL)
  async test(@Res() res: Response) {
    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.AUTH.TEST.MSG.OK,
      data: null
    })
  }
}
