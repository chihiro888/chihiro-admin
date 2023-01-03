import { FilesInterceptor } from '@nestjs/platform-express'
import { applyDecorators, UseInterceptors } from '@nestjs/common'
import { ApiBody, ApiConsumes } from '@nestjs/swagger'

/*
    <reference>
    https://github.com/nestjs/swagger/issues/417

    <usage>
    - decorator
    @ApiFiles()

    - parameter
    @UploadedFiles() files: any
*/
export function ApiFiles(fieldName = 'files') {
  return applyDecorators(
    UseInterceptors(FilesInterceptor(fieldName)),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      type: 'multipart/form-data',
      required: true,
      schema: {
        type: 'object',
        properties: {
          [fieldName]: {
            type: 'array',
            items: {
              type: 'string',
              format: 'binary'
            }
          }
        }
      }
    })
  )
}
