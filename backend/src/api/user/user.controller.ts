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
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { ChangePasswordDto } from './dto/change-password.dto'
import { UserListPaginationDto } from './dto/user-list-pagination.dto'
import { UserService } from './user.service'

// ANCHOR user controller
@ApiTags('user')
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  // ANCHOR account API
  @UseGuards(AuthGuard)
  @Get('account')
  async account(@Res() res: Response, @Session() session: any) {
    // find user by id
    const user = await this.userService.findUserById(session.userId)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: user
    })
  }

  // ANCHOR change password API
  @UseGuards(AuthGuard)
  @Put('changePassword')
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
      throw new HttpException('', HttpStatus.INTERNAL_SERVER_ERROR)
    }

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: null
    })
  }

  // ANCHOR user list pagination API
  @UseGuards(AuthGuard)
  @Get('userListPagination')
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
      message: '',
      data: userList
    })
  }
}
