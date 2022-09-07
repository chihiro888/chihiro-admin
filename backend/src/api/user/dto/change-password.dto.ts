import { ApiProperty } from '@nestjs/swagger'
import PARAMETER from 'src/common/constants/parameter'
import { IsNotEmpty, Length } from 'class-validator'
import { Match } from 'src/common/validation/match.decorator'

export class ChangePasswordDto {
  /** session */
  userId: number

  @ApiProperty({
    description: PARAMETER.OLD_PASSWORD,
    example: PARAMETER.OLD_PASSWORD_EXAMPLE
  })
  @IsNotEmpty()
  @Length(8, 100)
  oldPassword: string

  @ApiProperty({
    description: PARAMETER.NEW_PASSWORD,
    example: PARAMETER.NEW_PASSWORD_EXAMPLE
  })
  @IsNotEmpty()
  @Length(8, 100)
  newPassword: string

  @ApiProperty({
    description: PARAMETER.CONFIRM_NEW_PASSWORD,
    example: PARAMETER.CONFIRM_NEW_PASSWORD_EXAMPLE
  })
  @IsNotEmpty()
  @Length(8, 100)
  @Match('newPassword')
  confirmNewPassword: string
}
