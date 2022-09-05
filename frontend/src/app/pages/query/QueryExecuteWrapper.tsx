import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const QueryExecutePage = () => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <label className="form-label">SQL Statement</label>
        <textarea className="form-control" rows={15}></textarea>
        <div className="mt-5 custom-tar">
          <button className="btn btn-light-primary">Run SQL</button>
        </div>
      </div>
    </div>
  </>
)

const QueryExecuteWrapper: FC = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.QUERY.QUERY_EXECUTE' })}
      </PageTitle>
      <QueryExecutePage />
    </>
  )
}

export { QueryExecuteWrapper }
