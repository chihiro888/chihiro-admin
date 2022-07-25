import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DevelopReactStatePage: FC = () => (
  <>
    <div className="card card-custom">
      <div className="card-body">React State Sample</div>
    </div>
  </>
)

const DevelopReactStateWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.REACT_STATE_SAMPLE' })}
      </PageTitle>
      <DevelopReactStatePage />
    </>
  )
}

export { DevelopReactStateWrapper }
