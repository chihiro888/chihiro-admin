import { BuilderModule } from './api/builder/builder.module'
import { AuthModule } from './api/auth/auth.module'
import { UserModule } from './api/user/user.module'
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
import { CoreModule } from './api/core/core.module'
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
    // DevelopModule,
    AdminModule,
    UserModule,
    AuthModule,
    GlobalModule,
    ImageModule,
    DashboardModule,
    BuilderModule,
    CoreModule
  ]
})
export class AppModule {}
