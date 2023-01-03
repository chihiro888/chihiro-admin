import { ApiProperty } from '@nestjs/swagger'
import { Length } from 'class-validator'

export class CreateGlobalDto {
  @ApiProperty({
    description: 'key',
    example: ''
  })
  @Length(1, 255)
  key: string

  @ApiProperty({
    description: 'value',
    example: ''
  })
  @Length(1, 255)
  value: string

  @ApiProperty({
    description: 'memo',
    example: '',
    required: false
  })
  memo: string
}
