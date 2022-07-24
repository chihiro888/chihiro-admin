import { ApiProperty } from '@nestjs/swagger'
import PARAMETER from 'src/common/constants/parameter'

export class CreateUserDto {
  @ApiProperty({
    description: PARAMETER.ACCOUNT,
    example: PARAMETER.ACCOUNT_EXAMPLE
  })
  account: string

  @ApiProperty({
    description: PARAMETER.PASSWORD,
    example: PARAMETER.PASSWORD_EXAMPLE
  })
  password: string

  @ApiProperty({
    description: PARAMETER.USERNAME,
    example: PARAMETER.USERNAME_EXAMPLE
  })
  username: string
}
