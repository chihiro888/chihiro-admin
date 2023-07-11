// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Import
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Component Imports
import CustomChip from 'src/@core/components/mui/chip'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [
  {
    name: `${new Date().getFullYear() - 1}`,
    data: [12, 32, 12, 27, 39, 27, 17, 9, 12, 20]
  },
  {
    name: `${new Date().getFullYear() - 2}`,
    data: [-28, -20, -27, -15, -21, -17, -19, -12, -30, -18]
  }
]

const EcommerceExpensesBar = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      lineCap: 'round',
      colors: [theme.palette.background.paper]
    },
    colors: [
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.warning.main, 1)
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '40%',
        endingShape: 'flat',
        startingShape: 'rounded'
      }
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        right: 2,
        bottom: 0
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 1400,
        options: {
          plotOptions: {
            bar: { columnWidth: '60%' }
          }
        }
      },
      {
        breakpoint: 1250,
        options: {
          plotOptions: {
            bar: { columnWidth: '65%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { height: 146 },
          plotOptions: {
            bar: { columnWidth: '40%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: { height: 191 }
        }
      },
      {
        breakpoint: 420,
        options: {
          plotOptions: {
            bar: { columnWidth: '55%' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          p: `${theme.spacing(3.5, 5, 5)} !important`
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h6">Expenses</Typography>
          <div>
            <Typography variant="h5" sx={{ mb: 1 }}>
              $84.7k
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                '& svg': { color: 'error.main' }
              }}
            >
              <Icon icon="bx:down-arrow-alt" />
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: 'error.main' }}
              >
                8.2%
              </Typography>
            </Box>
          </div>
          <CustomChip
            skin="light"
            color="secondary"
            sx={{ fontWeight: 500 }}
            label={`July ${new Date().getFullYear()}`}
          />
        </Box>
        <ReactApexcharts
          type="bar"
          width="90%"
          height={191}
          options={options}
          series={series}
        />
      </CardContent>
    </Card>
  )
}

export default EcommerceExpensesBar
