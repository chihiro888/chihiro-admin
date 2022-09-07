import {
  Body,
  Query,
  Controller,
  HttpStatus,
  Post,
  Get,
  Res,
  Session,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import SWAGGER from 'src/common/constants/swagger'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { ExecuteQueryDto } from './dto/execute-query.dto'
import { QueryHistoryDto } from './dto/query-history.dto'
import { QueryService } from './query.service'
import { RealIP } from 'nestjs-real-ip'

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
    @Body() dto: ExecuteQueryDto,
    @RealIP() ipAddress: string
  ) {
    // get user id from session
    const userId = session.userId

    // inject user id
    dto.userId = userId
    dto.ipAddress = ipAddress

    // execute query
    const result = await this.queryService.executeQuery(dto)

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

  // ANCHOR history list pagination
  @ApiOperation({
    summary: SWAGGER.QUERY.HISTORY_LIST_PAGINATION.SUMMARY,
    description: SWAGGER.QUERY.HISTORY_LIST_PAGINATION.DESC
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.QUERY.HISTORY_LIST_PAGINATION.RES.OK
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: SWAGGER.QUERY.HISTORY_LIST_PAGINATION.RES.UNAUTHORIZED
  })
  @UseGuards(AuthGuard)
  @Get(SWAGGER.QUERY.HISTORY_LIST_PAGINATION.URL)
  async historyListPagination(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: QueryHistoryDto
  ) {
    // get user id from session
    const userId = session.userId

    // inject user id
    dto.userId = userId

    // history list pagination
    const historyList = await this.queryService.historyListPagination(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: SWAGGER.QUERY.HISTORY_LIST_PAGINATION.MSG.OK,
      data: historyList
    })
  }
}
