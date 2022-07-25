import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DevelopReactStatePage: FC = () => <>ReactState</>

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
