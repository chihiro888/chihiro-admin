import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DevelopReduxStatePage: FC = () => <>ReduxState</>

const DevelopReduxStateWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.REDUX_STATE_SAMPLE' })}
      </PageTitle>
      <DevelopReduxStatePage />
    </>
  )
}

export { DevelopReduxStateWrapper }
