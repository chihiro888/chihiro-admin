// ** MUI Import
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [
  { name: 'Product A', data: [77, 50, 59, 67, 48, 84, 64] },
  { name: 'Product B', data: [20, 23, 27, 27, 30, 18, 25] }
]

const CardWidgetsSalesActivity = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 6,
      lineCap: 'round',
      colors: [theme.palette.background.paper]
    },
    colors: [hexToRGBA(theme.palette.error.main, 1), hexToRGBA(theme.palette.secondary.main, 1)],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        left: 8,
        top: -45,
        right: 6,
        bottom: 7
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '36%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    xaxis: {
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: { columnWidth: '45%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {
            bar: { columnWidth: '48%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '40%' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title='Overview & Sales Activity' subheader='Check out each column for more details' />
      <ReactApexcharts type='bar' height={266} options={options} series={series} />
    </Card>
  )
}

export default CardWidgetsSalesActivity
