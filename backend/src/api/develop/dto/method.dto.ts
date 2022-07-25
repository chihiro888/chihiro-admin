import { ApiProperty } from '@nestjs/swagger'
import PARAMETER from 'src/common/constants/parameter'

export class MethodDto {
  @ApiProperty({
    description: PARAMETER.PARAMETER_1,
    example: PARAMETER.PARAMETER_1_EXAMPLE,
    required: false
  })
  parameter1: string | null

  @ApiProperty({
    description: PARAMETER.PARAMETER_2,
    example: PARAMETER.PARAMETER_2_EXAMPLE,
    required: false
  })
  parameter2: string | null
}
