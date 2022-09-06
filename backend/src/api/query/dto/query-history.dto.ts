import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import PARAMETER from 'src/common/constants/parameter'

export class QueryHistoryDto {
  /** session */
  userId: number

  @Type(() => Number)
  @ApiProperty({
    description: PARAMETER.PAGE,
    example: PARAMETER.PAGE_EXAMPLE
  })
  page: number

  @ApiProperty({
    description: PARAMETER.ID,
    example: PARAMETER.ID_EXAMPLE,
    required: false
  })
  id: string

  @ApiProperty({
    description: PARAMETER.TYPE,
    example: PARAMETER.TYPE_EXAMPLE,
    required: false
  })
  type: string

  @ApiProperty({
    description: PARAMETER.TYPE,
    example: PARAMETER.CREATED_AT_EXAMPLE,
    required: false
  })
  createdAt: string
}
