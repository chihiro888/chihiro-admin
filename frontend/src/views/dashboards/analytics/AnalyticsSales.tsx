// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const AnalyticsSales = () => {
  return (
    <CardStatisticsVertical
      title='Sales'
      stats='$4,679'
      trendNumber={28.14}
      avatarSrc='/images/cards/stats-vertical-wallet.png'
    />
  )
}

export default AnalyticsSales
