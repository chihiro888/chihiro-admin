import { ApiProperty } from '@nestjs/swagger'

export class DeleteAdminDto {
  @ApiProperty({
    description: 'user id',
    example: 1
  })
  userId: number
}
