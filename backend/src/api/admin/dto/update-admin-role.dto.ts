import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty } from 'class-validator'

enum Role {
  SystemAdmin = 'SA',
  Admin = 'A',
  User = 'U'
}

export class UpdateAdminRoleDto {
  @ApiProperty({
    description: 'user id',
    example: 1
  })
  @IsNotEmpty()
  id: number

  @ApiProperty({
    description: 'role',
    example: 'SA'
  })
  @IsEnum(Role)
  role: string
}
