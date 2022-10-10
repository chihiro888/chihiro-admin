import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'

export class QueryHistoryDto {
  /** session */
  userId: number

  @Type(() => Number)
  @ApiProperty({
    description: 'page',
    example: 1
  })
  page: number

  @ApiProperty({
    description: 'id',
    example: 1,
    required: false
  })
  id: string

  @ApiProperty({
    description: 'type',
    example: 'SLT',
    required: false
  })
  type: string

  @ApiProperty({
    description: 'account',
    example: 'chihiro888@github.com',
    required: false
  })
  account: string

  @ApiProperty({
    description: 'created at',
    example: '2022-09-05',
    required: false
  })
  createdAt: string
}
