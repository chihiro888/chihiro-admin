import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
  Session,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { SignInDto } from './dto/sign-in.dto'
import { UserService } from 'src/app/user/user.service'
import SWAGGER from 'src/common/constants/swagger'
import { isMatch, login } from 'src/common/util/auth'
import { AuthGuard } from 'src/common/guard/auth.guard'

// ANCHOR auth controller
@ApiTags(SWAGGER.AUTH.TAG)
@Controller(SWAGGER.AUTH.URL)
export class AuthController {
  constructor(private userService: UserService) {}

  // ANCHOR Sign In API
  @ApiOperation({
    summary: SWAGGER.AUTH.SIGN_IN.SUMMARY,
    description: SWAGGER.AUTH.SIGN_IN.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.AUTH.SIGN_IN.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.AUTH.SIGN_IN.RES.UNAUTHORIZED
  })
  @Post(SWAGGER.AUTH.SIGN_IN.URL)
  async signIn(
    @Res() res: Response,
    @Body() dto: SignInDto,
    @Session() session
  ) {
    // find account
    const user = await this.userService.findUserByAccount(dto.account)

    if (!user) {
      // return 401 response
      throw new HttpException(
        SWAGGER.AUTH.SIGN_IN.MSG.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED
      )
    }

    // check password
    const condition = await isMatch(dto.password, user.password)
    if (!condition) {
      // return 401 response
      throw new HttpException(
        SWAGGER.AUTH.SIGN_IN.MSG.UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED
      )
    }

    // login
    await login(session, user)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.AUTH.SIGN_IN.MSG.OK,
      data: null
    })
  }

  // ANCHOR Get User By Session API
  @ApiOperation({
    summary: SWAGGER.AUTH.GET_USER_BY_SESSION.SUMMARY,
    description: SWAGGER.AUTH.GET_USER_BY_SESSION.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.AUTH.GET_USER_BY_SESSION.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.AUTH.GET_USER_BY_SESSION.RES.UNAUTHORIZED
  })
  @UseGuards(AuthGuard)
  @Post(SWAGGER.AUTH.GET_USER_BY_SESSION.URL)
  async getUserBySession(@Res() res: Response, @Session() session) {
    // find account
    const user = await this.userService.findUserById(session.userId)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.AUTH.GET_USER_BY_SESSION.MSG.OK,
      data: user
    })
  }
}
