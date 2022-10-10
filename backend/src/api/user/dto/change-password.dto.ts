import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, Length } from 'class-validator'
import { Match } from 'src/common/validation/match.decorator'

export class ChangePasswordDto {
  /** session */
  userId: number

  @ApiProperty({
    description: 'old password',
    example: '12341234'
  })
  @IsNotEmpty()
  @Length(8, 100)
  oldPassword: string

  @ApiProperty({
    description: 'new password',
    example: '22222222'
  })
  @IsNotEmpty()
  @Length(8, 100)
  newPassword: string

  @ApiProperty({
    description: 'confirm new password',
    example: '22222222'
  })
  @IsNotEmpty()
  @Length(8, 100)
  @Match('newPassword')
  confirmNewPassword: string
}
