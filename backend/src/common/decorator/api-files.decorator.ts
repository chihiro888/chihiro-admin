import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express'
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

export const ApiFiles = (fileName: string = 'files'): MethodDecorator => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  

  ApiBody({
      type: 'multipart/form-data',
      required: true,
      schema: {
          type: 'object',
          properties: {
            note: { type: 'string' },
              [fileName]: {
                  type: 'array',
                  items: {
                      type: 'string',
                      format: 'binary',
                  },
              },
          },
      },
  })(target, propertyKey, descriptor);
};