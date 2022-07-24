import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { join } from 'path'
import { AuthModule } from './api/auth/auth.module'
import configuration from './configuration/configuration'

const envFileName = '.env.' + process.env.NODE_ENV
const envFilePath = join(__dirname, '..', 'src', 'configuration', envFileName)

// for debug
console.log('----------------------------')
console.log(envFileName)
console.log(envFilePath)
console.log('----------------------------')

@Module({
  imports: [
    // setting configuration
    ConfigModule.forRoot({
      envFilePath: envFilePath,
      load: [configuration]
    }),

    // import app module
    AuthModule
  ]
})
export class AppModule {}
