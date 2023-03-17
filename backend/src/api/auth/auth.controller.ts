// ** Module
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpStatus,
  Session,
  Res,
  HttpException,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import SWAGGER from 'src/common/constants/swagger'

// ** Dto
import { LoginDto } from './dto/login.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'

// ** Service
import { AuthService } from './auth.service'

// ** Guard
import { AdminGuard } from 'src/common/guard/admin.guard'

// ANCHOR admin controller
@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // ANCHOR login
  @Post('login')
  @ApiOperation({
    summary: '로그인',
    description: '파라미터를 입력받아 로그인을 처리합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '로그인이 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: SWAGGER.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: '아이디 또는 비밀번호가 유효하지 않은 경우 반환'
  })
  async login(
    @Res() res: Response,
    @Body() dto: LoginDto,
    @Session() session: any
  ) {
    // login
    const result = await this.authService.login(dto)

    if (!result.result) {
      // return 403 response
      throw new HttpException(
        'The account or password is not valid.',
        HttpStatus.UNAUTHORIZED
      )
    }

    // login
    session.userId = result.data.id
    session.role = result.data.role

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Login Successful',
      data: null
    })
  }

  // ANCHOR logout
  @Delete('logout')
  @ApiOperation({
    summary: '로그아웃 (본인)',
    description: '세션정보를 조회하며 로그아웃 처리합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '로그아웃이 성공적인 경우 반환'
  })
  async logout(@Res() res: Response, @Session() session: any) {
    // get user id from session
    const userId = session.userId

    // logout
    await this.authService.logout(userId)

    // logout
    session.destroy()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: null
    })
  }

  // ANCHOR get admin
  @UseGuards(AdminGuard)
  @Get('getAdmin')
  @ApiOperation({
    summary: '관리자 정보 조회 (본인)',
    description: '세션이 유효한 경우 관리자 정보를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '관리자 조회가 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.UNAUTHORIZED
  })
  async getAdmin(@Res() res: Response, @Session() session: any) {
    // get user id from session
    const userId = session.userId

    // get admin by user id
    const admin = await this.authService.getAdminByUserId(userId)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: admin
    })
  }

  // ANCHOR update password
  @UseGuards(AdminGuard)
  @Put('updatePassword')
  @ApiOperation({
    summary: '비밀번호 변경 (본인)',
    description: '파라미터를 입력받아 비밀번호를 변경합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '비밀번호 변경이 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: SWAGGER.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: '비밀번호 변경중 오류가 발생한 경우 반환'
  })
  async updatePassword(
    @Res() res: Response,
    @Body() dto: UpdatePasswordDto,
    @Session() session: any
  ) {
    // get user id from session
    const userId = session.userId

    // inject user id
    dto.userId = userId

    // update password
    try {
      await this.authService.updatePassword(dto)
    } catch (err) {
      // return 500 response
      throw new HttpException(
        'An error occurred while changing the password.',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Password change is complete.',
      data: null
    })
  }
}
