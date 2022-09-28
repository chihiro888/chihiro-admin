import axios from 'axios'
import { CommonResponse } from '../../common/interface'

const rootURL = '/api/develop/'

// ANCHOR getMethod
export const getMethod = (params: object) => {
  const url = `${rootURL}getMethod`
  const response = axios.get<CommonResponse>(url, { params: params })
  return response
}

// ANCHOR postMethod
export const postMethod = (params: object) => {
  const url = `${rootURL}postMethod`
  const response = axios.post<CommonResponse>(url, params)
  return response
}

// ANCHOR putMethod
export const putMethod = (params: object) => {
  const url = `${rootURL}putMethod`
  const response = axios.put<CommonResponse>(url, params)
  return response
}

// ANCHOR deleteMethod
export const deleteMethod = (params: object) => {
  const url = `${rootURL}deleteMethod`
  const response = axios.delete<CommonResponse>(url, { params: params })
  return response
}
