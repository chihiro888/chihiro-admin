import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  Session,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import SWAGGER from 'src/common/constants/swagger'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { ExecuteQueryDto } from './dto/execute-query.dto'
import { QueryService } from './query.service'

// ANCHOR query controller
@ApiTags(SWAGGER.QUERY.TAG)
@Controller(SWAGGER.QUERY.URL)
export class QueryController {
  constructor(private queryService: QueryService) {}

  // ANCHOR account API
  @ApiOperation({
    summary: SWAGGER.QUERY.EXECUTE_QUERY.SUMMARY,
    description: SWAGGER.QUERY.EXECUTE_QUERY.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.QUERY.EXECUTE_QUERY.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.QUERY.EXECUTE_QUERY.RES.UNAUTHORIZED
  })
  @UseGuards(AuthGuard)
  @Post(SWAGGER.QUERY.EXECUTE_QUERY.URL)
  async executeSQL(
    @Res() res: Response,
    @Session() session: any,
    @Body() dto: ExecuteQueryDto
  ) {
    // get user id from session
    const userId = session.userId

    // inject user id
    dto.userId = userId

    // execute query
    const result = await this.queryService.executeQuery(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.QUERY.EXECUTE_QUERY.MSG.OK,
      data: result
    })
  }
}
