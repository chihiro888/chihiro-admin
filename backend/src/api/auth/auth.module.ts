import { Module } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { AuthController } from './auth.controller'

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [UserService]
})
export class AuthModule {}
