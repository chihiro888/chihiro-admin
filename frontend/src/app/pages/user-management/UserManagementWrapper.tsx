import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const UserManagementPage: FC = () => <>UserManagement</>

const UserManagementWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.USER.USER_MANAGEMENT' })}
      </PageTitle>
      <UserManagementPage />
    </>
  )
}

export { UserManagementWrapper }
