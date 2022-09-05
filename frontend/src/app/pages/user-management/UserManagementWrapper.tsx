import { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import Pagination from 'react-js-pagination'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import DATE from '../../constants/date'
import ko from 'date-fns/locale/ko'
import ja from 'date-fns/locale/ja'
import en from 'date-fns/locale/en-US'
import { useLang } from '../../../_metronic/i18n/Metronici18n'
import { userListPagination } from '../../../api/user'
import { Theme, toast } from 'react-toastify'
import { useThemeMode } from '../../../_metronic/partials'

const UserManagementPage = ({
  intl,
  search,
  pagination,
  selectBoxAdmin,
  selectBoxDeveloper,
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
              <label htmlFor="account">
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
              <label htmlFor="username">
                {intl.formatMessage({ id: 'Username' })}
              </label>
              <input
                type="text"
                className="form-control mt-3"
                id="username"
                value={search.username}
                onChange={(e) => handleChangeSearch('username', e)}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="isAdmin">
                {intl.formatMessage({ id: 'Administrator authority' })}
              </label>
              <select
                className="form-select mt-3"
                onChange={(e) => handleChangeSearch('isAdmin', e)}
              >
                <option value="">
                  ----- {intl.formatMessage({ id: 'Select Item' })} -----
                </option>
                {selectBoxAdmin.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="isDeveloper">
                {intl.formatMessage({ id: 'Developer authority' })}
              </label>
              <select
                className="form-select mt-3"
                onChange={(e) => handleChangeSearch('isDeveloper', e)}
              >
                <option value="">
                  ----- {intl.formatMessage({ id: 'Select Item' })} -----
                </option>
                {selectBoxDeveloper.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
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
                <th scope="col">{intl.formatMessage({ id: 'Account' })}</th>
                <th scope="col">{intl.formatMessage({ id: 'Username' })}</th>
                <th scope="col">
                  {intl.formatMessage({ id: 'Administrator authority' })}
                </th>
                <th scope="col">
                  {intl.formatMessage({ id: 'Developer authority' })}
                </th>
                <th scope="col">
                  {intl.formatMessage({ id: 'SignIn date and time' })}
                </th>
                <th scope="col">
                  {intl.formatMessage({ id: 'SignOut date and time' })}
                </th>
                <th scope="col">
                  {intl.formatMessage({ id: 'Date and time of creation' })}
                </th>
                <th scope="col">
                  {intl.formatMessage({ id: 'Date and time of update' })}
                </th>
              </tr>
            </thead>
            <tbody>
              {pagination.data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <th>{item.id}</th>
                    <th>{item.account}</th>
                    <th>{item.username}</th>
                    <th>{item.isAdmin}</th>
                    <th>{item.isDeveloper}</th>
                    <th>
                      {item.signInAt
                        ? moment(item.signInAt).format('YYYY-MM-DD HH:mm:ss')
                        : ''}
                    </th>
                    <th>
                      {item.signOutAt
                        ? moment(item.signOutAt).format('YYYY-MM-DD HH:mm:ss')
                        : ''}
                    </th>
                    <th>
                      {item.createdAt
                        ? moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')
                        : ''}
                    </th>
                    <th>
                      {item.updatedAt
                        ? moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')
                        : ''}
                    </th>
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

const UserManagementWrapper: FC = () => {
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
    account: '',
    username: '',
    isAdmin: '',
    isDeveloper: '',
    createdAt: ''
  })

  // state - admin
  const [selectBoxAdmin, setSelectBoxAdmin] = useState([])

  // state - developer
  const [selectBoxDeveloper, setSelectBoxDeveloper] = useState([])

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
        account: search.account,
        username: search.username,
        isAdmin: search.isAdmin,
        isDeveloper: search.isDeveloper,
        createdAt: createdAt
      }
      const { data: response } = await userListPagination(params)
      if (response.statusCode === 200) {
        setPagination({
          ...pagination,
          totalItemsCount: response.data.userTotalCount,
          data: response.data.userList
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
    const createdAt = search.createdAt
      ? moment(search.createdAt).format(DATE.ONLY_DATE)
      : ''

    // set table
    try {
      const params = {
        page: 1,
        id: search.id,
        account: search.account,
        username: search.username,
        isAdmin: search.isAdmin,
        isDeveloper: search.isDeveloper,
        createdAt: createdAt
      }
      const { data: response } = await userListPagination(params)
      if (response.statusCode === 200) {
        setPagination({
          ...pagination,
          totalItemsCount: response.data.userTotalCount,
          data: response.data.userList
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
    } else if (type === 'account') {
      setSearch({ ...search, account: data.target.value })
    } else if (type === 'username') {
      setSearch({ ...search, username: data.target.value })
    } else if (type === 'isAdmin') {
      setSearch({ ...search, isAdmin: data.target.value })
    } else if (type === 'isDeveloper') {
      setSearch({ ...search, isDeveloper: data.target.value })
    } else if (type === 'createdAt') {
      setSearch({ ...search, createdAt: data })
    }
  }

  // init data
  const initData = async () => {
    // set select box data
    const isAdminData = [
      { label: intl.formatMessage({ id: 'User' }), value: 0 },
      { label: intl.formatMessage({ id: 'Admin' }), value: 1 }
    ]

    const isDeveloperData = [
      { label: intl.formatMessage({ id: 'User' }), value: 0 },
      { label: intl.formatMessage({ id: 'Developer' }), value: 1 }
    ]

    setSelectBoxAdmin(isAdminData)
    setSelectBoxDeveloper(isDeveloperData)

    // set table
    try {
      const createdAt = search.createdAt
        ? moment(search.createdAt).format(DATE.ONLY_DATE)
        : ''

      const params = {
        page: pagination.activePage,
        id: search.id,
        account: search.account,
        username: search.username,
        isAdmin: search.isAdmin,
        isDeveloper: search.isDeveloper,
        createdAt: createdAt
      }
      const { data: response } = await userListPagination(params)
      if (response.statusCode === 200) {
        setPagination({
          ...pagination,
          totalItemsCount: response.data.userTotalCount,
          data: response.data.userList
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.USER.USER_MANAGEMENT' })}
      </PageTitle>

      <UserManagementPage
        intl={intl}
        search={search}
        pagination={pagination}
        selectBoxAdmin={selectBoxAdmin}
        selectBoxDeveloper={selectBoxDeveloper}
        handleChangePage={handleChangePage}
        handleClickSearch={handleClickSearch}
        handleChangeSearch={handleChangeSearch}
      />
    </>
  )
}

export { UserManagementWrapper }
