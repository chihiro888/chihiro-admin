import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

// ANCHOR get login history list
export const getLoginHistoryList = (params: object) => {
  const url = `/api/user/getLoginHistoryList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}
