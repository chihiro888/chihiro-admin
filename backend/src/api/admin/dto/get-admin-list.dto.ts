import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class GetAdminListDto {
  @ApiProperty({
    description: 'page',
    example: 1
  })
  @IsNotEmpty()
  page: number
}
