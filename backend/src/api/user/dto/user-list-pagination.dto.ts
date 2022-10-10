import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'

export class UserListPaginationDto {
  /** session */
  userId: number

  @Type(() => Number)
  @ApiProperty({
    description: 'page',
    example: 1
  })
  page: number

  @ApiProperty({
    description: 'id',
    example: 1
  })
  id: string

  @ApiProperty({
    description: 'account',
    example: 'chihiro888@github.com'
  })
  account: string

  @ApiProperty({
    description: 'username',
    example: 'john'
  })
  username: string

  @ApiProperty({
    description: 'is admin',
    example: 0
  })
  isAdmin: string

  @ApiProperty({
    description: 'is developer',
    example: 0
  })
  isDeveloper: string

  @ApiProperty({
    description: 'created at',
    example: '2022-09-05'
  })
  createdAt: string
}
