import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class GetAdminDetailDto {
  @ApiProperty({
    description: 'user id',
    example: 1
  })
  @IsNotEmpty()
  userId: number
}
