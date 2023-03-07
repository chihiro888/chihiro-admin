import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty } from 'class-validator'

enum Level {
  SystemAdmin = 'SA',
  Admin = 'A'
}

export class UpdateUserLevelDto {
  @ApiProperty({
    description: 'user id',
    example: 1
  })
  @IsNotEmpty()
  id: number

  @ApiProperty({
    description: 'level',
    example: 'SA'
  })
  @IsEnum(Level)
  level: string
}
