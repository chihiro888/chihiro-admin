import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

/*
  bootstrap icon
  https://icons.getbootstrap.com/
*/
const DevelopButtonPage: FC = () => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <div>
          <button className="btn btn-light-primary">
            <i className="bi bi-search fs-4 me-2"></i>Search
          </button>
        </div>
        <div className="mt-3">
          <button className="btn btn-light-success">
            <i className="bi bi-plus fs-4 me-2"></i>Add
          </button>
        </div>
        <div className="mt-3">
          <button className="btn btn-light-success">
            <i className="bi bi-check fs-4 me-2"></i>Add
          </button>
        </div>
        <div className="mt-3">
          <button className="btn btn-light-danger">
            <i className="bi bi-trash fs-4 me-2"></i>Delete
          </button>
        </div>
        <div className="mt-3">
          <button className="btn btn-light-primary">
            <i className="bi bi-pencil-square fs-4 me-2"></i>Update
          </button>
        </div>
        <div className="mt-3">
          <button className="btn btn-light-primary">
            <i className="bi bi-check fs-4 me-2"></i>Update
          </button>
        </div>
      </div>
    </div>
  </>
)

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
