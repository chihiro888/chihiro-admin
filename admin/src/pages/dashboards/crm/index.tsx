// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import CrmOrder from 'src/views/dashboards/crm/CrmOrder'
import CrmTable from 'src/views/dashboards/crm/CrmTable'
import CrmSessions from 'src/views/dashboards/crm/CrmSessions'
import CrmSalesStats from 'src/views/dashboards/crm/CrmSalesStats'
import CrmTopProducts from 'src/views/dashboards/crm/CrmTopProducts'
import CrmTeamMembers from 'src/views/dashboards/crm/CrmTeamMembers'
import CrmSalesActivity from 'src/views/dashboards/crm/CrmSalesActivity'
import CrmEarningReport from 'src/views/dashboards/crm/CrmEarningReport'
import CrmCustomerRating from 'src/views/dashboards/crm/CrmCustomerRating'
import CrmGeneratedLeads from 'src/views/dashboards/crm/CrmGeneratedLeads'
import CrmSalesAnalytics from 'src/views/dashboards/crm/CrmSalesAnalytics'
import CrmSalesByCountries from 'src/views/dashboards/crm/CrmSalesByCountries'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const CrmDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <CrmCustomerRating />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmSalesActivity />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6} md={3} lg={6}>
              <CrmSessions />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <CrmOrder />
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <CrmGeneratedLeads />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <CrmTopProducts />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmEarningReport />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmSalesAnalytics />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmSalesByCountries />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmSalesStats />
        </Grid>
        <Grid item xs={12} md={5}>
          <CrmTeamMembers />
        </Grid>
        <Grid item xs={12} md={7}>
          <CrmTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
