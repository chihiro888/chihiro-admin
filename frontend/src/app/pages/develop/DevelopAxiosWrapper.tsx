import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DevelopAxiosPage: FC = () => <>Axios</>

const DevelopAxiosWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.AXIOS_SAMPLE' })}
      </PageTitle>
      <DevelopAxiosPage />
    </>
  )
}

export { DevelopAxiosWrapper }
