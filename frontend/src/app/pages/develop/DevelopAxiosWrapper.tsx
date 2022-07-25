import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

const DevelopAxiosPage: FC = () => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <div>
          <label className="form-label">Parameter 1</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mt-5">
          <label className="form-label">Parameter 2</label>
          <input type="text" className="form-control" />
        </div>
      </div>
    </div>

    <div className="card card-custom mt-5">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <button className="btn btn-light-primary">GET Method</button>
          </div>
          <div className="col">
            <button className="btn btn-light-success">POST Method</button>
          </div>
          <div className="col">
            <button className="btn btn-light-warning">PUT Method</button>
          </div>
          <div className="col">
            <button className="btn btn-light-danger">DELETE Method</button>
          </div>
        </div>
      </div>
    </div>

    <div className="card card-custom mt-5">
      <div className="card-body">
        <div>Response</div>
        <div>
          <textarea className="form-control" rows={10}></textarea>
        </div>
      </div>
    </div>
  </>
)

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
