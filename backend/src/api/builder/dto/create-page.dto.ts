import { ApiProperty } from '@nestjs/swagger'

export class CreatePageDto {
  @ApiProperty({
    description: 'url',
    example: ''
  })
  url: string

  @ApiProperty({
    description: 'title',
    example: ''
  })
  title: string

  @ApiProperty({
    description: 'sub title',
    example: ''
  })
  subTitle: string

  @ApiProperty({
    description: 'use list api',
    example: ''
  })
  useListApi: boolean

  @ApiProperty({
    description: 'list api',
    example: ''
  })
  listApi: string

  @ApiProperty({
    description: 'use create api',
    example: ''
  })
  useCreateApi: boolean

  @ApiProperty({
    description: 'create api',
    example: ''
  })
  createApi: string

  @ApiProperty({
    description: 'use detail api',
    example: ''
  })
  useDetailApi: boolean

  @ApiProperty({
    description: 'detail api',
    example: ''
  })
  detailApi: string

  @ApiProperty({
    description: 'use delete api',
    example: ''
  })
  useDeleteApi: boolean

  @ApiProperty({
    description: 'delete api',
    example: ''
  })
  deleteApi: string

  @ApiProperty({
    description: 'table header',
    example: ''
  })
  tableHeader: string

  @ApiProperty({
    description: 'table content',
    example: ''
  })
  tableContent: string

  @ApiProperty({
    description: 'add form',
    example: ''
  })
  addForm: string

  @ApiProperty({
    description: 'detail form',
    example: ''
  })
  detailForm: string

  @ApiProperty({
    description: 'search form',
    example: ''
  })
  searchForm: string

  @ApiProperty({
    description: 'action list',
    example: ''
  })
  actionList: string
}
