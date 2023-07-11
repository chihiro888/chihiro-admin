// ** Module
import { Module } from '@nestjs/common'

// ** Controller
import { BuilderController } from './builder.controller'

// ** Service
import { BuilderService } from './builder.service'

@Module({
  imports: [],
  controllers: [BuilderController],
  providers: [BuilderService]
})
export class BuilderModule {}
