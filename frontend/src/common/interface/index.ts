import { IntlShape } from 'react-intl'
import { ThemeModeType } from '../../_metronic/partials'

export interface CommonResponse {
  statusCode: number
  message: string
  data: any
}

export interface HeaderInterface {
  label: string
}

export interface OptionInterface {
  label: string
  value: number | string
}

export interface SearchInterface {
  render: string
  label: string
  key: string
  item?: OptionInterface[]
  value: string
}

export interface PaginationInterface {
  itemsCountPerPage: number
  pageRangeDisplayed: number
  totalItemsCount: number
  activePage: number
  data: any[]
}

export interface PackInterface {
  intl: IntlShape
  mode: ThemeModeType
  search: any
  pagination: PaginationInterface
  setPagination: any
}
