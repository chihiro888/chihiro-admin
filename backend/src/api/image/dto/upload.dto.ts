import { ApiProperty } from '@nestjs/swagger'
import { Length } from 'class-validator'

export class UploadDto {
  @ApiProperty({
    description: 'note',
    example: ''
  })
  note: string
}
