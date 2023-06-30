import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

// ANCHOR get page by url
export const getPageByUrl = (params: object) => {
  const url = `/api/builder/getPageByUrl`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get admin list
export const getAdminList = (params: object) => {
  const url = `/api/admin/getAdminList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get admin
export const getAdmin = (params: object) => {
  const url = `/api/admin/getAdmin`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR create admin
export const createAdmin = (params: object) => {
  const url = `/api/admin/createAdmin`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR delete admin
export const deleteAdmin = (params: object) => {
  const url = `/api/admin/deleteAdmin`
  const response = axios.delete<CommonResponse>(url, { params })

  return response
}

// ANCHOR update admin password
export const updateAdminPassword = (params: object) => {
  const url = `/api/admin/updateAdminPassword`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin username
export const updateUserUsername = (params: object) => {
  const url = `/api/admin/updateAdminUsername`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin role
export const updateAdminRole = (params: object) => {
  const url = `/api/admin/updateAdminRole`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin profile
export const updateAdminProfile = (params: object) => {
  const url = `/api/admin/updateAdminProfile`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update admin intro
export const updateAdminIntro = (params: object) => {
  const url = `/api/admin/updateAdminIntro`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR get login history list
export const getLoginHistoryList = (params: object) => {
  const url = `/api/admin/getLoginHistoryList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get login history
export const getLoginHistory = (params: object) => {
  const url = `/api/admin/getLoginHistory`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}
