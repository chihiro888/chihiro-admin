import { Module } from '@nestjs/common'
import { UserProviders } from 'src/app/user/user.providers'
import { UserService } from 'src/app/user/user.service'
import { DatabaseModule } from 'src/common/database/database.module'
import { UserController } from './user.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService]
})
export class UserModule {}
