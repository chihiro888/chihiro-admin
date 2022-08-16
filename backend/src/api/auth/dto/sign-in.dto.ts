import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'
import PARAMETER from 'src/common/constants/parameter'

export class SignInDto {
  @Length(3, 50)
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: PARAMETER.ACCOUNT,
    example: PARAMETER.ACCOUNT_EXAMPLE
  })
  account: string

  @Length(3, 50)
  @IsNotEmpty()
  @ApiProperty({
    description: PARAMETER.PASSWORD,
    example: PARAMETER.PASSWORD_EXAMPLE
  })
  password: string
}
