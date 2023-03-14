import { ApiProperty } from '@nestjs/swagger'

export class DeleteMenuDto {
  @ApiProperty({
    description: 'menu id',
    example: 1
  })
  id: number
}
