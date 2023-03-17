import { ApiProperty } from '@nestjs/swagger'

export class GetMenuOrderListDto {
  @ApiProperty({
    description: 'permission',
    example: 'U'
  })
  permission: string
}
