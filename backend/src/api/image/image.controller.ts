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
  UploadedFiles
} from '@nestjs/common'
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import SWAGGER from 'src/common/constants/swagger'
import { ApiFiles } from 'src/common/decorator/api-files.decorator'
import { UploadDto } from './dto/upload.dto'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express'

// ANCHOR image controller
@Controller('api/image')
export class ImageController {
  constructor(private imageService: ImageService) {}

  // ANCHOR image upload
  @UseGuards(AuthGuard)
  @Post('upload')
  @ApiTags('image')

  @ApiFiles()
  @ApiOperation({
    summary: '이미지 업로드',
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
    @UploadedFiles() files
  ) {

    console.log('files', files)
    try {
      for (const file of files) {
        await this.imageService.upload(file)
      }
    } catch (err) {
      console.log('err = ', err)
      // return 500 response
      throw new HttpException(
        'An error occurred during file uploading.',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }


    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Image upload is complete.',
      data: null
    })
  }


}
