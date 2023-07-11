// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import CardWidgetsTabs from 'src/views/ui/cards/widgets/CardWidgetsTabs'
import CardWidgetsScore from 'src/views/ui/cards/widgets/CardWidgetsScore'
import CardWidgetsSalesStats from 'src/views/ui/cards/widgets/CardWidgetsSalesStats'
import CardWidgetsTotalIncome from 'src/views/ui/cards/widgets/CardWidgetsTotalIncome'
import CardWidgetsPerformance from 'src/views/ui/cards/widgets/CardWidgetsPerformance'
import CardWidgetsTotalBalance from 'src/views/ui/cards/widgets/CardWidgetsTotalBalance'
import CardWidgetsTotalRevenue from 'src/views/ui/cards/widgets/CardWidgetsTotalRevenue'
import CardWidgetsSalesActivity from 'src/views/ui/cards/widgets/CardWidgetsSalesActivity'
import CardWidgetsSalesAnalytics from 'src/views/ui/cards/widgets/CardWidgetsSalesAnalytics'
import CardWidgetsCustomerRatings from 'src/views/ui/cards/widgets/CardWidgetsCustomerRatings'
import CardWidgetsSessionsOverview from 'src/views/ui/cards/widgets/CardWidgetsSessionsOverview'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const CardWidgets = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsCustomerRatings />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsSalesStats />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsSalesAnalytics />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsSalesActivity />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardWidgetsTotalIncome />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsTabs />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsPerformance />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardWidgetsTotalBalance />
        </Grid>
        <Grid item xs={12} md={8} xl={5} sx={{ order: [1, 1, 0] }}>
          <CardWidgetsSessionsOverview />
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3} sx={{ order: [0, 0, 1] }}>
          <CardWidgetsScore />
        </Grid>
        <Grid item xs={12} md={8} sx={{ order: 1 }}>
          <CardWidgetsTotalRevenue />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CardWidgets
