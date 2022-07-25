import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const AccountSettingsPage: FC = () => <>AccountSettings</>

const AccountSettingsWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.ACCOUNT.SETTINGS' })}
      </PageTitle>
      <AccountSettingsPage />
    </>
  )
}

export { AccountSettingsWrapper }
