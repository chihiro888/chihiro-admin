// ** MUI Import
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const CardWidgetsScore = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    labels: ['Out of 100'],
    stroke: { dashArray: 5 },
    colors: [hexToRGBA(theme.palette.primary.main, 1)],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      padding: {
        top: -15,
        bottom: -13
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityTo: 0.6,
        opacityFrom: 1,
        shadeIntensity: 0.5,
        stops: [30, 70, 100],
        inverseColors: false,
        gradientToColors: [theme.palette.primary.main]
      }
    },
    plotOptions: {
      radialBar: {
        endAngle: 150,
        startAngle: -140,
        hollow: { size: '55%' },
        track: { background: 'transparent' },
        dataLabels: {
          name: {
            offsetY: 30,
            fontSize: '14px',
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.fontFamily
          },
          value: {
            offsetY: -10,
            fontWeight: 500,
            fontSize: '38px',
            formatter: value => `${value}`,
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 900,
        options: {
          chart: { height: 375 }
        }
      },
      {
        breakpoint: 735,
        options: {
          chart: { height: 325 }
        }
      },
      {
        breakpoint: 660,
        options: {
          chart: { height: 280 }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent sx={{ pt: 4, textAlign: 'center' }}>
        <Typography variant='body2'>Your score is</Typography>
        <Typography variant='h5'>Awesome</Typography>
        <ReactApexcharts type='radialBar' height={200} options={options} series={[78]} />
        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
          Your score is based on the last
        </Typography>
        <Typography variant='body2' sx={{ mb: 2.5, fontWeight: 700 }}>
          287 Transactions
        </Typography>
        <Button size='small' variant='contained'>
          View My Account
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardWidgetsScore
