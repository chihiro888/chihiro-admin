import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const QueryHistoryPage: FC = () => <>query history</>

const QueryHistoryWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.QUERY.QUERY_HISTORY' })}
      </PageTitle>
      <QueryHistoryPage />
    </>
  )
}

export { QueryHistoryWrapper }
