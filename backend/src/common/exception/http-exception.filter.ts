import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger
} from '@nestjs/common'
import { Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest()
    const response = ctx.getResponse<Response>()
    const status = exception.getStatus()
    const exceptionResponse = exception.getResponse()

    // class-validator error message
    let message = exceptionResponse['message']

    if (message === undefined) {
      // throw exception error message
      message = exception.message
    } else {
      message = message[0]
    }

    let userId = undefined
    try {
      userId = request.session.userId
    } catch (e) {
      // pass
    }

    const logger = new Logger('exception')
    logger.warn(
      `userId=${userId}    statusCode=${status}    message=${message}`
    )

    response.status(status).json({
      statusCode: status,
      message: message,
      data: null
    })
  }
}
