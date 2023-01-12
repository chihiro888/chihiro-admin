import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/dashboard/'

// ANCHOR get admin count
export const getAdminCount = () => {
  const url = `${rootUrl}getAdminCount`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR get login history count
export const getLoginHistoryCount = () => {
  const url = `${rootUrl}getLoginHistoryCount`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR get image count
export const getImageCount = () => {
  const url = `${rootUrl}getImageCount`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR get setting count
export const getSettingCount = () => {
  const url = `${rootUrl}getSettingCount`
  const response = axios.get<CommonResponse>(url)

  return response
}
