import { DeleteGlobalDto } from './dto/delete-global.dto'
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
  UseGuards,
  HttpException
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { CreateGlobalDto } from './dto/create-global.dto'
import { GlobalService } from './global.service'
import { SaveGlobalDto } from './dto/save-global.dto'
import SWAGGER from 'src/common/constants/swagger'

// ANCHOR global controller
@ApiTags('global')
@Controller('api/global')
export class GlobalController {
  constructor(private globalService: GlobalService) {}

  // ANCHOR get global list
  @UseGuards(AuthGuard)
  @Get('getGlobalList')
  @ApiOperation({
    summary: '전역 데이터 리스트 조회',
    description:
      '전역 데이터 리스트를 반환합니다. (데이터가 없을 경우 빈 리스트 반환)'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '전역 데이터 리스트 조회가 성공적인 경우 반환'
  })
  async getGlobalList(@Res() res: Response) {
    // get global list
    const data = await this.globalService.getGlobalList()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR create global
  @UseGuards(AuthGuard)
  @Post('createGlobal')
  @ApiOperation({
    summary: '전역 데이터 생성',
    description: '파라미터를 입력받아 전역 데이터를 생성합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '전역 데이터 생성이 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: SWAGGER.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: '세션이 유효하지 않은 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: '전역 데이터 생성중 오류가 발생한 경우 반환'
  })
  async createGlobal(@Res() res: Response, @Body() dto: CreateGlobalDto) {
    // create global
    try {
      await this.globalService.createGlobal(dto)
    } catch (err) {
      // return 500 response
      throw new HttpException(
        'An error occurred while adding data.',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Data addition is complete.',
      data: null
    })
  }

  // ANCHOR save global
  @UseGuards(AuthGuard)
  @Put('saveGlobal')
  @ApiOperation({
    summary: '전역 데이터 저장',
    description: '파라미터를 입력받아 전역 데이터를 저장합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '전역 데이터 저장이 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: SWAGGER.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.UNAUTHORIZED
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: '전역 데이터 저장중 오류가 발생한 경우 반환'
  })
  async saveGlobal(@Res() res: Response, @Body() dto: SaveGlobalDto) {
    // save global
    try {
      await this.globalService.saveGlobal(dto)
    } catch (err) {
      // return 500 response
      throw new HttpException(
        'An error occurred while saving data.',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Data storage is complete.',
      data: null
    })
  }

  // ANCHOR delete global
  @UseGuards(AuthGuard)
  @Delete('deleteGlobal')
  @ApiOperation({
    summary: '전역 데이터 삭제',
    description: '파라미터를 입력받아 전역 데이터를 삭제합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '전역 데이터 삭제가 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: SWAGGER.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.UNAUTHORIZED
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: '전역 데이터 삭제중 오류가 발생한 경우 반환'
  })
  async deleteGlobal(@Res() res: Response, @Query() dto: DeleteGlobalDto) {
    // delete global
    try {
      await this.globalService.deleteGlobal(dto)
    } catch (err) {
      // return 500 response
      throw new HttpException(
        'An error occurred while deleting data.',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Data deletion is complete.',
      data: null
    })
  }

  // ANCHOR get app info
  @Get('getAppInfo')
  @ApiOperation({
    summary: '앱 정보 조회',
    description: '전역데이터로부터 앱 정보를 조회합니다.'
  })
  async getAppInfo(@Res() res: Response) {
    // get app info
    const data = await this.globalService.getAppInfo()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }
}
