// ** Module
import { Module } from '@nestjs/common'

// ** Controller
import { ImageController } from './image.controller'

// ** Service
import { GlobalService } from '../global/global.service'
import { ImageService } from './image.service'

@Module({
  imports: [],
  controllers: [ImageController],
  providers: [ImageService, GlobalService]
})
export class ImageModule {}
