import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

// ANCHOR get page by url
export const getPageByUrl = (params: object) => {
  const url = `/api/core/getPageByUrl`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get user list
export const getUserList = (params: object) => {
  const url = `/api/user/getUserList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get user detail
export const getUserDetail = (params: object) => {
  const url = `/api/user/getUserDetail`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR create user
export const createUser = (params: object) => {
  const url = `/api/user/createUser`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR delete user
export const deleteUser = (params: object) => {
  const url = `/api/user/deleteUser`
  const response = axios.delete<CommonResponse>(url, { params })

  return response
}

// ANCHOR update user password
export const updateUserPassword = (params: object) => {
  const url = `/api/user/updateUserPassword`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update user username
export const updateUserUsername = (params: object) => {
  const url = `/api/user/updateUserUsername`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update user role
export const updateUserRole = (params: object) => {
  const url = `/api/user/updateUserRole`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update user profile
export const updateUserProfile = (params: object) => {
  const url = `/api/user/updateUserProfile`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR update user intro
export const updateUserIntro = (params: object) => {
  const url = `/api/user/updateUserIntro`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR get login history list
export const getLoginHistoryList = (params: object) => {
  const url = `/api/user/getLoginHistoryList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get login history detail
export const getLoginHistoryDetail = (params: object) => {
  const url = `/api/user/getLoginHistoryDetail`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}
