import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './common/http-exception.filter'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import configuration from './configuration/configuration'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // custom exception
  app.useGlobalFilters(new HttpExceptionFilter())

  // session
  /*
  app.use(
    session({
      secret: 'mysql-query-saver',
      resave: false,
      saveUninitialized: true,
      store: new TypeormStore().connect(
        getConnectionManager().get('mysql_query_saver').getRepository(Session)
      )
    })
  )
  */

  // swagger config
  const config = new DocumentBuilder()
    .setTitle('title')
    .setDescription('desc')
    .setVersion('1.0')
    .build()

  // create swagger document
  const document = SwaggerModule.createDocument(app, config)

  // setup swagger
  SwaggerModule.setup('api', app, document)

  // execute app
  await app.listen(configuration().port)
}
bootstrap()
