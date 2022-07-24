import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './common/http-exception.filter'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import configuration from './configuration/configuration'
import * as session from 'express-session'
import mysqlDataSource from './common/mysql-data-source'
import { Session } from './app/session/session.entity'
import { TypeormStore } from 'connect-typeorm/out'

async function bootstrap() {
  // get nest application
  const app = await NestFactory.create(AppModule)

  // set custom exception
  app.useGlobalFilters(new HttpExceptionFilter())

  // get session repository
  const sessionRepository = mysqlDataSource.getRepository(Session)

  // set express-session
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore().connect(sessionRepository)
    })
  )

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

  // execute application
  await app.listen(configuration().port)
}
bootstrap()
