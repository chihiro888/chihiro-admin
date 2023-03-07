import { AuthController } from './auth.controller'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { GlobalService } from '../global/global.service'

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, GlobalService]
})
export class AuthModule {}
