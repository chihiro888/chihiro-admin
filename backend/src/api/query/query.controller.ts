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
    let result = await this.queryService.executeQuery(dto)

    // check exec
    const execResult = result.errno ? true : false
    // register history
    result = await this.queryService.registerHistoryForExecuteQuery(
      dto,
      execResult,
      userId,
      // TODO
      'ip_address'
    )

    if (result.errno) {
      // return 200 response
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: SWAGGER.QUERY.EXECUTE_QUERY.MSG.OK_ERROR,
        data: {
          queryResultHeader: [],
          queryResultData: [],
          affectedRows: 0,
          error: {
            errno: result.errno,
            code: result.code,
            sqlState: result.sqlState,
            message: result.message
          }
        }
      })
    }

    let queryResultHeader = []
    if (result.length > 0) {
      queryResultHeader = Object.keys(result[0])
      // return 200 response
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: SWAGGER.QUERY.EXECUTE_QUERY.MSG.OK,
        data: {
          queryResultHeader,
          queryResultData: result,
          affectedRows: 0
        }
      })
    }

    if (result.affectedRows) {
      // return 200 response
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: SWAGGER.QUERY.EXECUTE_QUERY.MSG.OK,
        data: {
          queryResultHeader: [],
          queryResultData: [],
          affectedRows: result.affectedRows
        }
      })
    }

    if (result.length === 0) {
      // return 200 response
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: SWAGGER.QUERY.EXECUTE_QUERY.MSG.OK_EMPTY,
        data: {
          queryResultHeader: [],
          queryResultData: [],
          affectedRows: 0
        }
      })
    }
  }
}
