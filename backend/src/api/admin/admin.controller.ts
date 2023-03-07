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
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { Response } from 'express'
import SWAGGER from 'src/common/constants/swagger'


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
}
