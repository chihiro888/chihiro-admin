import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateMenuDto {
  @ApiProperty({
    description: 'type',
    example: 1
  })
  type: string

  @ApiProperty({
    description: 'icon',
    example: 1
  })
  icon: string

  @ApiProperty({
    description: 'title',
    example: 1
  })
  title: string

  @ApiProperty({
    description: 'route',
    example: 1
  })
  route: string

  @ApiProperty({
    description: 'page',
    example: 1
  })
  pageId: number

  @ApiProperty({
    description: 'title',
    example: 1
  })
  path: string
}
