import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DevelopButtonPage: FC = () => <>Button</>

const DevelopButtonWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.BUTTON_SAMPLE' })}
      </PageTitle>
      <DevelopButtonPage />
    </>
  )
}

export { DevelopButtonWrapper }
