import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class GetPageListDto {
  @ApiProperty({
    description: 'page',
    example: 1
  })
  @IsNotEmpty()
  page: number

  @ApiProperty({
    description: 'url',
    example: ''
  })
  url: string
}
