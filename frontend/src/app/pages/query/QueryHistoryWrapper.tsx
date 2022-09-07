import { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import Pagination from 'react-js-pagination'
import { historyListPagination } from '../../../api/query'
import { Theme, toast } from 'react-toastify'
import { useThemeMode } from '../../../_metronic/partials'
import { useLang } from '../../../_metronic/i18n/Metronici18n'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import moment from 'moment'
import DATE from '../../constants/date'
import ko from 'date-fns/locale/ko'
import ja from 'date-fns/locale/ja'
import en from 'date-fns/locale/en-US'

const QueryHistoryPage = ({
  intl,
  search,
  pagination,
  selectBoxType,
  handleChangePage,
  handleClickSearch,
  handleChangeSearch
}) => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="sample1">
                {intl.formatMessage({ id: 'ID' })}
              </label>
              <input
                type="text"
                className="form-control mt-3"
                id="id"
                value={search.id}
                onChange={(e) => handleChangeSearch('id', e)}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="type">
                {intl.formatMessage({ id: 'Query Type' })}
              </label>
              <select
                className="form-select mt-3"
                onChange={(e) => handleChangeSearch('type', e)}
              >
                <option value="">
                  ----- {intl.formatMessage({ id: 'Select Item' })} -----
                </option>
                {selectBoxType.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="sample1">
                {intl.formatMessage({ id: 'Account' })}
              </label>
              <input
                type="text"
                className="form-control mt-3"
                id="account"
                value={search.account}
                onChange={(e) => handleChangeSearch('account', e)}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="createdAt">
                {intl.formatMessage({ id: 'Date and time of creation' })}
              </label>
              <DatePicker
                className="form-control mt-3"
                dateFormat="yyyy-MM-dd"
                selected={search.createdAt}
                onChange={(date: Date) => handleChangeSearch('createdAt', date)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="card card-custom mt-5">
      <div className="card-body">
        <div className="c-tar">
          <button className="btn btn-light-primary" onClick={handleClickSearch}>
            <i className="bi bi-search fs-4 me-2"></i>
            {intl.formatMessage({ id: 'Search' })}
          </button>
        </div>
      </div>
    </div>

    <div className="card card-custom mt-5">
      <div className="card-body pd-0">
        <div className="table-responsive">
          <table className="table table-rounded table-striped border gy-7 gs-7">
            <thead>
              <tr>
                <th scope="col">{intl.formatMessage({ id: 'ID' })}</th>
                <th scope="col">{intl.formatMessage({ id: 'Query Type' })}</th>
                <th scope="col">
                  {intl.formatMessage({ id: 'Query executed' })}
                </th>
                <th scope="col">
                  {intl.formatMessage({ id: 'Success Count' })}
                </th>
                <th scope="col">{intl.formatMessage({ id: 'Fail Count' })}</th>
                <th scope="col">{intl.formatMessage({ id: 'Account' })}</th>
                <th scope="col">{intl.formatMessage({ id: 'IP Address' })}</th>
                <th scope="col">
                  {intl.formatMessage({ id: 'Date and time of creation' })}
                </th>
              </tr>
            </thead>
            <tbody>
              {pagination.data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <th>{item.id}</th>
                    <td>{item.type}</td>
                    <td>{item.execQuery}</td>
                    <td>{item.successCnt}</td>
                    <td>{item.failCnt}</td>
                    <td>{item.account}</td>
                    <td>{item.ipAddress}</td>
                    <td>
                      {item.createdAt
                        ? moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')
                        : ''}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="mt-5">
      <Pagination
        activePage={pagination.activePage}
        itemsCountPerPage={pagination.itemsCountPerPage}
        totalItemsCount={pagination.totalItemsCount}
        pageRangeDisplayed={pagination.pageRangeDisplayed}
        onChange={handleChangePage}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  </>
)

const QueryHistoryWrapper: FC = () => {
  // hooks
  const intl = useIntl()
  const locale = useLang()
  const { mode } = useThemeMode()

  // state - pagination
  const [pagination, setPagination] = useState({
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    totalItemsCount: 0,
    activePage: 1,
    data: []
  })

  // state - search
  const [search, setSearch] = useState({
    id: '',
    type: '',
    account: '',
    createdAt: ''
  })

  // state - select box
  const [selectBoxType, setSelectBoxType] = useState([])

  // handler - change page
  const handleChangePage = async (pageNumber: number) => {
    const createdAt = search.createdAt
      ? moment(search.createdAt).format(DATE.ONLY_DATE)
      : ''

    // change paging
    setPagination({ ...pagination, activePage: pageNumber })

    // set table
    try {
      const params = {
        page: pageNumber,
        id: search.id,
        type: search.type,
        account: search.account,
        createdAt: createdAt
      }

      const { data: response } = await historyListPagination(params)
      if (response.statusCode === 200) {
        setPagination({
          ...pagination,
          totalItemsCount: response.data.historyTotalCount,
          data: response.data.historyList
        })
      }
    } catch (error) {
      toast.warning(intl.formatMessage({ id: error.response.data.message }), {
        theme: mode as Theme
      })
    }
  }

  // handler - click search
  const handleClickSearch = async () => {
    try {
      const params = {
        page: 1,
        id: search.id,
        type: search.type,
        account: search.account,
        createdAt: search.createdAt
      }
      const { data: response } = await historyListPagination(params)
      if (response.statusCode === 200) {
        setPagination({
          ...pagination,
          totalItemsCount: response.data.historyTotalCount,
          data: response.data.historyList
        })
      }
    } catch (error) {
      toast.warning(intl.formatMessage({ id: error.response.data.message }), {
        theme: mode as Theme
      })
    }
  }

  // handler - change search
  const handleChangeSearch = (type: string, data: any) => {
    if (type === 'id') {
      setSearch({ ...search, id: data.target.value })
    } else if (type === 'type') {
      setSearch({ ...search, type: data.target.value })
    } else if (type === 'account') {
      setSearch({ ...search, account: data.target.value })
    } else if (type === 'createdAt') {
      setSearch({ ...search, createdAt: data })
    }
  }

  // init data
  const initData = async () => {
    // set select box data
    const typeData = [
      { label: intl.formatMessage({ id: 'Insert' }), value: 'INS' },
      { label: intl.formatMessage({ id: 'Select' }), value: 'SEL' },
      { label: intl.formatMessage({ id: 'Update' }), value: 'UPD' },
      { label: intl.formatMessage({ id: 'Delete' }), value: 'DEL' },
      { label: intl.formatMessage({ id: 'ETC' }), value: 'ETC' },
      { label: intl.formatMessage({ id: 'Error' }), value: 'ERR' }
    ]
    setSelectBoxType(typeData)

    // set table
    try {
      const createdAt = search.createdAt
        ? moment(search.createdAt).format(DATE.ONLY_DATE)
        : ''

      const params = {
        page: pagination.activePage,
        id: search.id,
        type: search.type,
        account: search.account,
        createdAt: createdAt
      }
      const { data: response } = await historyListPagination(params)
      if (response.statusCode === 200) {
        setPagination({
          ...pagination,
          totalItemsCount: response.data.historyTotalCount,
          data: response.data.historyList
        })
      }
    } catch (error) {
      toast.warning(intl.formatMessage({ id: error.response.data.message }), {
        theme: mode as Theme
      })
    }
  }

  // lifecycle
  useEffect(() => {
    initData()

    // init load lang
    registerLocale('ko', ko)
    registerLocale('ja', ja)
    registerLocale('en', en)

    // change datePicker Lang
    setDefaultLocale(locale)

    // unmounted
    return () => {}
  }, [])

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.QUERY.QUERY_HISTORY' })}
      </PageTitle>

      <QueryHistoryPage
        intl={intl}
        search={search}
        pagination={pagination}
        selectBoxType={selectBoxType}
        handleChangePage={handleChangePage}
        handleClickSearch={handleClickSearch}
        handleChangeSearch={handleChangeSearch}
      />
    </>
  )
}

export { QueryHistoryWrapper }
