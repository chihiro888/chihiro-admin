import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import BigNumber from 'bignumber.js'

/*
  github
  https://github.com/MikeMcl/bignumber.js/

  document
  https://mikemcl.github.io/bignumber.js/
*/
const DevelopBignumberWrapper: FC = () => {
  // hooks
  const intl = useIntl()

  // BigNumber
  const x = new BigNumber(100)
  const y = new BigNumber(3)

  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.BIGNUMBER_SAMPLE' })}
      </PageTitle>

      {/* sample */}
      <div>x = {x.toString()}</div>
      <div>y = {y.toString()}</div>
      <div>x + y = {x.plus(y).toString()}</div>
      <div>x - y = {x.minus(y).toString()}</div>
      <div>x * y = {x.multipliedBy(y).toString()}</div>
      <div>x / y = {x.dividedBy(y).toString()}</div>
      <div>x / y = {x.dividedBy(y).toFixed(5).toString()}</div>
      <div>x // y = {x.dividedToIntegerBy(y).toString()}</div>
      <div>
        x % y = {x.dividedBy(y).minus(x.dividedToIntegerBy(y)).toString()}
      </div>
      <div>
        {`0 = 0`} = {new BigNumber(0).isEqualTo(0).toString()}
      </div>
      <div>
        {`3 > 2`} = {new BigNumber(3).isGreaterThan(2).toString()}
      </div>
      <div>
        {`3 >= 3`} = {new BigNumber(3).isGreaterThanOrEqualTo(3).toString()}
      </div>
      <div>
        {`3 < 2`} = {new BigNumber(3).isLessThan(0).toString()}
      </div>
      <div>
        {`3 <= 2`} = {new BigNumber(3).isLessThanOrEqualTo(0).toString()}
      </div>
      <div>
        {`-1`} = {new BigNumber(-1).isNegative().toString()}
      </div>
      <div>
        {`0`} = {new BigNumber(0).isNegative().toString()}
      </div>
      <div>
        {`1`} = {new BigNumber(1).isPositive().toString()}
      </div>
      <div>
        {`0`} = {new BigNumber(0).isPositive().toString()}
      </div>
    </>
  )
}

export { DevelopBignumberWrapper }
