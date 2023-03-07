import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/admin/'

// ANCHOR check system admin
export const checkSystemAdmin = () => {
  const url = `${rootUrl}checkSystemAdmin`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR create system admin
export const createSystemAdmin = (params: object) => {
  const url = `${rootUrl}createSystemAdmin`
  const response = axios.post<CommonResponse>(url, params)

  return response
}
