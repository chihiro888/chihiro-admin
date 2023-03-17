import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class GetUserDto {
  @ApiProperty({
    description: 'id',
    example: 1
  })
  @IsNotEmpty()
  id: number
}
