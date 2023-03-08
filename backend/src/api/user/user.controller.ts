import { UpdateAdminPasswordDto } from './dto/update-admin-password.dto'
import { LoginDto } from './dto/login.dto'
import { CreateSystemAdminDto } from './dto/create-system-admin.dto'
import { UserService } from './user.service'
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
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'
import { GetUserDetailDto } from './dto/get-user-detail.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUsernameDto } from './dto/update-username.dto'
import { UpdateUserRoleDto } from './dto/update-user-role.dto'
import { UpdateUserProfileDto } from './dto/update-user-profile.dto'
import { GetLoginHistoryDetailDto } from './dto/get-login-history-detail.dto'
import { GetLoginHistoryListDto } from './dto/get-login-history-list.dto'
import { ApiFiles } from 'src/common/decorator/api-files.decorator'
import { FilesInterceptor } from '@nestjs/platform-express'
import { UpdateUserIntroDto } from './dto/update-user-intro.dto'
import { DeleteUserDto } from './dto/delete-user.dto'
import { GetUserListDto } from './dto/get-user-list.dto'

// ANCHOR user controller
@ApiTags('user')
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  // ANCHOR get user list
  @UseGuards(SystemAdminGuard)
  @Get('getUserList')
  @ApiOperation({
    summary: '사용자 리스트 조회 (시스템 관리자 기능)',
    description: '세션이 유효한 경우 사용자 리스트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '사용자 리스트 조회가 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.UNAUTHORIZED
  })
  async getUserList(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: GetUserListDto
  ) {
    // get user
    const userList = await this.userService.getUserList(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: userList
    })
  }

  // ANCHOR get user detail
  @UseGuards(SystemAdminGuard)
  @Get('getUserDetail')
  @ApiOperation({
    summary: '사용자 상세정보 조회 (시스템 관리자 기능)',
    description: '사용자 상세정보를 조회합니다.'
  })
  async getUserDetail(@Res() res: Response, @Query() dto: GetUserDetailDto) {
    // get user detail
    const user = await this.userService.getUserDetail(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: user
    })
  }

  // ANCHOR create user
  @UseGuards(SystemAdminGuard)
  @Post('createUser')
  @ApiFiles()
  @ApiOperation({
    summary: '사용자 생성 (시스템 관리자 기능)',
    description: '사용자를 생성합니다'
  })
  async createUser(@Res() res: Response, @Body() dto: CreateUserDto) {
    // get user by account
    const user = await this.userService.getUserByAccount(dto.account)

    if (user) {
      // return 400 response
      throw new HttpException('user already exists.', HttpStatus.BAD_REQUEST)
    }

    // create user
    await this.userService.createUser(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'user addition is complete.',
      data: null
    })
  }

  // ANCHOR delete user
  @UseGuards(SystemAdminGuard)
  @Delete('deleteUser')
  @ApiOperation({
    summary: '사용자 삭제 (시스템 관리자 기능)',
    description: '사용자를 삭제합니다.'
  })
  async deleteUser(@Res() res: Response, @Query() dto: DeleteUserDto) {
    // delete user
    await this.userService.deleteUser(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'user successfully deleted.',
      data: null
    })
  }

  // ANCHOR update user password
  @UseGuards(SystemAdminGuard)
  @Put('updateUserPassword')
  @ApiOperation({
    summary: '사용자 비밀번호 변경 (시스템 관리자 기능)',
    description: '사용자를 비밀번호를 변경합니다.'
  })
  async updateUserPassword(
    @Res() res: Response,
    @Body() dto: UpdateAdminPasswordDto
  ) {
    // update user password
    await this.userService.updateUserPassword(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Password change is complete.',
      data: null
    })
  }

  // ANCHOR update user username
  @UseGuards(SystemAdminGuard)
  @Put('updateUsername')
  @ApiOperation({
    summary: '사용자 사용자명 변경 (시스템 관리자 기능)',
    description: '사용자를 사용자명을 변경합니다.'
  })
  async updateUsername(@Res() res: Response, @Body() dto: UpdateUsernameDto) {
    // update user username
    await this.userService.updateUsername(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'User name change is complete.',
      data: null
    })
  }

  // ANCHOR update user role
  @UseGuards(SystemAdminGuard)
  @Put('updateUserRole')
  @ApiOperation({
    summary: '사용자 권한 변경 (시스템 관리자 기능)',
    description: '사용자 권한을 변경합니다.'
  })
  async updateUserRole(@Res() res: Response, @Body() dto: UpdateUserRoleDto) {
    // update user role
    await this.userService.updateUserRole(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Permission change completed.',
      data: null
    })
  }

  // ANCHOR update user profile
  @UseGuards(SystemAdminGuard)
  @Put('updateUserProfile')
  @ApiOperation({
    summary: '사용자 프로필 변경 (시스템 관리자 기능)',
    description: '사용자의 프로필을 변경합니다.'
  })
  async updateUserProfile(
    @Res() res: Response,
    @Body() dto: UpdateUserProfileDto
  ) {
    // update user profile
    await this.userService.updateUserProfile(dto.id, dto.profile)

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
  async updateUserIntro(@Res() res: Response, @Body() dto: UpdateUserIntroDto) {
    // update user intro
    await this.userService.updateUserIntro(dto)

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
    const data = await this.userService.getLoginHistoryList(dto)

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
    const data = await this.userService.getLoginHistoryDetail(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }
}
