import { ApiProperty } from '@nestjs/swagger'

export class GetAdminDetailDto {
  @ApiProperty({
    description: 'user id',
    example: 1
  })
  userId: number
}
