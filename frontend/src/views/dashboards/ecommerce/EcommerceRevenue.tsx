// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const EcommerceRevenue = () => {
  return (
    <CardStatisticsVertical
      stats='$42,389'
      title='Revenue'
      trendNumber={52.76}
      avatarSrc='/images/cards/stats-vertical-desktop.png'
    />
  )
}

export default EcommerceRevenue
