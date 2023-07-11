// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import EcommerceAward from 'src/views/dashboards/ecommerce/EcommerceAward'
import EcommerceSales from 'src/views/dashboards/ecommerce/EcommerceSales'
import EcommerceTable from 'src/views/dashboards/ecommerce/EcommerceTable'
import EcommerceProfit from 'src/views/dashboards/ecommerce/EcommerceProfit'
import EcommerceRevenue from 'src/views/dashboards/ecommerce/EcommerceRevenue'
import EcommerceNewVisitor from 'src/views/dashboards/ecommerce/EcommerceNewVisitor'
import EcommerceTotalIncome from 'src/views/dashboards/ecommerce/EcommerceTotalIncome'
import EcommercePerformance from 'src/views/dashboards/ecommerce/EcommercePerformance'
import EcommerceSalesTarget from 'src/views/dashboards/ecommerce/EcommerceSalesTarget'
import EcommerceExpensesBar from 'src/views/dashboards/ecommerce/EcommerceExpensesBar'
import EcommerceTransactions from 'src/views/dashboards/ecommerce/EcommerceTransactions'
import EcommerceTotalBalance from 'src/views/dashboards/ecommerce/EcommerceTotalBalance'
import EcommerceConversionRate from 'src/views/dashboards/ecommerce/EcommerceConversionRate'
import EcommerceExpensesRadialBar from 'src/views/dashboards/ecommerce/EcommerceExpensesRadialBar'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const EcommerceDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <EcommerceAward />
        </Grid>
        <Grid item xs={12} md={8}>
          <EcommerceNewVisitor />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceSales />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceProfit />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceExpensesRadialBar />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceTransactions />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <EcommerceTotalIncome />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommercePerformance />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceConversionRate />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceRevenue />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceSalesTarget />
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <EcommerceExpensesBar />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <EcommerceTable />
        </Grid>
        <Grid item xs={12} md={4}>
          <EcommerceTotalBalance />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default EcommerceDashboard
