import { Module } from '@nestjs/common'
import { DevelopController } from './develop.controller'

@Module({
  imports: [],
  controllers: [DevelopController],
  providers: []
})
export class DevelopModule {}
