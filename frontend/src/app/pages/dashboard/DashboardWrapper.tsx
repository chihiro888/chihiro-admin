import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DashboardPage: FC = () => <>sample</>

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DASHBOARD' })}
      </PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
