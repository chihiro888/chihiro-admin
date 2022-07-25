import { FC, useState } from 'react'
import { IntlShape, useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'

interface DevelopReactStateProps {
  intl: IntlShape
  count: number
  handleClickPlus: () => void
  handleClickMinus: () => void
}

const DevelopReactStatePage: FC<DevelopReactStateProps> = ({
  intl,
  count,
  handleClickPlus,
  handleClickMinus
}: DevelopReactStateProps) => (
  <>
    <div className="card card-custom">
      <div className="card-body">
        <div>{intl.formatMessage({ id: 'LABEL.COUNT' })}</div>
        <h1 className="mt-3">{count}</h1>
      </div>
    </div>

    <div className="card card-custom mt-5">
      <div className="card-body">
        <div>
          <button className="btn btn-light-success" onClick={handleClickPlus}>
            <i className="bi bi-arrow-up fs-4 me-2"></i>
            {intl.formatMessage({ id: 'TEXT.PLUS' })}
          </button>
        </div>
        <div className="mt-3">
          <button className="btn btn-light-danger" onClick={handleClickMinus}>
            <i className="bi bi-arrow-down fs-4 me-2"></i>
            {intl.formatMessage({ id: 'TEXT.MINUS' })}
          </button>
        </div>
      </div>
    </div>
  </>
)

const DevelopReactStateWrapper: FC = () => {
  // hooks
  const intl = useIntl()

  // state
  const [count, setCount] = useState(0)

  // handler
  const handleClickPlus = () => {
    setCount(count + 1)
  }

  // handler
  const handleClickMinus = () => {
    setCount(count - 1)
  }

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.REACT_STATE_SAMPLE' })}
      </PageTitle>

      <DevelopReactStatePage
        intl={intl}
        count={count}
        handleClickPlus={handleClickPlus}
        handleClickMinus={handleClickMinus}
      />
    </>
  )
}

export { DevelopReactStateWrapper }
