import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class GetQueryListDto {
  @ApiProperty({
    description: 'page',
    example: 1
  })
  @IsNotEmpty()
  page: number
}
