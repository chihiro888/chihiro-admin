// ** Module
import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseGuards,
  Query,
  Delete,
  Put,
  Session,
  HttpStatus
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

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
import { LoginDto } from './dto/login.dto'
import { LogoutDto } from './dto/logout.dto'
import { UpdatePasswordDto } from './dto/update-password.dto'
import { GetAdminBySessionDto } from './dto/get-admin-by-session.dto'

// ** Decorator
import { ApiFiles } from 'src/common/decorator/api-files.decorator'

// ** Guard
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'
import { AdminGuard } from 'src/common/guard/admin.guard'

// ** Service
import { AdminService } from './admin.service'
import { ActionService } from '../action/action.service'

// ANCHOR admin controller
@ApiTags('admin')
@Controller('api/admin')
export class AdminController {
  constructor(
    private adminService: AdminService,
    private actionService: ActionService
  ) {}

  // ANCHOR check system admin
  @Get('checkSystemAdmin')
  @ApiOperation({ summary: '시스템 관리자 존재 여부 확인' })
  async checkSystemAdmin(@Res() res: Response) {
    const result = await this.adminService.checkSystemAdmin()
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR create system admin
  @Post('createSystemAdmin')
  @ApiOperation({ summary: '시스템 관리자 생성' })
  async createSystemAdmin(
    @Res() res: Response,
    @Body() dto: CreateSystemAdminDto
  ) {
    const result = await this.adminService.createSystemAdmin(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR login
  @Post('login')
  @ApiOperation({ summary: '로그인' })
  async login(
    @Res() res: Response,
    @Body() dto: LoginDto,
    @Session() session: any
  ) {
    const result = await this.adminService.login(dto)

    session.userId = result.data.id
    session.role = result.data.role

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR logout
  @Delete('logout')
  @ApiOperation({ summary: '로그아웃 (본인)' })
  async logout(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: LogoutDto
  ) {
    dto.userId = session.userId
    const result = await this.adminService.logout(dto)

    session.destroy()

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR get admin
  @UseGuards(AdminGuard)
  @Get('getAdminBySession')
  @ApiOperation({ summary: '관리자 상세정보 조회 (관리자 기능)' })
  async getAdminBySession(
    @Res() res: Response,
    @Query() dto: GetAdminBySessionDto,
    @Session() session: any
  ) {
    dto.userId = session.userId
    const result = await this.adminService.getAdminBySession(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR update password
  @UseGuards(AdminGuard)
  @Put('updatePassword')
  @ApiOperation({ summary: '비밀번호 변경 (본인)' })
  async updatePassword(
    @Res() res: Response,
    @Body() dto: UpdatePasswordDto,
    @Session() session: any
  ) {
    dto.userId = session.userId
    const result = await this.adminService.updatePassword(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR get admin
  @UseGuards(AdminGuard)
  @Get('getAdmin')
  @ApiOperation({ summary: '관리자 상세정보 조회 (관리자 기능)' })
  async getAdmin(@Res() res: Response, @Query() dto: GetAdminDto) {
    const result = await this.adminService.getAdmin(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR get admin list
  @UseGuards(SystemAdminGuard)
  @Get('getAdminList')
  @ApiOperation({ summary: '관리자 리스트 조회 (시스템 관리자 기능)' })
  async getAdminList(@Res() res: Response, @Query() dto: GetAdminListDto) {
    const result = await this.adminService.getAdminList(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR create admin
  @UseGuards(SystemAdminGuard)
  @Post('createAdmin')
  @ApiOperation({ summary: '관리자 생성 (시스템 관리자 기능)' })
  async createAdmin(
    @Res() res: Response,
    @Body() dto: CreateAdminDto,
    @Session() session: any
  ) {
    const result = await this.adminService.createAdmin(dto)

    // 액션 저장
    await this.actionService.saveAdminAction(session.userId, 'createAdmin', dto)

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR delete admin
  @UseGuards(SystemAdminGuard)
  @Delete('deleteAdmin')
  @ApiOperation({ summary: '관리자 삭제 (시스템 관리자 기능)' })
  async deleteAdmin(
    @Res() res: Response,
    @Query() dto: DeleteAdminDto,
    @Session() session: any
  ) {
    dto.userId = session.userId
    const result = await this.adminService.deleteAdmin(dto)

    // 액션 저장
    await this.actionService.saveAdminAction(session.userId, 'deleteAdmin', dto)

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR update admin password
  @UseGuards(SystemAdminGuard)
  @Put('updateAdminPassword')
  @ApiOperation({ summary: '관리자 비밀번호 변경 (시스템 관리자 기능)' })
  async updateAdminPassword(
    @Res() res: Response,
    @Body() dto: UpdateAdminPasswordDto,
    @Session() session: any
  ) {
    const result = await this.adminService.updateAdminPassword(dto)

    // 액션 저장
    await this.actionService.saveAdminAction(
      session.userId,
      'updateAdminPassword',
      dto
    )

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR update admin username
  @UseGuards(SystemAdminGuard)
  @Put('updateAdminUsername')
  @ApiOperation({ summary: '관리자 사용자명 변경 (시스템 관리자 기능)' })
  async updateAdminUsername(
    @Res() res: Response,
    @Body() dto: UpdateAdminUsernameDto,
    @Session() session: any
  ) {
    const result = await this.adminService.updateAdminUsername(dto)

    // 액션 저장
    await this.actionService.saveAdminAction(
      session.userId,
      'updateAdminUsername',
      dto
    )

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR update admin role
  @UseGuards(SystemAdminGuard)
  @Put('updateAdminRole')
  @ApiOperation({ summary: '관리자 권한 변경 (시스템 관리자 기능)' })
  async updateAdminRole(
    @Res() res: Response,
    @Body() dto: UpdateAdminRoleDto,
    @Session() session: any
  ) {
    const result = await this.adminService.updateAdminRole(dto)

    // 액션 저장
    await this.actionService.saveAdminAction(
      session.userId,
      'updateAdminRole',
      dto
    )

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR update admin profile
  @UseGuards(SystemAdminGuard)
  @Put('updateAdminProfile')
  @ApiOperation({ summary: '관리자 프로필 변경 (시스템 관리자 기능)' })
  async updateAdminProfile(
    @Res() res: Response,
    @Body() dto: UpdateAdminProfileDto,
    @Session() session: any
  ) {
    const result = await this.adminService.updateAdminProfile(dto)

    // 액션 저장
    await this.actionService.saveAdminAction(
      session.userId,
      'updateAdminProfile',
      dto
    )

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR update admin intro
  @UseGuards(SystemAdminGuard)
  @Put('updateAdminIntro')
  @ApiOperation({ summary: '관리자 소개 변경 (시스템 관리자 기능)' })
  async updateAdminIntro(
    @Res() res: Response,
    @Body() dto: UpdateAdminIntroDto,
    @Session() session: any
  ) {
    const result = await this.adminService.updateAdminIntro(dto)

    // 액션 저장
    await this.actionService.saveAdminAction(
      session.userId,
      'updateAdminIntro',
      dto
    )

    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR get login history list
  @UseGuards(SystemAdminGuard)
  @Get('getLoginHistoryList')
  @ApiOperation({ summary: '로그인 이력 리스트 조회 (시스템 관리자 기능)' })
  async getLoginHistoryList(
    @Res() res: Response,
    @Query() dto: GetLoginHistoryListDto
  ) {
    const result = await this.adminService.getLoginHistoryList(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }

  // ANCHOR get login history
  @UseGuards(SystemAdminGuard)
  @Get('getLoginHistory')
  @ApiOperation({ summary: '로그인 이력 상세 조회 (시스템 관리자 기능)' })
  async getLoginHistory(
    @Res() res: Response,
    @Query() dto: GetLoginHistoryDto
  ) {
    const result = await this.adminService.getLoginHistory(dto)
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: result.message,
      data: result.data
    })
  }
}
