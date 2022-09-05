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

const UserManagementPage = ({
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
              <label htmlFor="sample1">번호</label>
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
              <label htmlFor="account">계정</label>
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
              <label htmlFor="username">사용자명</label>
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
              <label htmlFor="isAdmin">관리자여부</label>
              <select
                className="form-select mt-3"
                onChange={(e) => handleChangeSearch('isAdmin', e)}
              >
                <option value="">----- select item -----</option>
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
              <label htmlFor="isDeveloper">개발자여부</label>
              <select
                className="form-select mt-3"
                onChange={(e) => handleChangeSearch('isDeveloper', e)}
              >
                <option value="">----- select item -----</option>
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
              <label htmlFor="createdAt">등록일시</label>
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
            <i className="bi bi-search fs-4 me-2"></i>Search
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
                <th scope="col">번호</th>
                <th scope="col">계정</th>
                <th scope="col">사용자명</th>
                <th scope="col">관리자권한</th>
                <th scope="col">개발자권환</th>
                <th scope="col">로그인일시</th>
                <th scope="col">로그아웃일시</th>
                <th scope="col">생성일시</th>
                <th scope="col">수정일시</th>
              </tr>
            </thead>
            <tbody>
              {pagination.data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <th>{item.no}</th>
                    <th>{item.no}</th>
                    <th>{item.no}</th>
                    <th>{item.no}</th>
                    <th>{item.no}</th>
                    <th>{item.no}</th>
                    <th>{item.no}</th>
                    <th>{item.no}</th>
                    <th>{item.no}</th>
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
  const handleChangePage = (pageNumber) => {
    // TODO connection api
    setPagination({ ...pagination, activePage: pageNumber })
  }

  // handler - click search
  const handleClickSearch = () => {
    const createdAt = moment(search.createdAt).format(DATE.ONLY_DATE)
    console.log(`search.id : ${search.id}`)
    console.log(`search.account : ${search.account}`)
    console.log(`search.username : ${search.username}`)
    console.log(`search.isAdmin : ${search.isAdmin}`)
    console.log(`search.isDeveloper : ${search.isDeveloper}`)
    console.log(`search.createdAt : ${createdAt}`)
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
    const isAdminData = [
      { label: 'User', value: 0 },
      { label: 'Admin', value: 1 }
    ]

    const isDeveloperData = [
      { label: 'User', value: 0 },
      { label: 'Developer', value: 1 }
    ]

    setSelectBoxAdmin(isAdminData)
    setSelectBoxDeveloper(isDeveloperData)

    // TODO connect api
    const dummyTotalItemsCount = 3

    // TODO connect api
    const dummyPaginationData = [
      { no: 1, firstName: 'Allen', lastName: 'Brown', gender: 'M' },
      { no: 2, firstName: 'Joann', lastName: 'Osinski', gender: 'M' },
      { no: 3, firstName: 'Alfonso', lastName: 'Beer', gender: 'M' }
    ]

    setPagination({
      ...pagination,
      totalItemsCount: dummyTotalItemsCount,
      data: dummyPaginationData
    })
  }

  // lifecycle
  useEffect(() => {
    initData()

    // unmounted
    return () => {}
  }, [])

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.USER.USER_MANAGEMENT' })}
      </PageTitle>

      <UserManagementPage
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
