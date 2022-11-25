// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import CardTabs from 'src/views/ui/cards/advanced/CardTabs'
import CardEvent from 'src/views/ui/cards/advanced/CardEvent'
import CardPaymentData from 'src/views/ui/cards/advanced/CardPaymentData'
import CardPlanUpgrade from 'src/views/ui/cards/advanced/CardPlanUpgrade'
import CardTeamMembers from 'src/views/ui/cards/advanced/CardTeamMembers'
import CardTransactions from 'src/views/ui/cards/advanced/CardTransactions'
import CardEmployeeList from 'src/views/ui/cards/advanced/CardEmployeeList'
import CardEarningReport from 'src/views/ui/cards/advanced/CardEarningReport'
import CardConversionRate from 'src/views/ui/cards/advanced/CardConversionRate'
import CardFinanceSummary from 'src/views/ui/cards/advanced/CardFinanceSummary'
import CardOrderStatistics from 'src/views/ui/cards/advanced/CardOrderStatistics'
import CardSalesByCountries from 'src/views/ui/cards/advanced/CardSalesByCountries'
import CardActivityTimeline from 'src/views/ui/cards/advanced/CardActivityTimeline'
import CardForBusinessSharks from 'src/views/ui/cards/advanced/CardForBusinessSharks'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const CardsAdvanced = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <CardEmployeeList />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardTransactions />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardEvent />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardPaymentData />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardForBusinessSharks />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardPlanUpgrade />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardSalesByCountries />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardOrderStatistics />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardEarningReport />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardTeamMembers />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardTabs />
        </Grid>
        <Grid item xs={12} md={6} lg={7} xl={8}>
          <CardActivityTimeline />
        </Grid>
        <Grid item xs={12} md={6} lg={5} xl={4}>
          <CardConversionRate />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardFinanceSummary />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CardsAdvanced
