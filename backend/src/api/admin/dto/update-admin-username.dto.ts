import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length } from 'class-validator'

export class UpdateAdminUsernameDto {
  @ApiProperty({
    description: 'admin id',
    example: 1
  })
  @IsNotEmpty()
  id: number

  @ApiProperty({
    description: 'username',
    example: 'john'
  })
  @Length(1, 255)
  username: string
}
