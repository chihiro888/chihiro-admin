import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/action/'

// ANCHOR get action list
export const getActionList = (params: object) => {
  const url = `${rootUrl}getActionList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}
