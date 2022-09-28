import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { join } from 'path'
import { AuthModule } from './api/auth/auth.module'
import { DevelopModule } from './api/develop/develop.module'
import { QueryModule } from './api/query/query.module'
import { UserModule } from './api/user/user.module'
import { GlobalConfigModule } from './common/global/config.module'
import { GlobalDatabaseModule } from './common/global/database.module'
import { GlobalHttpModule } from './common/global/http.module'
import configuration from './configuration/configuration'
@Module({
  imports: [
    // setting configuration
    ConfigModule.forRoot({
      load: [configuration]
    }),

    // import global module
    GlobalConfigModule,
    GlobalDatabaseModule,
    GlobalHttpModule,

    // import app module
    AuthModule,
    UserModule,
    DevelopModule,
    QueryModule
  ]
})
export class AppModule {}
