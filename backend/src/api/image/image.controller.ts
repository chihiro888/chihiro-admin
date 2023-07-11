// ** Module
import {
  Body,
  Controller,
  Post,
  Res,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  Get,
  Query
} from '@nestjs/common'
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { FilesInterceptor } from '@nestjs/platform-express'

// ** Dto
import { UploadDto } from './dto/upload.dto'
import { GetImageListDto } from './dto/get-image-list.dto'

// ** Service
import { ImageService } from './image.service'

// ** Guard
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'

// ** Decorator
import { ApiFiles } from 'src/common/decorator/api-files.decorator'

// ANCHOR image controller
@ApiTags('image')
@Controller('api/image')
export class ImageController {
  constructor(private imageService: ImageService) {}

  // ANCHOR upload
  @UseGuards(SystemAdminGuard)
  @Post('upload')
  @ApiFiles()
  @ApiOperation({ summary: '이미지 업로드 (관리자 기능)' })
  @UseInterceptors(FilesInterceptor('files', 10))
  @ApiConsumes('multipart/form-data')
  async upload(
    @Res() res: Response,
    @Body() dto: UploadDto,
    @UploadedFiles() files
  ) {
    const result = await this.imageService.upload(files, dto.note)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR get image list
  @UseGuards(SystemAdminGuard)
  @Get('getImageList')
  @ApiTags('image')
  @ApiOperation({ summary: '이미지 리스트 조회 (시스템 관리자 기능)' })
  async getImageList(@Res() res: Response, @Query() dto: GetImageListDto) {
    const result = await this.imageService.getImageList(dto)
    res.status(result.statusCode).json(result)
  }
}
