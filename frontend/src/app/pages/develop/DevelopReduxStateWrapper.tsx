import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DevelopReduxStatePage: FC = () => (
  <>
    <div className="card card-custom">
      <div className="card-body">Redux State Sample</div>
    </div>
  </>
)

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
