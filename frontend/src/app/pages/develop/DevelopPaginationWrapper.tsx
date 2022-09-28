import { FC, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DevelopPaginationPage = ({}) => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <div>Please refer to the file below.</div>
      </div>
    </div>
    <div className="card card-custom mt-5">
      <div className="card-body">
        <div>
          frontend/src/app/pages/user-management/UserManagementWrapper.tsx
        </div>
      </div>
    </div>
  </>
)

const DevelopPaginationWrapper: FC = () => {
  // hooks
  const intl = useIntl()

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
        {intl.formatMessage({ id: 'MENU.DEVELOP.PAGINATION_SAMPLE' })}
      </PageTitle>

      <DevelopPaginationPage />
    </>
  )
}

export { DevelopPaginationWrapper }
