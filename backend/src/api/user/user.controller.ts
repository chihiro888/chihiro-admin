import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { UserService } from 'src/app/user/user.service'
import SWAGGER from 'src/common/constants/swagger'
import { CreateUserDto } from './dto/create-user.dto'

// ANCHOR user controller
@ApiTags(SWAGGER.USER.TAG)
@Controller(SWAGGER.USER.URL)
export class UserController {
  constructor(private userService: UserService) {}

  // ANCHOR Create User API
  @ApiOperation({
    summary: SWAGGER.USER.CREATE_USER.SUMMARY,
    description: SWAGGER.USER.CREATE_USER.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.USER.CREATE_USER.RES.OK
  })
  @Post(SWAGGER.USER.CREATE_USER.URL)
  async createUser(@Res() res: Response, @Body() dto: CreateUserDto) {
    // create account
    const user = await this.userService.createUser(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.AUTH.SIGN_IN.MSG.OK,
      data: user
    })
  }
}
