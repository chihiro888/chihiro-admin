import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class DeleteAdminDto {
  // ** Session
  userId: number

  @ApiProperty({
    description: 'admin id',
    example: 1
  })
  @IsNotEmpty()
  id: number
}
