import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/image/'

// ANCHOR upload
export const upload = (params) => {
  const url = `${rootUrl}upload`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR get list
export const getList = (params: object) => {
  const url = `${rootUrl}getList`
  const response = axios.get<CommonResponse>(url, { params: params })

  return response
}
