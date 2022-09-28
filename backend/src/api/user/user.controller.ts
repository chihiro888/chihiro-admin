import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Put,
  Query,
  Res,
  Session,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { ChangePasswordDto } from './dto/change-password.dto'
import { UserListPaginationDto } from './dto/user-list-pagination.dto'
import { UserService } from './user.service'
import SWAGGER from './user.swagger'

// ANCHOR user controller
@ApiTags(SWAGGER.TAG)
@Controller(SWAGGER.URL)
export class UserController {
  constructor(private userService: UserService) {}

  // ANCHOR account API
  @ApiOperation({
    summary: SWAGGER.ACCOUNT.SUMMARY,
    description: SWAGGER.ACCOUNT.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.ACCOUNT.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.ACCOUNT.RES.UNAUTHORIZED
  })
  @UseGuards(AuthGuard)
  @Get(SWAGGER.ACCOUNT.URL)
  async account(@Res() res: Response, @Session() session: any) {
    // find user by id
    const user = await this.userService.findUserById(session.userId)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.ACCOUNT.MSG.OK,
      data: user
    })
  }

  // ANCHOR change password API
  @ApiOperation({
    summary: SWAGGER.CHANGE_PASSWORD.SUMMARY,
    description: SWAGGER.CHANGE_PASSWORD.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.CHANGE_PASSWORD.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.CHANGE_PASSWORD.RES.UNAUTHORIZED
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: SWAGGER.CHANGE_PASSWORD.RES.INTERNAL_SERVER_ERROR
  })
  @UseGuards(AuthGuard)
  @Put(SWAGGER.CHANGE_PASSWORD.URL)
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
        SWAGGER.CHANGE_PASSWORD.MSG.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.CHANGE_PASSWORD.MSG.OK,
      data: null
    })
  }

  // ANCHOR user list pagination API
  @ApiOperation({
    summary: SWAGGER.USER_LIST_PAGINATION.SUMMARY,
    description: SWAGGER.USER_LIST_PAGINATION.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.USER_LIST_PAGINATION.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.USER_LIST_PAGINATION.RES.UNAUTHORIZED
  })
  @UseGuards(AuthGuard)
  @Get(SWAGGER.USER_LIST_PAGINATION.URL)
  async userListPagination(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: UserListPaginationDto
  ) {
    // get user id from session
    const userId = session.userId

    // inject user id
    dto.userId = userId

    // user list pagination
    const userList = await this.userService.userListPagination(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.USER_LIST_PAGINATION.MSG.OK,
      data: userList
    })
  }
}
