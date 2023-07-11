import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/auth/'

// ANCHOR login
export const login = (params: object) => {
  const url = `${rootUrl}login`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR logout
export const logout = () => {
  const url = `${rootUrl}logout`
  const response = axios.delete<CommonResponse>(url)

  return response
}

// ANCHOR get admin
export const getAdmin = () => {
  const url = `${rootUrl}getAdmin`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR update password
export const updatePassword = (params: object) => {
  const url = `${rootUrl}updatePassword`
  const response = axios.put<CommonResponse>(url, params)

  return response
}
