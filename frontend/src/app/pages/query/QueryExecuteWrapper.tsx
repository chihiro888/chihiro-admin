import { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { Theme, toast } from 'react-toastify'
import { executeQuery } from '../../../api/query'
import { PageTitle } from '../../../_metronic/layout/core'
import { useThemeMode } from '../../../_metronic/partials'

const QueryExecutePage = ({
  intl,
  isDisabled,
  query,
  queryResultHeader,
  queryResultData,
  affectedRows,
  error,
  handleChangeQuery,
  handleClickRunSQL
}) => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <label className="form-label">
          {intl.formatMessage({ id: 'Enter a query' })}
        </label>
        <textarea
          className="form-control mt-3"
          rows={10}
          value={query}
          onChange={handleChangeQuery}
        ></textarea>
        <div className="mt-5 c-tar">
          <button
            className="btn btn-light-primary"
            onClick={handleClickRunSQL}
            disabled={isDisabled}
          >
            {intl.formatMessage({ id: 'Run Query' })}
          </button>
        </div>
      </div>
    </div>

    {error ? (
      <>
        <div className="mt-5">
          <div className="mb-3">
            <div className="sql-label">
              {intl.formatMessage({ id: 'Error No' })}
            </div>
            <div className="sql-content">{error.errno}</div>
          </div>

          <div className="mb-3">
            <div className="sql-label">
              {intl.formatMessage({ id: 'Code' })}
            </div>
            <div className="sql-content">{error.code}</div>
          </div>

          <div className="mb-3">
            <div className="sql-label">
              {intl.formatMessage({ id: 'SQL State' })}
            </div>
            <div className="sql-content">{error.sqlState}</div>
          </div>

          <div className="mb-3">
            <div className="sql-label">
              {intl.formatMessage({ id: 'Error Message' })}
            </div>
            <div className="sql-content">{error.message}</div>
          </div>
        </div>
      </>
    ) : (
      <></>
    )}

    {affectedRows !== 0 ? (
      <>
        <div className="mt-5 c-tar">
          {intl.formatMessage({ id: 'Execution results' })} : {affectedRows}{' '}
          {intl.formatMessage({ id: 'Row' })}
        </div>
      </>
    ) : (
      <></>
    )}

    {queryResultData.length !== 0 ? (
      <>
        <div className="mt-5 c-tar">
          {intl.formatMessage({ id: 'Execution results' })} :{' '}
          {queryResultData.length} {intl.formatMessage({ id: 'Row' })}
        </div>

        <div className="card card-custom mt-5">
          <div className="card-body pd-0">
            <div className="table-responsive">
              <table className="table table-rounded table-striped border gy-7 gs-7">
                <thead>
                  <tr>
                    {queryResultHeader.map((item, idx) => {
                      return (
                        <th scope="col" key={idx}>
                          {item}
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {queryResultData.map((data, idx) => {
                    return (
                      <tr key={idx}>
                        {queryResultHeader.map((key, idx) => {
                          return <th key={idx}>{data[key]}</th>
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    ) : (
      <></>
    )}
  </>
)

const QueryExecuteWrapper: FC = () => {
  // hooks
  const intl = useIntl()
  const { mode } = useThemeMode()

  // state
  const [query, setQuery] = useState('')
  const [queryResultHeader, setQueryResultHeader] = useState([])
  const [queryResultData, setQueryResultData] = useState([])
  const [affectedRows, setAffectedRows] = useState(0)
  const [error, setError] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)

  // handler
  const handleChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  // handler
  const handleClickRunSQL = async () => {
    setIsDisabled(true)
    try {
      const params = {
        query: query
      }
      const { data: response } = await executeQuery(params)
      if (response.statusCode === 200) {
        setQueryResultHeader(response.data.queryResultHeader)
        setQueryResultData(response.data.queryResultData)
        setAffectedRows(response.data.affectedRows)
        setError(response.data?.error)
        toast.info(intl.formatMessage({ id: response.message }), {
          theme: mode as Theme
        })
      }
    } catch (error) {
      toast.warning(intl.formatMessage({ id: error.response.data.message }), {
        theme: mode as Theme
      })
    }
    setIsDisabled(false)
  }

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.QUERY.QUERY_EXECUTE' })}
      </PageTitle>
      <QueryExecutePage
        intl={intl}
        isDisabled={isDisabled}
        query={query}
        queryResultHeader={queryResultHeader}
        queryResultData={queryResultData}
        affectedRows={affectedRows}
        error={error}
        handleChangeQuery={handleChangeQuery}
        handleClickRunSQL={handleClickRunSQL}
      />
    </>
  )
}

export { QueryExecuteWrapper }
