import { ApiProperty } from '@nestjs/swagger'

export class GetMenuListDto {
  @ApiProperty({
    description: 'permission',
    example: 'U'
  })
  permission: string
}
