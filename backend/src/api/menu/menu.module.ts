// ** Module

import { Module } from '@nestjs/common'

// ** Controller
import { MenuController } from './menu.controller'

// ** Service
import { MenuService } from './menu.service'

@Module({
  imports: [],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
