import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty } from 'class-validator'

export class GetActionListDto {
  @ApiProperty({
    description: 'page',
    example: 1
  })
  @IsNotEmpty()
  page: number

  @ApiProperty({
    description: 'adminId',
    example: ''
  })
  adminId: string

  @ApiProperty({
    description: 'adminAccount',
    example: ''
  })
  adminAccount: string

  @ApiProperty({
    description: 'adminUsername',
    example: ''
  })
  adminUsername: string

  @ApiProperty({
    description: 'api name',
    example: ''
  })
  apiName: string

  @ApiProperty({
    description: 'created start at',
    example: ''
  })
  createdStartAt: string

  @ApiProperty({
    description: 'created end at',
    example: ''
  })
  createdEndAt: string

  @ApiProperty({
    description: 'limit',
    example: ''
  })
  @Type(() => Number)
  limit: number
}
