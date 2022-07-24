import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
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

    // setting TypeORM
    TypeOrmModule.forRootAsync({
      name: 'mysql_query_saver',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database')
      })
    }),

    // import app module
    AuthModule
  ]
})
export class AppModule {}
