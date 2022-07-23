import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './api/auth/auth.module'
import configuration from './configuration/configuration'

// for debug
console.log('----------------------------')
console.log(`.env.${process.env.NODE_ENV}`)
console.log('----------------------------')

@Module({
  imports: [
    // setting configuration
    ConfigModule.forRoot({
      envFilePath: `./src/configuration/.env.${process.env.NODE_ENV}`,
      load: [configuration]
    }),

    AuthModule
  ]
})
export class AppModule {}
