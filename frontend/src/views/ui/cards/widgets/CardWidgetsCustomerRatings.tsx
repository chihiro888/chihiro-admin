// ** React Import
import { useState } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [
  { name: 'Last Month', data: [20, 54, 22, 40, 20, 25, 16, 22] },
  { name: 'This Month', data: [20, 38, 27, 65, 43, 48, 32, 70] }
]

const CardWidgetsCustomerRatings = () => {
  // ** State
  const [value] = useState<number>(4)

  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 14,
        blur: 4,
        left: 0,
        enabled: true,
        opacity: 0.04,
        enabledOnSeries: [1],
        color: theme.palette.common.black
      }
    },
    grid: {
      show: false,
      padding: {
        left: -7,
        top: -37,
        right: 34,
        bottom: 10
      }
    },
    legend: { show: false },
    colors: [theme.palette.action.selected, hexToRGBA(theme.palette.primary.main, 1)],
    markers: {
      size: 6,
      strokeWidth: 5,
      strokeOpacity: 1,
      hover: { size: 6 },
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 6,
          seriesIndex: 1,
          fillColor: theme.palette.common.white,
          strokeColor: theme.palette.primary.main,
          dataPointIndex: series[0].data.length - 1
        },
        {
          size: 6,
          seriesIndex: 1,
          dataPointIndex: 3,
          fillColor: theme.palette.common.white,
          strokeColor: theme.palette.common.black
        }
      ]
    },
    stroke: {
      width: [3, 5],
      curve: 'smooth',
      lineCap: 'round',
      dashArray: [8, 0]
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      crosshairs: {
        stroke: { color: `rgba(${theme.palette.customColors.main}, 0.2)` }
      },
      labels: {
        style: {
          fontSize: '1rem',
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
        title='Customer Ratings'
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Refresh', 'Delete']} />}
      />
      <CardContent>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h3' sx={{ mr: 4.5 }}>
            {value.toFixed(1)}
          </Typography>
          <Rating readOnly value={value} emptyIcon={<Icon icon='bxs:star' />} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomChip rounded size='small' skin='light' label='+5.0' color='primary' sx={{ mr: 2.5 }} />
          <Typography sx={{ color: 'text.secondary' }}>Points from last month</Typography>
        </Box>
      </CardContent>
      <ReactApexcharts type='line' height={217} options={options} series={series} />
    </Card>
  )
}

export default CardWidgetsCustomerRatings
