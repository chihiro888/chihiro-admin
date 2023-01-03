import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AdminModule } from './api/admin/admin.module'
import { DevelopModule } from './api/develop/develop.module'
import { GlobalModule } from './api/global/global.module'
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
    DevelopModule,
    AdminModule,
    GlobalModule
  ]
})
export class AppModule {}
