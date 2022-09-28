import { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { useThemeMode } from '../../../_metronic/partials'

const DevelopTemplatePage = ({}) => (
  <>
    <div className="card card-custom">
      <div className="card-body">TODO</div>
    </div>
  </>
)

const DevelopTemplateWrapper: FC = () => {
  // hooks
  const intl = useIntl()
  const { mode } = useThemeMode()

  // state
  const [sample, setSample] = useState('')

  // handler
  const handleClickSample = () => {}

  // init data
  const initData = async () => {}

  // lifecycle
  useEffect(() => {
    initData()

    // unmounted
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.TEMPLATE_SAMPLE' })}
      </PageTitle>

      <DevelopTemplatePage />
    </>
  )
}

export { DevelopTemplateWrapper }
