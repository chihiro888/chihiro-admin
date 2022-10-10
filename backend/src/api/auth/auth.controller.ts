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
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { isMatch, login } from 'src/common/util/auth'
import { UserService } from '../user/user.service'
import { SignInDto } from './dto/sign-in.dto'
import { AuthGuard } from 'src/common/guard/auth.guard'

// ANCHOR auth controller
@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
  constructor(private userService: UserService) {}

  // ANCHOR Sign In API
  @Post('signIn')
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
        'account or password does not match.',
        HttpStatus.UNAUTHORIZED
      )
    }

    // check password
    const condition = await isMatch(dto.password, user.password)
    if (!condition) {
      // return 401 response
      throw new HttpException(
        'account or password does not match.',
        HttpStatus.UNAUTHORIZED
      )
    }

    // login
    await login(session, user)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: null
    })
  }

  // ANCHOR Get User By Session API
  @UseGuards(AuthGuard)
  @Post('getUserBySession')
  async getUserBySession(@Res() res: Response, @Session() session) {
    // find account
    const user = await this.userService.findUserById(session.userId)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: user
    })
  }
}
