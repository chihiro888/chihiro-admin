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
import { AuthGuard } from 'src/common/guard/auth.guard'
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express'
import { GetListDto } from './dto/get-list.dto'
import { UploadDto } from './dto/upload.dto'

// ANCHOR image controller
@ApiTags('image')
@Controller('api/image')
export class ImageController {
  constructor(private imageService: ImageService) {}


  // ANCHOR image upload
  @UseGuards(AuthGuard)
  @Post('upload')
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
  
  async upload(@Res() res: Response, @Body() dto: UploadDto, @UploadedFiles() files) {
    let result;

    try {
      result = await this.imageService.upload(files)
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
      data: result.data
    })
  }

  // ANCHOR get list
  @Get('getList')
  @ApiTags('image')
  @ApiOperation({
    summary: '이미지 리스트 조회',
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
