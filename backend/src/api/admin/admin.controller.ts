import { LoginDto } from './dto/login.dto'
import { CreateAdminDto } from './dto/create-admin.dto'
import { AdminService } from './admin.service'
import {
  Body,
  Query,
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
import { UpdatePasswordDto } from './dto/update-password.dto'
import { AuthGuard } from 'src/common/guard/auth.guard'
import SWAGGER from 'src/common/constants/swagger'
import { GetAdminListDto } from './dto/get-admin-list.dto'

// ANCHOR admin controller
@ApiTags('admin')
@Controller('api/admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // ANCHOR check admin
  @Get('checkAdmin')
  @ApiOperation({
    summary: '관리자 존재 여부 확인',
    description:
      '관리자가 존재하지 않는 경우 true, 관리자가 존재하는 경우 false를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '관리자 확인이 성공적인 경우 반환'
  })
  async checkAdmin(@Res() res: Response) {
    // check admin
    const data = await this.adminService.checkAdmin()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: data
    })
  }

  // ANCHOR get admin list
  @UseGuards(AuthGuard)
  @Get('getAdminList')
  @ApiOperation({
    summary: '관리자 리스트 조회',
    description: '세션이 유효한 경우 관리자 리스트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '관리자 리스트 조회가 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.UNAUTHORIZED
  })
  async getAdminList(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: GetAdminListDto
  ) {
    // get admin
    const adminList = await this.adminService.getAdminList(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: adminList
    })
  }

  // ANCHOR get admin
  @UseGuards(AuthGuard)
  @Get('getAdmin')
  @ApiOperation({
    summary: '관리자 정보 조회',
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

    // get admin
    const admin = await this.adminService.getAdmin(userId)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: admin
    })
  }

  // ANCHOR create admin
  @Post('createAdmin')
  @ApiOperation({
    summary: '관리자 생성',
    description: '파라미터를 입력받아 관리자를 생성합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '관리자 생성이 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: SWAGGER.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: '관리자가 존재하는 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: '관리자 생성중 오류가 발생한 경우 반환'
  })
  async createAdmin(@Res() res: Response, @Body() dto: CreateAdminDto) {
    // check admin
    const data = await this.adminService.checkAdmin()

    if (!data) {
      // return 403 response
      throw new HttpException(
        'Administrator already exists.',
        HttpStatus.FORBIDDEN
      )
    }

    // create admin
    try {
      await this.adminService.createAdmin(dto)
    } catch (err) {
      // return 500 response
      throw new HttpException(
        'An error occurred during administrator creation.',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Administrator creation is complete.',
      data: null
    })
  }

  // ANCHOR update password
  @UseGuards(AuthGuard)
  @Put('updatePassword')
  @ApiOperation({
    summary: '비밀번호 변경',
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
      await this.adminService.updatePassword(dto)
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
    const result = await this.adminService.login(dto)

    if (!result.result) {
      // return 403 response
      throw new HttpException(
        'The account or password is not valid.',
        HttpStatus.UNAUTHORIZED
      )
    }

    // login
    session.userId = result.data.id

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
    summary: '로그아웃',
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
    await this.adminService.logout(userId)

    // logout
    session.destroy()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: null
    })
  }
}
