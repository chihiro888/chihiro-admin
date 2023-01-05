import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, Length } from 'class-validator'
import { Match } from 'src/common/validation/match.decorator'

export class CreateSystemAdminDto {
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

  @ApiProperty({
    description: 'confirm password',
    example: ''
  })
  @Length(8, 255)
  @Match('password')
  confirmPassword: string | null

  @ApiProperty({
    description: 'username',
    example: ''
  })
  @Length(1, 255)
  username: string | null
}
