import moment from 'moment'
import { Theme, toast } from 'react-toastify'
import DATE from '../../app/constants/date'

// ANCHOR pagination API
export const paginationAPI = async (
  api,
  { pagination, setPagination, search, mode, intl, page }
) => {
  try {
    const params = { page }
    search.forEach((data) => {
      if (data.render === 'datePicker') {
        const value = data.value
          ? moment(data.value).format(DATE.ONLY_DATE)
          : ''
        params[data.key] = value
      } else {
        params[data.key] = data.value
      }
    })

    const { data: response } = await api(params)
    if (response.statusCode === 200) {
      setPagination({
        ...pagination,
        totalItemsCount: response.data.totalItemsCount,
        data: response.data.data
      })
    }
  } catch (error) {
    toast.warning(intl.formatMessage({ id: error.response.data.message }), {
      theme: mode as Theme
    })
  }
}
