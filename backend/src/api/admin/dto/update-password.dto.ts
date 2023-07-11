import { ApiProperty } from '@nestjs/swagger'
import { Length } from 'class-validator'

export class UpdatePasswordDto {
  // ** Session
  userId: number

  @ApiProperty({
    description: 'old password',
    example: ''
  })
  @Length(8, 255)
  oldPassword: string | null

  @ApiProperty({
    description: 'new password',
    example: ''
  })
  @Length(8, 255)
  newPassword: string | null

  @ApiProperty({
    description: 'confirm new password',
    example: ''
  })
  @Length(8, 255)
  confirmNewPassword: string | null
}
