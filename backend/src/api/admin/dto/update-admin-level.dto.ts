import { ApiProperty } from '@nestjs/swagger'

export class UpdateAdminLevelDto {
  @ApiProperty({
    description: 'user id',
    example: 1
  })
  userId: number

  @ApiProperty({
    description: 'level',
    example: 'SA'
  })
  level: string
}
