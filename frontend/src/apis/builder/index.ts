import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/builder/'

// ANCHOR get page list
export const getPageList = (params: object) => {
  const url = `${rootUrl}getPageList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR get page
export const getPage = (params: object) => {
  const url = `${rootUrl}getPage`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR create page
export const createPage = (params: object) => {
  const url = `${rootUrl}createPage`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR update page
export const updatePage = (params: object) => {
  const url = `${rootUrl}updatePage`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR delete page
export const deletePage = (params: object) => {
  const url = `${rootUrl}deletePage`
  const response = axios.delete<CommonResponse>(url, { params })

  return response
}
