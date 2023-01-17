import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsEmail, IsEnum, Length } from 'class-validator'
import { Match } from 'src/common/validation/match.decorator'

enum Level {
  SystemAdmin = 'SA',
  Admin = 'A'
}

export class CreateAdminDto {
  @ApiProperty({
    description: 'account',
    example: ''
  })
  @Length(5, 255)
  @IsEmail()
  account: string

  @ApiProperty({
    description: 'password',
    example: ''
  })
  @Length(8, 255)
  password: string

  @ApiProperty({
    description: 'confirmPassword',
    example: ''
  })
  @Length(8, 255)
  @Match('password')
  confirmPassword: string

  @ApiProperty({
    description: 'username',
    example: ''
  })
  @Length(1, 255)
  username: string

  @ApiProperty({
    description: 'intro id',
    example: 'hello'
  })
  intro: string

  @ApiProperty({
    description: 'image id',
    example: [1]
  })
  @IsArray()
  profile: number[]

  @ApiProperty({
    description: 'level',
    example: 'SA'
  })
  @IsEnum(Level)
  level: string
}
