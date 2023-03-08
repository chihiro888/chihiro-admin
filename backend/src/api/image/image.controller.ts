import { ImageService } from './image.service'
import {
  Body,
  Controller,
  Post,
  HttpStatus,
  Res,
  HttpException,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  Get,
  Query
} from '@nestjs/common'
import {
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { Response } from 'express'
import SWAGGER from 'src/common/constants/swagger'
import { ApiFiles } from 'src/common/decorator/api-files.decorator'
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { GetListDto } from './dto/get-list.dto'
import { UploadDto } from './dto/upload.dto'
import { AdminGuard } from 'src/common/guard/admin.guard'
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'

// ANCHOR image controller
@ApiTags('image')
@Controller('api/image')
export class ImageController {
  constructor(private imageService: ImageService) {}

  // ANCHOR image upload
  @UseGuards(AdminGuard)
  @Post('upload')
  @ApiFiles()
  @ApiOperation({
    summary: '이미지 업로드 (관리자 기능)',
    description: '이미지를 업로드하여 데이터베이스 및 디렉토리에 저장합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '이미지 업로드가 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.UNAUTHORIZED
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: '이미지 업로드중 오류가 발생한 경우 반환'
  })
  @UseInterceptors(FilesInterceptor('files', 10))
  @ApiConsumes('multipart/form-data')
  async upload(
    @Res() res: Response,
    @Body() dto: UploadDto,
    @UploadedFiles() files
  ) {
    try {
      // 이미지 업로드
      const result = await this.imageService.upload(files, dto.note)

      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Image upload is complete.',
        data: result.data
      })
    } catch (err) {
      // logging
      console.log('err = ', err)

      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'An error occurred during file uploading.',
        data: []
      })
    }
  }

  // ANCHOR get list
  @UseGuards(SystemAdminGuard)
  @Get('getList')
  @ApiTags('image')
  @ApiOperation({
    summary: '이미지 리스트 조회 (시스템 관리자 기능)',
    description: '이미지 리스트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '이미지 리스트 조회가 성공적인 경우 반환'
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: SWAGGER.BAD_REQUEST
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.UNAUTHORIZED
  })
  async getList(@Res() res: Response, @Query() dto: GetListDto) {
    // get list
    const pagination = await this.imageService.getList(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data: pagination
    })
  }
}
