import { FC } from 'react'
import { IntlShape, useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { toast, Theme } from 'react-toastify'
import { useThemeMode } from '../../../_metronic/partials'

interface DevelopToastInterface {
  intl: IntlShape
  handleClickToast: () => void
}
const DevelopToastPage: FC<DevelopToastInterface> = ({
  intl,
  handleClickToast
}: DevelopToastInterface) => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <button className="btn btn-light-primary" onClick={handleClickToast}>
          <i className="bi bi-balloon fs-4 me-2"></i>
          {intl.formatMessage({ id: 'TEXT.TOAST' })}
        </button>
      </div>
    </div>
  </>
)

const DevelopToastWrapper: FC = () => {
  // hooks
  const intl = useIntl()
  const { mode } = useThemeMode()

  // handler
  const handleClickToast = () => {
    toast.info(intl.formatMessage({ id: 'TEXT.INFORMATION' }), {
      theme: mode as Theme
    })
    toast.success(intl.formatMessage({ id: 'TEXT.SUCCESS' }), {
      theme: mode as Theme
    })
    toast.warning(intl.formatMessage({ id: 'TEXT.WARNING' }), {
      theme: mode as Theme
    })
    toast.error(intl.formatMessage({ id: 'TEXT.ERROR' }), {
      theme: mode as Theme
    })
  }

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.TOAST_SAMPLE' })}
      </PageTitle>

      <DevelopToastPage intl={intl} handleClickToast={handleClickToast} />
    </>
  )
}

export { DevelopToastWrapper }
