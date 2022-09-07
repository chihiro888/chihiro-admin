import axios from 'axios'
import { CommonResponse } from '../../common/interface'

export const executeQuery = (params: object) => {
  const url = '/api/query/executeQuery'
  const response = axios.post<CommonResponse>(url, params)
  return response
}

export const historyListPagination = (params: object) => {
  const url = '/api/query/historyListPagination'
  const response = axios.get<CommonResponse>(url, { params: params })
  return response
}
