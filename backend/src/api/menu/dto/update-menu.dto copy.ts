import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty } from 'class-validator'

export class UpdateMenuDto {
  @ApiProperty({
    description: 'menu id list',
    example: 1
  })
  @IsArray()
  menuIdList: number[]

  @ApiProperty({
    description: 'permission',
    example: 'U'
  })
  permission: string
}
