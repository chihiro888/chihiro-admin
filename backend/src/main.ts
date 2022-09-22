import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import { DataSourceOptions } from 'typeorm'
import { HttpExceptionFilter } from './common/exception/http-exception.filter'
import { ValidationPipe } from '@nestjs/common'

// session
import session from 'express-session'
import mysql from 'mysql'
import MySQLStore from 'express-mysql-session'

async function bootstrap() {
  // get nest application
  const app = await NestFactory.create(AppModule)

  // set custom exception
  app.useGlobalFilters(new HttpExceptionFilter())

  // validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  )

  // swagger config
  const config = new DocumentBuilder()
    .setTitle('Chihiro Develop Kit API')
    .setDescription('Documentation is quite important. lol')
    .setVersion('1.0')
    .build()

  // create swagger document
  const document = SwaggerModule.createDocument(app, config)

  // set swagger
  SwaggerModule.setup('api', app, document)

  // get database information
  const configService = app.get(ConfigService)
  const database = configService.get<DataSourceOptions>('database')

  // get session store
  const options = {
    host: database['host'],
    user: database['username'],
    password: database['password'],
    database: database['database']
  }
  const connection = mysql.createConnection(options)
  const sessionStore = new MySQLStore({}, connection)

  // set express-session
  app.use(
    session({
      secret: configService.get<string>('sessionSecretKey'),
      resave: false,
      saveUninitialized: false,
      store: sessionStore
    })
  )

  // execute application
  const port = configService.get<number>('port')
  await app.listen(port)
}
bootstrap()
