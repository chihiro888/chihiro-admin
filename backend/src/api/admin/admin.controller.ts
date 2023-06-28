// ** Module
import {
  Body,
  Controller,
  Get,
  Post,
  HttpStatus,
  Res,
  HttpException,
  UseGuards,
  Query,
  Session,
  Delete,
  Put
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import SWAGGER from 'src/common/constants/swagger'

// ** Dto
import { CreateSystemAdminDto } from './dto/create-system-admin.dto'
import { GetAdminListDto } from './dto/get-admin-list.dto'
import { GetAdminDto } from './dto/get-admin.dto'
import { CreateAdminDto } from './dto/create-admin.dto'
import { DeleteAdminDto } from './dto/delete-admin.dto'
import { UpdateAdminPasswordDto } from './dto/update-admin-password.dto'
import { UpdateAdminUsernameDto } from './dto/update-admin-username.dto'
import { UpdateAdminRoleDto } from './dto/update-admin-role.dto'
import { UpdateAdminProfileDto } from './dto/update-admin-profile.dto'
import { UpdateAdminIntroDto } from './dto/update-admin-intro.dto'
import { GetLoginHistoryListDto } from './dto/get-login-history-list.dto'
import { GetLoginHistoryDto } from './dto/get-login-history.dto'

// ** Decorator
import { ApiFiles } from 'src/common/decorator/api-files.decorator'

// ** Guard
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'

// ** Service
import { AdminService } from './admin.service'

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

  // ANCHOR get admin
  @UseGuards(SystemAdminGuard)
  @Get('getAdmin')
  @ApiOperation({
    summary: '관리자 상세정보 조회 (시스템 관리자 기능)',
    description: '관리자 상세정보를 조회합니다.'
  })
  async getAdmin(@Res() res: Response, @Query() dto: GetAdminDto) {
    // get admin
    const admin = await this.adminService.getAdmin(dto)

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
  async createAdmin(@Res() res: Response, @Body() dto: CreateAdminDto) {
    // get admin by account
    const admin = await this.adminService.getAdminByAccount(dto.account)

    if (admin) {
      // return 400 response
      throw new HttpException('admin already exists.', HttpStatus.BAD_REQUEST)
    }

    // create admin
    await this.adminService.createAdmin(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'admin addition is complete.',
      data: null
    })
  }

  // ANCHOR delete admin
  @UseGuards(SystemAdminGuard)
  @Delete('deleteAdmin')
  @ApiOperation({
    summary: '관리자 삭제 (시스템 관리자 기능)',
    description: '관리자를 삭제합니다.'
  })
  async deleteUser(@Res() res: Response, @Query() dto: DeleteAdminDto) {
    // delete admin
    await this.adminService.deleteAdmin(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'admin successfully deleted.',
      data: null
    })
  }

  // ANCHOR update admin password
  @UseGuards(SystemAdminGuard)
  @Put('UpdateAdminPasswordDto')
  @ApiOperation({
    summary: '관리자 비밀번호 변경 (시스템 관리자 기능)',
    description: '관리자를 비밀번호를 변경합니다.'
  })
  async UpdateAdminPasswordDto(
    @Res() res: Response,
    @Body() dto: UpdateAdminPasswordDto
  ) {
    // update password
    await this.adminService.updateAdminPassword(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Password change is complete.',
      data: null
    })
  }

  // ANCHOR update admin username
  @UseGuards(SystemAdminGuard)
  @Put('updateAdminUsername')
  @ApiOperation({
    summary: '관리자 사용자명 변경 (시스템 관리자 기능)',
    description: '관리자 사용자명을 변경합니다.'
  })
  async updateAdminUsername(
    @Res() res: Response,
    @Body() dto: UpdateAdminUsernameDto
  ) {
    // update admin username
    await this.adminService.updateAdminUsername(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'admin name change is complete.',
      data: null
    })
  }

  // ANCHOR update admin role
  @UseGuards(SystemAdminGuard)
  @Put('updateAdminRole')
  @ApiOperation({
    summary: '관리자 권한 변경 (시스템 관리자 기능)',
    description: '관리자 권한을 변경합니다.'
  })
  async updateAdminRole(@Res() res: Response, @Body() dto: UpdateAdminRoleDto) {
    // update admin role
    await this.adminService.updateAdminRole(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Permission change completed.',
      data: null
    })
  }

  // ANCHOR update admin profile
  @UseGuards(SystemAdminGuard)
  @Put('updateAdminProfile')
  @ApiOperation({
    summary: '관리자 프로필 변경 (시스템 관리자 기능)',
    description: '관리자의 프로필을 변경합니다.'
  })
  async updateAdminProfile(
    @Res() res: Response,
    @Body() dto: UpdateAdminProfileDto
  ) {
    // update admin profile
    await this.adminService.updateAdminProfile(dto.id, dto.profile)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Profile change completed.',
      data: null
    })
  }

  // ANCHOR update user intro
  @UseGuards(SystemAdminGuard)
  @Put('updateUserIntro')
  @ApiOperation({
    summary: '사용자 소개 변경 (시스템 관리자 기능)',
    description: '사용자의 자기소개를 변경합니다.'
  })
  async updateAdminIntro(
    @Res() res: Response,
    @Body() dto: UpdateAdminIntroDto
  ) {
    // update admin intro
    await this.adminService.updateAdminIntro(dto)

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

  // ANCHOR get login history
  @UseGuards(SystemAdminGuard)
  @Get('getLoginHistory')
  @ApiOperation({
    summary: '로그인 이력 상세 조회 (시스템 관리자 기능)',
    description: '로그인 이력 상세를 조회합니다.'
  })
  async getLoginHistory(
    @Res() res: Response,
    @Query() dto: GetLoginHistoryDto
  ) {
    // get login history
    const data = await this.adminService.getLoginHistory(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }
}
