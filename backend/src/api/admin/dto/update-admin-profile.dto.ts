import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, Length } from 'class-validator'
import { Match } from 'src/common/validation/match.decorator'

export class UpdateAdminProfileDto {
  @ApiProperty({
    description: 'user id',
    example: 1
  })
  @IsNotEmpty()
  userId: number

  @ApiProperty({
    description: 'image id',
    example: 1
  })
  @IsArray()
  profile: number

}
