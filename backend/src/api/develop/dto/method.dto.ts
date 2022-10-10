import { ApiProperty } from '@nestjs/swagger'

export class MethodDto {
  @ApiProperty({
    description: 'parameter 1',
    example: 'sample1',
    required: false
  })
  parameter1: string | null

  @ApiProperty({
    description: 'parameter 2',
    example: 'sample2',
    required: false
  })
  parameter2: string | null
}
