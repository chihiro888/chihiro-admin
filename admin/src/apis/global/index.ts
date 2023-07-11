import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/global/'

// ANCHOR get global list
export const getGlobalList = () => {
  const url = `${rootUrl}getGlobalList`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR create global
export const createGlobal = (params: object) => {
  const url = `${rootUrl}createGlobal`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR save global
export const saveGlobal = (params: object) => {
  const url = `${rootUrl}saveGlobal`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR delete global
export const deleteGlobal = (params: object) => {
  const url = `${rootUrl}deleteGlobal`
  const response = axios.delete<CommonResponse>(url, { params: params })

  return response
}

// ANCHOR get app info
export const getAppInfo = () => {
  const url = `${rootUrl}getAppInfo`
  const response = axios.get<CommonResponse>(url)

  return response
}
