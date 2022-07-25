import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const QueryExecuteHistoryPage: FC = () => <>query execute history</>

const QueryExecuteHistoryWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.QUERY_EXECUTE_HISTORY' })}
      </PageTitle>
      <QueryExecuteHistoryPage />
    </>
  )
}

export { QueryExecuteHistoryWrapper }
