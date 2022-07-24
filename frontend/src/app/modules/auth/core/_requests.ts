import axios from 'axios'
import { CommonResponse } from './_models'

export const GET_USER_BY_SESSION = `api/auth/getUserBySession`
export const LOGIN_URL = 'api/auth/signIn'

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<CommonResponse>(LOGIN_URL, {
    email,
    password
  })
}

export function getUserBySession() {
  return axios.post<CommonResponse>(GET_USER_BY_SESSION)
}
