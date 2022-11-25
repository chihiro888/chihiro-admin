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

const series = [{ data: [11, 7, 11, 20] }, { data: [9, 5, 15, 18] }]

const EcommerceProfit = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    grid: {
      padding: {
        top: -22,
        left: -1,
        right: 10,
        bottom: -3
      },
      yaxis: {
        lines: { show: false }
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [hexToRGBA(theme.palette.success.main, 1), hexToRGBA(theme.palette.success.main, 0.2)],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '52%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Apr', 'Jul', 'Oct'],
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
    },
    responsive: [
      {
        breakpoint: 1300,
        options: {
          plotOptions: {
            bar: { columnWidth: '65%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
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
            bar: { columnWidth: '30%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '50%' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(3.5, 5, 0)} !important` }}>
        <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Profit</Typography>
        <Typography variant='h5'>624k</Typography>
      </CardContent>
      <ReactApexcharts type='bar' height={110} options={options} series={series} />
    </Card>
  )
}

export default EcommerceProfit
