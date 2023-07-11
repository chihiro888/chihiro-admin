import axios, { AxiosResponse } from 'axios'
import { CommonResponse } from 'src/common/interface'

const rootUrl = '/api/excel/'

// ANCHOR get query list
export const getQueryList = (params: object) => {
  const url = `${rootUrl}getQueryList`
  const response = axios.get<CommonResponse>(url, { params })

  return response
}

// ANCHOR create
export const create = (params) => {
  const url = `${rootUrl}create`
  const response = axios.post<CommonResponse>(url, params)

  return response
}

// ANCHOR delete
export const deleteExcel = (params) => {
  const url = `${rootUrl}deleteExcel`
  const response = axios.delete<CommonResponse>(url, {
    responseType: 'blob',
    params
  })

  return response
}

// ANCHOR download Excel file
export const downloadFile = async (params) => {
  const url = `${rootUrl}downloadExcel`
  const response: AxiosResponse<Blob> = await axios.get(url, {
    responseType: 'blob',
    params
  })

  if (!response) {
    throw new Error('HTTP error ')
  }

  const path = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement('a')
  link.href = path // pathに修正
  const contentDisposition = response.headers['content-disposition']
  let fileName = 'unknown'

  if (contentDisposition) {
    const fileNameMatch = contentDisposition.match(
      /filename=["']?([^'"\s]+)["']?/
    )

    if (fileNameMatch && fileNameMatch.length === 2) {
      // fileNameMatchがnullまたはundefinedでないことを追加
      fileName = fileNameMatch[1]
    }
  }

  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.URL.revokeObjectURL(path)
}
