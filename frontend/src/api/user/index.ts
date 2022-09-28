import axios from 'axios'
import { CommonResponse } from '../../common/interface'

const rootUrl = '/api/user/'

// ANCHOR account
export const account = () => {
  const url = `${rootUrl}account`
  const response = axios.get<CommonResponse>(url)
  return response
}

// ANCHOR change password
export const changePassword = (params: object) => {
  const url = `${rootUrl}changePassword`
  const response = axios.put<CommonResponse>(url, params)
  return response
}

// ANCHOR user list pagination
export const userListPagination = (params: object) => {
  const url = `${rootUrl}userListPagination`
  const response = axios.get<CommonResponse>(url, { params: params })
  return response
}
