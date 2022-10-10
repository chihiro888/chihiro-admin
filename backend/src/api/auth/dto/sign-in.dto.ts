import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class SignInDto {
  @Length(3, 50)
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'account',
    example: 'chihiro888@github.com'
  })
  account: string

  @Length(3, 50)
  @IsNotEmpty()
  @ApiProperty({
    description: 'password',
    example: '12341234'
  })
  password: string
}
