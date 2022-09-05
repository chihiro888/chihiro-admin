import { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { Theme, toast } from 'react-toastify'
import { executeQuery } from '../../../api/query'
import { PageTitle } from '../../../_metronic/layout/core'
import { useThemeMode } from '../../../_metronic/partials'

const QueryExecutePage = ({
  intl,
  query,
  handleChangeQuery,
  handleClickRunSQL
}) => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <label className="form-label">SQL Statement</label>
        <textarea
          className="form-control mt-3"
          rows={15}
          value={query}
          onChange={handleChangeQuery}
        ></textarea>
        <div className="mt-5 c-tar">
          <button className="btn btn-light-primary" onClick={handleClickRunSQL}>
            Run SQL
          </button>
        </div>
      </div>
    </div>
  </>
)

const QueryExecuteWrapper: FC = () => {
  // hooks
  const intl = useIntl()
  const { mode } = useThemeMode()

  // state
  const [query, setQuery] = useState('')

  // handler
  const handleChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  // handler
  const handleClickRunSQL = async () => {
    try {
      const params = {
        query: query
      }
      const { data: response } = await executeQuery(params)
      if (response.statusCode === 200) {
        //
      }
    } catch (error) {
      toast.warning(intl.formatMessage({ id: error.response.data.message }), {
        theme: mode as Theme
      })
    }
  }

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.QUERY.QUERY_EXECUTE' })}
      </PageTitle>
      <QueryExecutePage
        intl={intl}
        query={query}
        handleChangeQuery={handleChangeQuery}
        handleClickRunSQL={handleClickRunSQL}
      />
    </>
  )
}

export { QueryExecuteWrapper }
