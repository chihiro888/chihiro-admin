import { Module } from '@nestjs/common'
import { DevelopController } from './develop.controller'
import { DevelopService } from './develop.service'

@Module({
  imports: [],
  controllers: [DevelopController],
  providers: [DevelopService]
})
export class DevelopModule {}
