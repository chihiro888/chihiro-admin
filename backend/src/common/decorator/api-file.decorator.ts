import { FileInterceptor } from '@nestjs/platform-express'
import { applyDecorators, UseInterceptors } from '@nestjs/common'
import { ApiBody, ApiConsumes } from '@nestjs/swagger'

/*
    <reference>
    https://velog.io/@hahaha/NestJS-파일-업로드하기

    <usage>
    - decorator
    @ApiFile()

    - parameter
    @UploadedFile() file: any
*/
export function ApiFile(fieldName = 'file') {
  return applyDecorators(
    UseInterceptors(FileInterceptor(fieldName)),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          note: { type: 'string' },
          [fieldName]: {
            type: 'string',
            format: 'binary'
          }
        }
      }
    })
  )
}
