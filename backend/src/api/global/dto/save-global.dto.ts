import { ApiProperty } from '@nestjs/swagger'

interface Global {
  key: string
  value: string
  memo: string
}
export class SaveGlobalDto {
  @ApiProperty({
    description: 'key',
    example: ''
  })
  globalList: Global[]
}
