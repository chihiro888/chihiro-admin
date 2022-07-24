import { ApiProperty } from '@nestjs/swagger'
import MESSAGE from 'src/common/constants/message'

export class SignInDto {
  @ApiProperty({
    description: MESSAGE.ACCOUNT,
    example: MESSAGE.ACCOUNT_EXAMPLE
  })
  account: string

  @ApiProperty({
    description: MESSAGE.PASSWORD,
    example: MESSAGE.PASSWORD_EXAMPLE
  })
  password: string
}
