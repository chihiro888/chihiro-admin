import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import SWAGGER from 'src/common/constants/swagger'
import { UserService } from './user.service'

// ANCHOR user controller
@ApiTags(SWAGGER.USER.TAG)
@Controller(SWAGGER.USER.URL)
export class UserController {
  constructor(private userService: UserService) {}
}
