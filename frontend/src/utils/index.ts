export const getPaginationCount = (count: number) => {
  return parseInt(String(count / 12)) + 1
}

export const getParamsFromForm = (form) => {
  const params = {}
  for (let i = 0; i < form.length; i++) {
    const item = form[i]
    params[item.key] = item.value
  }

  return params
}

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
