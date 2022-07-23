import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Session
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import SWAGGER from 'src/common/constants-swagger'
import { Response } from 'express'
import { SignInDto } from './dto/sign-in.dto'

// ANCHOR auth controller
@ApiTags(SWAGGER.AUTH.TAG)
@Controller(SWAGGER.AUTH.URL)
export class AuthController {
  constructor() {
    //
  }

  // ANCHOR Sign in API
  @ApiOperation({
    summary: SWAGGER.AUTH.SIGN_IN.SUMMARY,
    description: SWAGGER.AUTH.SIGN_IN.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.AUTH.SIGN_IN.RES_200
  })
  @Post(SWAGGER.AUTH.SIGN_IN.URL)
  async signIn(
    @Res() res: Response,
    @Body() dto: SignInDto,
    @Session() session
  ) {
    // debug
    console.log('dto -> ', dto)

    // session test
    session.hello = 'world'

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.AUTH.SIGN_IN.MSG.OK,
      data: null
    })
  }
}
