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
export const getImageList = (params: object) => {
  const url = `${rootUrl}getImageList`
  const response = axios.get<CommonResponse>(url, { params: params })

  return response
}
