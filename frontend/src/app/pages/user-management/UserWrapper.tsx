import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const UserPage: FC = () => <>user</>

const UserWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.USER_MANAGEMENT' })}
      </PageTitle>
      <UserPage />
    </>
  )
}

export { UserWrapper }
