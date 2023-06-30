import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateQueryDto {
  @ApiProperty({
    description: 'title',
    example: ''
  })
  @IsNotEmpty()
  title: string

  @ApiProperty({
    description: 'query',
    example: ''
  })
  @IsNotEmpty()
  query: string
}
