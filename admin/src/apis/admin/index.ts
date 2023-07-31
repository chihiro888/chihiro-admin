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

// ANCHOR get admin list
export const getAdminList = (params: object) => {
  const url = `${rootUrl}getAdminList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get admin
export const getAdmin = (params: object) => {
  const url = `${rootUrl}getAdmin`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR create admin
export const createAdmin = (params: object) => {
  const url = `${rootUrl}createAdmin`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR delete admin
export const deleteAdmin = (params: object) => {
  const url = `${rootUrl}deleteAdmin`
  const response = axios.delete<CommonResponse>(url, { params })

  return response
}

// ANCHOR update admin password
export const updateAdminPassword = (params: object) => {
  const url = `${rootUrl}updateAdminPassword`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin username
export const updateAdminUsername = (params: object) => {
  const url = `${rootUrl}updateAdminUsername`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin profile
export const updateAdminProfile = (params: object) => {
  const url = `${rootUrl}updateAdminProfile`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin intro
export const updateAdminIntro = (params: object) => {
  const url = `${rootUrl}updateAdminIntro`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin role
export const updateAdminRole = (params: object) => {
  const url = `${rootUrl}updateAdminRole`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR get login history list
export const getLoginHistoryList = (params: object) => {
  const url = `${rootUrl}getLoginHistoryList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get login history
export const getLoginHistory = (params: object) => {
  const url = `${rootUrl}getLoginHistory`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}
