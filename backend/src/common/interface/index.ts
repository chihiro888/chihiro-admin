import { HttpStatus } from '@nestjs/common'

export interface Result {
  statusCode: HttpStatus
  message: string
  data?: any
}

export interface Pagination {
  count: number
  data: any[]
}
