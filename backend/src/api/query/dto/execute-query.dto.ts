import { ApiProperty } from '@nestjs/swagger'
import PARAMETER from 'src/common/constants/parameter'

export class ExecuteQueryDto {
  /** session */
  userId: number

  /** parameter */
  ipAddress: string

  @ApiProperty({
    description: PARAMETER.QUERY,
    example: PARAMETER.QUERY_EXAMPLE
  })
  query: string
}
