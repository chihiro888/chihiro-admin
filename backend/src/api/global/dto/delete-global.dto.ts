import { ApiProperty } from '@nestjs/swagger'
import { Length } from 'class-validator'

export class DeleteGlobalDto {
  @ApiProperty({
    description: 'key',
    example: ''
  })
  @Length(1, 255)
  key: string
}
