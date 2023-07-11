import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/admin/'

// ANCHOR check system admin
export const checkSystemAdmin = () => {
  const url = `${rootUrl}checkSystemAdmin`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR create system admin
export const createSystemAdmin = (params: object) => {
  const url = `${rootUrl}createSystemAdmin`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

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

// ANCHOR get admin by session
export const getAdminBySession = () => {
  const url = `${rootUrl}getAdminBySession`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR update password
export const updatePassword = (params: object) => {
  const url = `${rootUrl}updatePassword`
  const response = axios.put<CommonResponse>(url, params)

  return response
}
