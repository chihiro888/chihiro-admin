import { Module } from '@nestjs/common'
import { GlobalService } from '../global/global.service'
import { ImageController } from './image.controller'
import { ImageService } from './image.service'

@Module({
  imports: [],
  controllers: [ImageController],
  providers: [ImageService, GlobalService]
})
export class ImageModule {}
