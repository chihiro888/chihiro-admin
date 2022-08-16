import { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import Lottie from 'react-lottie'
import * as sampleIconAnimation from '../../lottie/sample-icon-animation.json'

const DevelopLottiePage: FC = () => (
  <>
    {
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: sampleIconAnimation,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        isClickToPauseDisabled
        height={350}
        width={350}
      />
    }
  </>
)

const DevelopLottieWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: 'MENU.DEVELOP.LOTTIE_SAMPLE' })}
      </PageTitle>

      <DevelopLottiePage />
    </>
  )
}

export { DevelopLottieWrapper }
