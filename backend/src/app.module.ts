import { BuilderModule } from './api/builder/builder.module'
import { AuthModule } from './api/auth/auth.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AdminModule } from './api/admin/admin.module'
import { DashboardModule } from './api/dashboard/dashboard.module'
import { DevelopModule } from './api/develop/develop.module'
import { GlobalModule } from './api/global/global.module'
import { ImageModule } from './api/image/image.module'
import { GlobalConfigModule } from './common/global/config.module'
import { GlobalDatabaseModule } from './common/global/database.module'
import { GlobalHttpModule } from './common/global/http.module'
import configuration from './configuration/configuration'
import { MenuModule } from './api/menu/menu.module'
import { ExcelModule } from './api/excel/excel.module'
import { UserModule } from './api/user/user.module'
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
    AuthModule,
    GlobalModule,
    ImageModule,
    ExcelModule,

    // menu and builder module
    MenuModule,
    BuilderModule,

    // custom module
    DashboardModule,

    // App module
    UserModule
  ]
})
export class AppModule {}
