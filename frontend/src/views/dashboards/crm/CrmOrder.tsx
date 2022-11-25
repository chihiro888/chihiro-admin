// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const CrmOrder = () => {
  return (
    <CardStatisticsVertical
      title='Order'
      stats='$1,286'
      trend='negative'
      trendNumber={13.24}
      avatarSrc='/images/cards/stats-vertical-cube.png'
    />
  )
}

export default CrmOrder
