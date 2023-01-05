import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length } from 'class-validator'

export class UpdateAdminUsernameDto {
  @ApiProperty({
    description: 'user id',
    example: 1
  })
  @IsNotEmpty()
  userId: number

  @ApiProperty({
    description: 'username',
    example: 'john'
  })
  @Length(1, 255)
  username: string
}
