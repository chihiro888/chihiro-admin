import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AdminModule } from './api/admin/admin.module'
import { DashboardModule } from './api/dashboard/dashboard.module'
import { GlobalModule } from './api/global/global.module'
import { ImageModule } from './api/image/image.module'
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

    // syatem module
    AdminModule,
    GlobalModule,
    ImageModule,
    DashboardModule
  ]
})
export class AppModule {}
