export interface Result {
  result: boolean
  message: string
  data?: any
}

export interface Pagination {
  count: number
  data: any[]
}
