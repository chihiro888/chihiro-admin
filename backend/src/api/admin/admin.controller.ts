import { UpdateAdminPasswordDto } from './dto/update-admin-password.dto'
import { LoginDto } from './dto/login.dto'
import { CreateSystemAdminDto } from './dto/create-system-admin.dto'
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
  UseGuards,
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common'
import {
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { Response } from 'express'
import { UpdatePasswordDto } from './dto/update-password.dto'
import SWAGGER from 'src/common/constants/swagger'
import { GetAdminListDto } from './dto/get-admin-list.dto'
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { GetUserDetailDto } from './dto/get-user-detail.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUsernameDto } from './dto/update-username.dto'
import { UpdateUserLevelDto } from './dto/update-user-level.dto'
import { UpdateUserProfileDto } from './dto/update-user-profile.dto'
import { GetLoginHistoryDetailDto } from './dto/get-login-history-detail.dto'
import { GetLoginHistoryListDto } from './dto/get-login-history-list.dto'
import { ApiFiles } from 'src/common/decorator/api-files.decorator'
import { FilesInterceptor } from '@nestjs/platform-express'
import { UpdateUserIntroDto } from './dto/update-user-intro.dto'
import { DeleteUserDto } from './dto/delete-user.dto'

// ANCHOR admin controller
@ApiTags('admin')
@Controller('api/admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  // ANCHOR check system admin
  @Get('checkSystemAdmin')
  @ApiOperation({
    summary: '시스템 관리자 존재 여부 확인',
    description:
      '시스템 관리자가 존재하지 않는 경우 true, 시스템 관리자가 존재하는 경우 false를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '시스템 관리자 확인이 성공적인 경우 반환'
  })
  async checkSystemAdmin(@Res() res: Response) {
    // check admin
    const data = await this.adminService.checkSystemAdmin()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: data
    })
  }

  // ANCHOR create system admin
  @Post('createSystemAdmin')
  @ApiOperation({
    summary: '시스템 관리자 생성',
    description: '파라미터를 입력받아 시스템 관리자를 생성합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '시스템 관리자 생성이 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: SWAGGER.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: '시스템 관리자가 존재하는 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: '시스템 관리자 생성중 오류가 발생한 경우 반환'
  })
  async createSystemAdmin(
    @Res() res: Response,
    @Body() dto: CreateSystemAdminDto
  ) {
    // check admin
    const data = await this.adminService.checkSystemAdmin()

    if (!data) {
      // return 403 response
      throw new HttpException(
        'Administrator already exists.',
        HttpStatus.FORBIDDEN
      )
    }

    // create admin
    try {
      await this.adminService.createSystemAdmin(dto)
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

  // ANCHOR get admin
  @UseGuards(AuthGuard)
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
    const admin = await this.adminService.getAdminByUserId(userId)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: admin
    })
  }

  // ANCHOR update password
  @UseGuards(AuthGuard)
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

  // ANCHOR get admin list
  @UseGuards(SystemAdminGuard)
  @Get('getAdminList')
  @ApiOperation({
    summary: '관리자 리스트 조회 (시스템 관리자 기능)',
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

  // ANCHOR get user detail
  @UseGuards(SystemAdminGuard)
  @Get('getUserDetail')
  @ApiOperation({
    summary: '관리자 상세정보 조회 (시스템 관리자 기능)',
    description: '관리자 상세정보를 조회합니다.'
  })
  async getUserDetail(@Res() res: Response, @Query() dto: GetUserDetailDto) {
    // get admin detail
    const admin = await this.adminService.getUserDetail(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: admin
    })
  }

  // ANCHOR create admin
  @UseGuards(SystemAdminGuard)
  @Post('createUser')
  @ApiFiles()
  @ApiOperation({
    summary: '관리자 생성 (시스템 관리자 기능)',
    description: '관리자를 생성합니다'
  })
  async createUser(@Res() res: Response, @Body() dto: CreateUserDto) {
    // get user by account
    const admin = await this.adminService.getAdminByAccount(dto.account)

    if (admin) {
      // return 400 response
      throw new HttpException(
        'Administrator already exists.',
        HttpStatus.BAD_REQUEST
      )
    }

    // create admin
    await this.adminService.createUser(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Administrator addition is complete.',
      data: null
    })
  }

  // ANCHOR delete admin
  @UseGuards(SystemAdminGuard)
  @Delete('deleteUser')
  @ApiOperation({
    summary: '관리자 삭제 (시스템 관리자 기능)',
    description: '관리자를 삭제합니다.'
  })
  async deleteUser(@Res() res: Response, @Query() dto: DeleteUserDto) {
    // delete admin
    await this.adminService.deleteUser(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Administrator successfully deleted.',
      data: null
    })
  }

  // ANCHOR update admin password
  @UseGuards(SystemAdminGuard)
  @Put('updateUserPassword')
  @ApiOperation({
    summary: '관리자 비밀번호 변경 (시스템 관리자 기능)',
    description: '관리자를 비밀번호를 변경합니다.'
  })
  async updateUserPassword(
    @Res() res: Response,
    @Body() dto: UpdateAdminPasswordDto
  ) {
    // update admin password
    await this.adminService.updateUserPassword(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Password change is complete.',
      data: null
    })
  }

  // ANCHOR update admin username
  @UseGuards(SystemAdminGuard)
  @Put('updateUsername')
  @ApiOperation({
    summary: '관리자 사용자명 변경 (시스템 관리자 기능)',
    description: '관리자를 사용자명을 변경합니다.'
  })
  async updateUsername(
    @Res() res: Response,
    @Body() dto: UpdateUsernameDto
  ) {
    // update admin username
    await this.adminService.updateUsername(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'User name change is complete.',
      data: null
    })
  }

  // ANCHOR update admin level
  @UseGuards(SystemAdminGuard)
  @Put('updateUserLevel')
  @ApiOperation({
    summary: '관리자 권한 변경 (시스템 관리자 기능)',
    description: '관리자 권한을 변경합니다.'
  })
  async updateUserLevel(
    @Res() res: Response,
    @Body() dto: UpdateUserLevelDto
  ) {
    // update admin level
    await this.adminService.updateUserLevel(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Permission change completed.',
      data: null
    })
  }

  // ANCHOR update admin level
  @UseGuards(SystemAdminGuard)
  @Put('updateAdminProfile')
  @ApiOperation({
    summary: '관리자 프로필 변경 (시스템 관리자 기능)',
    description: '관리자의 프로필을 변경합니다.'
  })
  async updateAdminProfile(
    @Res() res: Response,
    @Body() dto: UpdateUserProfileDto
  ) {
    // update admin profile
    await this.adminService.updateUserProfile(dto.id, dto.profile)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Profile change completed.',
      data: null
    })
  }

  // ANCHOR update admin intro
  @UseGuards(SystemAdminGuard)
  @Put('updateUserIntro')
  @ApiOperation({
    summary: '관리자 소개 변경 (시스템 관리자 기능)',
    description: '관리자의 자기소개를 변경합니다.'
  })
  async updateUserIntro(
    @Res() res: Response,
    @Body() dto: UpdateUserIntroDto
  ) {
    // update admin level
    await this.adminService.updateUserIntro(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Intro change completed.',
      data: null
    })
  }

  // ANCHOR get login history list
  @UseGuards(SystemAdminGuard)
  @Get('getLoginHistoryList')
  @ApiOperation({
    summary: '로그인 이력 리스트 조회 (시스템 관리자 기능)',
    description: '로그인 이력 리스트를 조회합니다.'
  })
  async getLoginHistoryList(
    @Res() res: Response,
    @Query() dto: GetLoginHistoryListDto
  ) {
    // get login history list
    const data = await this.adminService.getLoginHistoryList(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get login history detail
  @UseGuards(SystemAdminGuard)
  @Get('getLoginHistoryDetail')
  @ApiOperation({
    summary: '로그인 이력 상세 조회 (시스템 관리자 기능)',
    description: '로그인 이력 상세를 조회합니다.'
  })
  async getLoginHistoryDetail(
    @Res() res: Response,
    @Query() dto: GetLoginHistoryDetailDto
  ) {
    // get login history detail
    const data = await this.adminService.getLoginHistoryDetail(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }
}
