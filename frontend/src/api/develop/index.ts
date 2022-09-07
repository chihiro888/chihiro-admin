import axios from 'axios'
import { CommonResponse } from '../../common/interface'

export const axiosGET = (params: object) => {
  const url = '/api/develop/getMethod'
  const response = axios.get<CommonResponse>(url, { params: params })
  return response
}

export const axiosPOST = (params: object) => {
  const url = '/api/develop/postMethod'
  const response = axios.post<CommonResponse>(url, params)
  return response
}

export const axiosPUT = (params: object) => {
  const url = '/api/develop/putMethod'
  const response = axios.put<CommonResponse>(url, params)
  return response
}

export const axiosDELETE = (params: object) => {
  const url = '/api/develop/deleteMethod'
  const response = axios.delete<CommonResponse>(url, { params: params })
  return response
}
