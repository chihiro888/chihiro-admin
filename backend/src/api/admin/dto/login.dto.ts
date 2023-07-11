import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, Length } from 'class-validator'

export class LoginDto {
  @ApiProperty({
    description: 'account',
    example: ''
  })
  @Length(5, 255)
  @IsEmail()
  account: string | null

  @ApiProperty({
    description: 'password',
    example: ''
  })
  @Length(8, 255)
  password: string | null
}
