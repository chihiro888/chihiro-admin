import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DevelopTemplatePage: FC = () => <>{/* TODO */}</>

const DevelopTemplateWrapper: FC = () => {
  const intl = useIntl()
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
