import { FC, useState } from 'react'
import { IntlShape, useIntl } from 'react-intl'
import {
  getMethod,
  postMethod,
  putMethod,
  deleteMethod
} from '../../../api/develop'
import { PageTitle } from '../../../_metronic/layout/core'

interface DevelopAxiosProps {
  intl: IntlShape
  parameter1: string
  parameter2: string
  result: string
  handleClickButton: (method: string) => void
  handleChangeParameter1: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeParameter2: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const DevelopAxiosPage: FC<DevelopAxiosProps> = ({
  intl,
  parameter1,
  parameter2,
  result,
  handleClickButton,
  handleChangeParameter1,
  handleChangeParameter2
}: DevelopAxiosProps) => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <div>
          <label className="form-label">
            {intl.formatMessage({ id: 'LABEL.PARAMETER_1' })}
          </label>
          <input
            type="text"
            className="form-control"
            value={parameter1}
            onChange={handleChangeParameter1}
          />
        </div>
        <div className="mt-5">
          <label className="form-label">
            {intl.formatMessage({ id: 'LABEL.PARAMETER_2' })}
          </label>
          <input
            type="text"
            className="form-control"
            value={parameter2}
            onChange={handleChangeParameter2}
          />
        </div>
      </div>
    </div>

    <div className="card card-custom mt-5">
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 col-12 mt-3 mt-md-0">
            <button
              className="btn btn-light-primary w-100"
              onClick={() => handleClickButton('GET')}
            >
              <i className="bi bi-send fs-4 me-2"></i>
              {intl.formatMessage({ id: 'TEXT.GET_METHOD' })}
            </button>
          </div>
          <div className="col-md-3 col-12 mt-3 mt-md-0">
            <button
              className="btn btn-light-success w-100"
              onClick={() => handleClickButton('POST')}
            >
              <i className="bi bi-send fs-4 me-2"></i>
              {intl.formatMessage({ id: 'TEXT.POST_METHOD' })}
            </button>
          </div>
          <div className="col-md-3 col-12 mt-3 mt-md-0">
            <button
              className="btn btn-light-warning w-100"
              onClick={() => handleClickButton('PUT')}
            >
              <i className="bi bi-send fs-4 me-2"></i>
              {intl.formatMessage({ id: 'TEXT.PUT_METHOD' })}
            </button>
          </div>
          <div className="col-md-3 col-12 mt-3 mt-md-0">
            <button
              className="btn btn-light-danger w-100"
              onClick={() => handleClickButton('DELETE')}
            >
              <i className="bi bi-send fs-4 me-2"></i>
              {intl.formatMessage({ id: 'TEXT.DELETE_METHOD' })}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="card card-custom mt-5">
      <div className="card-body">
        <div>{intl.formatMessage({ id: 'TEXT.RESPONSE' })}</div>
        <div>
          <textarea
            className="form-control"
            rows={10}
            value={result}
            readOnly
          ></textarea>
        </div>
      </div>
    </div>
  </>
)

const DevelopAxiosWrapper: FC = () => {
  // hooks
  const intl = useIntl()

  // state
  const [parameter1, setParameter1] = useState('')
  const [parameter2, setParameter2] = useState('')
  const [result, setResult] = useState('')

  // handler
  const handleChangeParameter1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setParameter1(event.target.value)
  }

  // handler
  const handleChangeParameter2 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setParameter2(event.target.value)
  }

  // handler
  const handleClickButton = async (method: string) => {
    const params = {
      parameter1,
      parameter2
    }
    if (method === 'GET') {
      const { data: response } = await getMethod(params)
      setResult(JSON.stringify(response))
    } else if (method === 'POST') {
      const { data: response } = await postMethod(params)
      setResult(JSON.stringify(response))
    } else if (method === 'PUT') {
      const { data: response } = await putMethod(params)
      setResult(JSON.stringify(response))
    } else if (method === 'DELETE') {
      const { data: response } = await deleteMethod(params)
      setResult(JSON.stringify(response))
    }
  }

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.AXIOS_SAMPLE' })}
      </PageTitle>

      <DevelopAxiosPage
        intl={intl}
        parameter1={parameter1}
        parameter2={parameter2}
        result={result}
        handleClickButton={handleClickButton}
        handleChangeParameter1={handleChangeParameter1}
        handleChangeParameter2={handleChangeParameter2}
      />
    </>
  )
}

export { DevelopAxiosWrapper }
