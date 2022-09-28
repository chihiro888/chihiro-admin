import axios from 'axios'
import { CommonResponse } from '../../common/interface'

const rootURL = '/api/query/'

// ANCHOR execute query
export const executeQuery = (params: object) => {
  const url = `${rootURL}executeQuery`
  const response = axios.post<CommonResponse>(url, params)
  return response
}

// ANCHOR history list pagination
export const historyListPagination = (params: object) => {
  const url = `${rootURL}historyListPagination`
  const response = axios.get<CommonResponse>(url, { params: params })
  return response
}
