import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/admin/'

// ANCHOR check admin
export const checkAdmin = () => {
  const url = `${rootUrl}checkAdmin`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR get admin
export const getAdmin = () => {
  const url = `${rootUrl}getAdmin`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR create admin
export const createAdmin = (params: object) => {
  const url = `${rootUrl}createAdmin`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR update password
export const updatePassword = (params: object) => {
  const url = `${rootUrl}updatePassword`
  const response = axios.put<CommonResponse>(url, params)

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
