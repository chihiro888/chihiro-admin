export const getPaginationCount = (count: number) => {
  return parseInt(String(count / 12)) + 1
}

export const getParamsFromForm = (form) => {
  const params = {}
  form.map((item) => {
    params[item.key] = item.value
  })

  return params
}
