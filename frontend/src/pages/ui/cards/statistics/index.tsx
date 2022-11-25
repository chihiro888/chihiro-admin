// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import axios from 'axios'

// ** Type Import
import { CardStatsType } from 'src/@fake-db/types'

// ** Demo Components Imports
import CardStatisticsOrder from 'src/views/ui/cards/statistics/CardStatisticsOrder'
import CardStatisticsSales from 'src/views/ui/cards/statistics/CardStatisticsSales'
import CardStatisticsProfit from 'src/views/ui/cards/statistics/CardStatisticsProfit'
import CardStatisticsTarget from 'src/views/ui/cards/statistics/CardStatisticsTarget'
import CardStatisticsRevenue from 'src/views/ui/cards/statistics/CardStatisticsRevenue'
import CardStatisticsExpenses from 'src/views/ui/cards/statistics/CardStatisticsExpenses'
import CardStatisticsSessions from 'src/views/ui/cards/statistics/CardStatisticsSessions'
import CardStatisticsVertical from 'src/views/ui/cards/statistics/CardStatisticsVertical'
import CardStatisticsHorizontal from 'src/views/ui/cards/statistics/CardStatisticsHorizontal'
import CardStatisticsNewVisitors from 'src/views/ui/cards/statistics/CardStatisticsNewVisitors'
import CardStatisticsGeneratedLeads from 'src/views/ui/cards/statistics/CardStatisticsGeneratedLeads'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const CardStatistics = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <CardStatisticsHorizontal data={apiData.statsHorizontal} />
        </Grid>
        <Grid item xs={12}>
          <CardStatisticsTarget data={apiData.statsTarget} />
        </Grid>
        <Grid item xs={12}>
          <CardStatisticsVertical data={apiData.statsVertical} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            <Grid item xs={6} sm={4} lg={2}>
              <CardStatisticsOrder />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <CardStatisticsRevenue />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <CardStatisticsProfit />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <CardStatisticsSessions />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <CardStatisticsExpenses />
            </Grid>
            <Grid item xs={6} sm={4} lg={2}>
              <CardStatisticsSales />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <CardStatisticsNewVisitors />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CardStatisticsGeneratedLeads />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}

export default CardStatistics
