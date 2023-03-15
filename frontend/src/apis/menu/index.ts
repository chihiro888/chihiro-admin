import axios from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/menu/'

// ANCHOR get menu list
export const getMenuList = (params?: object) => {
  const url = `${rootUrl}getMenuList`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR get menu list
export const getMenu = () => {
  const url = `${rootUrl}getMenu`
  const response = axios.get<CommonResponse>(url)

  return response
}

// ANCHOR get menu order list
export const getMenuOrderList = (params: object) => {
  const url = `${rootUrl}getMenuOrderList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR create menu
export const createMenu = (params: object) => {
  const url = `${rootUrl}createMenu`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR update menu
export const updateMenu = (params: object) => {
  const url = `${rootUrl}UpdateMenu`
  const response = axios.put<CommonResponse>(url, params)

  return response
}

// ANCHOR delete menu
export const deleteMenu = (params: object) => {
  const url = `${rootUrl}deleteMenu`
  const response = axios.delete<CommonResponse>(url, { params })

  return response
}
