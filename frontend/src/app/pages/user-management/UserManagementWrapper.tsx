import { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import Pagination from 'react-js-pagination'

const UserManagementPage = ({
  search,
  pagination,
  selectBox,
  handleChangePage,
  handleClickSearch,
  handleChangeSample1,
  handleChangeSample2
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
                id="sample1"
                value={search.sample1}
                onChange={handleChangeSample1}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="sample1">계정</label>
              <input
                type="text"
                className="form-control mt-3"
                id="sample1"
                value={search.sample1}
                onChange={handleChangeSample1}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="sample1">사용자명</label>
              <input
                type="text"
                className="form-control mt-3"
                id="sample1"
                value={search.sample1}
                onChange={handleChangeSample1}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="sample2">관리자여부</label>
              <select
                className="form-select mt-3"
                onChange={handleChangeSample2}
              >
                <option value="">----- select item -----</option>
                {selectBox.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="sample2">개발자여부</label>
              <select
                className="form-select mt-3"
                onChange={handleChangeSample2}
              >
                <option value="">----- select item -----</option>
                {selectBox.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label htmlFor="sample1">등록일시</label>
              <input
                type="text"
                className="form-control mt-3"
                id="sample1"
                value={search.sample1}
                onChange={handleChangeSample1}
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
    sample1: '',
    sample2: ''
  })

  // state - select box
  const [selectBox, setSelectBox] = useState([])

  // handler - change page
  const handleChangePage = (pageNumber) => {
    // TODO connection api
    setPagination({ ...pagination, activePage: pageNumber })
  }

  // handler - click search
  const handleClickSearch = () => {
    console.log(`sample1 : ${search.sample1}, sample2 : ${search.sample2}`)
  }

  // handler - change sample1
  const handleChangeSample1 = (e) => {
    setSearch({ ...search, sample1: e.target.value })
  }

  // handler - change sample2
  const handleChangeSample2 = (e) => {
    setSearch({ ...search, sample2: e.target.value })
  }

  // init data
  const initData = async () => {
    // TODO connect api
    const dummySelectBoxData = [
      { label: 'Male', value: 'M' },
      { label: 'Female', value: 'F' }
    ]

    // TODO connect api
    const dummyTotalItemsCount = 3

    // TODO connect api
    const dummyPaginationData = [
      { no: 1, firstName: 'Allen', lastName: 'Brown', gender: 'M' },
      { no: 2, firstName: 'Joann', lastName: 'Osinski', gender: 'M' },
      { no: 3, firstName: 'Alfonso', lastName: 'Beer', gender: 'M' }
    ]

    setSelectBox(dummySelectBoxData)

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
        selectBox={selectBox}
        handleChangePage={handleChangePage}
        handleClickSearch={handleClickSearch}
        handleChangeSample1={handleChangeSample1}
        handleChangeSample2={handleChangeSample2}
      />
    </>
  )
}

export { UserManagementWrapper }
