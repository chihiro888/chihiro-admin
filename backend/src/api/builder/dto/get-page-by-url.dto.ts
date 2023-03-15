import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class GetPageByUrlDto {
  @ApiProperty({
    description: 'url',
    example: 'userList'
  })
  @IsNotEmpty()
  url: string
}
