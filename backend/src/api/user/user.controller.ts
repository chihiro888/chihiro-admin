import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Put,
  Res,
  Session,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import SWAGGER from 'src/common/constants/swagger'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { ChangePasswordDto } from './dto/change-password.dto'
import { UserService } from './user.service'

// ANCHOR user controller
@ApiTags(SWAGGER.USER.TAG)
@Controller(SWAGGER.USER.URL)
export class UserController {
  constructor(private userService: UserService) {}

  // ANCHOR account API
  @ApiOperation({
    summary: SWAGGER.USER.ACCOUNT.SUMMARY,
    description: SWAGGER.USER.ACCOUNT.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.USER.ACCOUNT.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.USER.ACCOUNT.RES.UNAUTHORIZED
  })
  @UseGuards(AuthGuard)
  @Get(SWAGGER.USER.ACCOUNT.URL)
  async account(@Res() res: Response, @Session() session: any) {
    // find user by id
    const user = await this.userService.findUserById(session.userId)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.USER.ACCOUNT.MSG.OK,
      data: user
    })
  }

  // ANCHOR change password API
  @ApiOperation({
    summary: SWAGGER.USER.CHANGE_PASSWORD.SUMMARY,
    description: SWAGGER.USER.CHANGE_PASSWORD.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.USER.CHANGE_PASSWORD.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.USER.CHANGE_PASSWORD.RES.UNAUTHORIZED
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: SWAGGER.USER.CHANGE_PASSWORD.RES.INTERNAL_SERVER_ERROR
  })
  @UseGuards(AuthGuard)
  @Put(SWAGGER.USER.CHANGE_PASSWORD.URL)
  async changePassword(
    @Res() res: Response,
    @Session() session: any,
    @Body() dto: ChangePasswordDto
  ) {
    // get user id from session
    const userId = session.userId

    // inject user id
    dto.userId = userId

    // change password
    const result = await this.userService.changePassword(dto)

    if (!result) {
      // return 500 response
      throw new HttpException(
        SWAGGER.USER.CHANGE_PASSWORD.MSG.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.USER.CHANGE_PASSWORD.MSG.OK,
      data: null
    })
  }
}
