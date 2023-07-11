import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, Length } from 'class-validator'

export class LogoutDto {
  // ** Session
  userId: number
}
