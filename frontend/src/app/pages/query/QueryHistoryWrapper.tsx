import { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import Pagination from 'react-js-pagination'

const QueryHistoryPage = ({
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
              <label htmlFor="sample1">sample1</label>
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
              <label htmlFor="sample2">sample2</label>
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
                <th scope="col">No</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {pagination.data.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <th>{item.no}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender === 'M' ? 'Male' : 'Female'}</td>
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
        {intl.formatMessage({ id: 'MENU.QUERY.QUERY_HISTORY' })}
      </PageTitle>

      <QueryHistoryPage
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

export { QueryHistoryWrapper }
