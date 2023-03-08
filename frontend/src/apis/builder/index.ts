import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/builder/'

// ANCHOR get page list
export const getPageList = (params: object) => {
  const url = `${rootUrl}getPageList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}
