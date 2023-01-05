import { ApiProperty } from '@nestjs/swagger'

export class UpdateAdminUsernameDto {
  @ApiProperty({
    description: 'user id',
    example: 1
  })
  userId: number

  @ApiProperty({
    description: 'username',
    example: 'john'
  })
  username: string
}
