import { useIntl } from 'react-intl'
import Pagination from 'react-js-pagination'

const Table = ({ header, pagination, handleChangePage, Content }) => {
  // hooks
  const intl = useIntl()

  return (
    <>
      <div className="card card-custom mt-5">
        <div className="card-body pd-0">
          <div className="table-responsive">
            <table className="table table-rounded table-striped border gy-7 gs-7">
              <thead>
                <tr>
                  {header.map((data, idx) => {
                    return (
                      <th scope="col" key={idx}>
                        {intl.formatMessage({ id: data.label })}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {pagination.data.map((item, idx) => {
                  return <Content item={item} idx={idx} />
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
}

export default Table
