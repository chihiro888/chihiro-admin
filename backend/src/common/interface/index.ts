import { HttpStatus } from '@nestjs/common'

export interface CommonResult {
  message: string
  data?: any
}

export interface Pagination {
  count: number
  data: any[]
}
