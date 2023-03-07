import { UserController } from './user.controller'
import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { GlobalService } from '../global/global.service'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, GlobalService]
})
export class AdminModule {}
