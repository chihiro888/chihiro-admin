import axios from 'axios'
import { CommonResponse } from '../../common/interface'

const rootURL = '/api/auth/'

// ANCHOR Sign In
export const signIn = (params: object) => {
  const url = `${rootURL}signIn`
  const response = axios.post<CommonResponse>(url, params)
  return response
}

// ANCHOR Get User By Session
export const getUserBySession = () => {
  const url = `${rootURL}getUserBySession`
  const response = axios.post<CommonResponse>(url)
  return response
}
