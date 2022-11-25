// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const AnalyticsPayments = () => {
  return (
    <CardStatisticsVertical
      stats='$2,468'
      trend='negative'
      title='Payments'
      trendNumber={14.82}
      avatarSrc='/images/cards/stats-vertical-paypal.png'
    />
  )
}

export default AnalyticsPayments
