// ** Module
import { Module } from '@nestjs/common'

// ** Controller
import { DevelopController } from './develop.controller'

// ** Service
import { DevelopService } from './develop.service'

@Module({
  imports: [],
  controllers: [DevelopController],
  providers: [DevelopService]
})
export class DevelopModule {}
