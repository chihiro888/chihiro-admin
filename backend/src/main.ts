import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as session from 'express-session'
import { Session } from './app/session/session.entity'
import { TypeormStore } from 'connect-typeorm/out'
import { ConfigService } from '@nestjs/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import { HttpExceptionFilter } from './common/exception/http-exception.filter'

async function bootstrap() {
  // get nest application
  const app = await NestFactory.create(AppModule)

  // set custom exception
  app.useGlobalFilters(new HttpExceptionFilter())

  // swagger config
  const config = new DocumentBuilder()
    .setTitle('mysql query saver API')
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
  const mysqlDataSource = new DataSource(database)
  mysqlDataSource.initialize()

  // get session repository
  const sessionRepository = await mysqlDataSource.getRepository(Session)

  // set express-session
  app.use(
    session({
      secret: configService.get<string>('sessionSecretKey'),
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore().connect(sessionRepository)
    })
  )

  // execute application
  const port = configService.get<number>('port')
  await app.listen(port)
}
bootstrap()
