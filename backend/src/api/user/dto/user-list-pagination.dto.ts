import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import PARAMETER from 'src/common/constants/parameter'

export class UserListPaginationDto {
  /** session */
  userId: number

  @Type(() => Number)
  @ApiProperty({
    description: PARAMETER.PAGE,
    example: PARAMETER.PAGE_EXAMPLE
  })
  page: number

  @ApiProperty({
    description: PARAMETER.ID,
    example: PARAMETER.ID_EXAMPLE
  })
  id: string

  @ApiProperty({
    description: PARAMETER.ACCOUNT,
    example: PARAMETER.ACCOUNT_EXAMPLE
  })
  account: string

  @ApiProperty({
    description: PARAMETER.USERNAME,
    example: PARAMETER.USERNAME_EXAMPLE
  })
  username: string

  @ApiProperty({
    description: PARAMETER.IS_ADMIN,
    example: PARAMETER.IS_ADMIN_EXAMPLE
  })
  isAdmin: string

  @ApiProperty({
    description: PARAMETER.IS_DEVELOPER,
    example: PARAMETER.IS_DEVELOPER_EXAMPLE
  })
  isDeveloper: string

  @ApiProperty({
    description: PARAMETER.CREATED_AT,
    example: PARAMETER.CREATED_AT_EXAMPLE
  })
  createdAt: string
}
