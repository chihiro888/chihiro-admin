import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class DeleteQueryDto {
  @ApiProperty({
    description: 'id',
    example: 0
  })
  @IsNotEmpty()
  id: number
}
