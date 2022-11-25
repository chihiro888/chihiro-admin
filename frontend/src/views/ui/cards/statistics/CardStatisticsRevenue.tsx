// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const CardStatisticsRevenue = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        distributed: true,
        columnWidth: '65%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      theme.palette.primary.main,
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16)
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -10,
        right: 7,
        bottom: -3
      }
    }
  }

  return (
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(3.5, 5, 0)} !important` }}>
        <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Revenue</Typography>
        <Typography variant='h5'>425k</Typography>
      </CardContent>
      <ReactApexcharts type='bar' height={110} options={options} series={[{ data: [23, 81, 70, 31, 99, 46, 73] }]} />
    </Card>
  )
}

export default CardStatisticsRevenue
