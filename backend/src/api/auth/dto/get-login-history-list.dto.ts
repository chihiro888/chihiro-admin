import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class GetLoginHistoryListDto {
  @ApiProperty({
    description: 'page',
    example: 1
  })
  @IsNotEmpty()
  page: number

  @ApiProperty({
    description: 'account',
    example: ''
  })
  account: string

  @ApiProperty({
    description: 'type',
    example: ''
  })
  type: string

  @ApiProperty({
    description: 'created at',
    example: ''
  })
  createdAt: string
}
