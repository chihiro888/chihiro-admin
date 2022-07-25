import { FC } from 'react'
import { IntlShape, useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { useAppDispatch, useAppSelector } from '../../hooks'
import {
  decrement,
  increment,
  incrementByAmount
} from '../../slice/counter/counterSlice'

interface DevelopReduxStateProps {
  intl: IntlShape
  count: number
  handleClickPlus: () => void
  handleClickMinus: () => void
  handleClickFive: () => void
}

const DevelopReduxStatePage: FC<DevelopReduxStateProps> = ({
  intl,
  count,
  handleClickPlus,
  handleClickMinus,
  handleClickFive
}: DevelopReduxStateProps) => (
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
        <div className="mt-3">
          <button className="btn btn-light-success" onClick={handleClickFive}>
            <i className="bi bi-arrow-up fs-4 me-2"></i>
            {intl.formatMessage({ id: 'TEXT.PLUS_5' })}
          </button>
        </div>
      </div>
    </div>
  </>
)

const DevelopReduxStateWrapper: FC = () => {
  // hooks
  const intl = useIntl()

  // redux
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // handler
  const handleClickPlus = () => {
    dispatch(increment())
  }

  // handler
  const handleClickMinus = () => {
    dispatch(decrement())
  }

  // handler
  const handleClickFive = () => {
    dispatch(incrementByAmount(5))
  }

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.REDUX_STATE_SAMPLE' })}
      </PageTitle>

      <DevelopReduxStatePage
        intl={intl}
        count={count}
        handleClickPlus={handleClickPlus}
        handleClickMinus={handleClickMinus}
        handleClickFive={handleClickFive}
      />
    </>
  )
}

export { DevelopReduxStateWrapper }
