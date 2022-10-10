import { ApiProperty } from '@nestjs/swagger'

export class ExecuteQueryDto {
  /** session */
  userId: number

  /** parameter */
  ipAddress: string

  @ApiProperty({
    description: 'query',
    example: 'select now()'
  })
  query: string
}
