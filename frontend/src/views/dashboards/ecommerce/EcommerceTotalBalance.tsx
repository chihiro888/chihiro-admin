// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [{ name: 'Balance', data: [137, 210, 160, 275, 205, 315] }]

const EcommerceTotalBalance = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 15,
        blur: 5,
        left: 0,
        opacity: 0.1,
        enabled: true,
        color: theme.palette.warning.main
      }
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -20,
        bottom: 3
      }
    },
    legend: { show: false },
    colors: [hexToRGBA(theme.palette.warning.main, 1)],
    markers: {
      size: 7,
      strokeWidth: 5,
      strokeOpacity: 1,
      hover: { size: 7 },
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 7,
          seriesIndex: 0,
          fillColor: theme.palette.common.white,
          strokeColor: theme.palette.warning.main,
          dataPointIndex: series[0].data.length - 1
        }
      ]
    },
    stroke: {
      width: 4,
      curve: 'smooth',
      lineCap: 'round'
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      crosshairs: {
        stroke: { color: `rgba(${theme.palette.customColors.main}, 0.2)` }
      },
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Total Balance'
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Last Week', 'Last Month', 'Last Year']} />}
      />
      <CardContent>
        <Grid container spacing={6} sx={{ mb: 6 }}>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' color='warning' sx={{ mr: 3.75 }} variant='rounded'>
                <Icon icon='bx:wallet-alt' />
              </CustomAvatar>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6'>$2.54k</Typography>
                <Typography variant='body2'>Wallet</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CustomAvatar skin='light' color='secondary' sx={{ mr: 3.75 }} variant='rounded'>
                <Icon icon='bx:dollar' />
              </CustomAvatar>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h6'>$4.21k</Typography>
                <Typography variant='body2'>Paypal</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <ReactApexcharts type='line' height={217} options={options} series={series} />
        <Divider sx={{ mb: 6 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='body2'>You have done 57.6% more sales.</Typography>
            <Typography variant='body2'>Check your new badge in your profile.</Typography>
          </Box>
          <CustomAvatar skin='light' color='warning' variant='rounded' sx={{ width: 34, height: 34 }}>
            <Icon icon='bx:chevron-right' fontSize={28} />
          </CustomAvatar>
        </Box>
      </CardContent>
    </Card>
  )
}

export default EcommerceTotalBalance
