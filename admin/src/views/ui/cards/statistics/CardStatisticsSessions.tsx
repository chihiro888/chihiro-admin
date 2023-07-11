// ** MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const series = [{ data: [26, 26, 24, 24, 22, 22, 26, 26, 30] }]

const CardStatisticsSessions = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: 'straight'
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -35,
        right: 16
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.7,
        opacityFrom: 0.5,
        shadeIntensity: 1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.6,
              color: theme.palette.warning.main
            },
            {
              offset: 100,
              opacity: 0.1,
              color: theme.palette.background.paper
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: theme.palette.warning.main
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    markers: {
      size: 1,
      offsetY: 4,
      offsetX: -4,
      strokeWidth: 4,
      strokeOpacity: 1,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 6,
          seriesIndex: 0,
          fillColor: theme.palette.common.white,
          strokeColor: theme.palette.warning.main,
          dataPointIndex: series[0].data.length - 1
        }
      ]
    }
  }

  return (
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(3.5, 5, 0)} !important` }}>
        <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Sessions</Typography>
        <Typography variant='h5'>2845</Typography>
      </CardContent>
      <ReactApexcharts type='area' height={110} options={options} series={series} />
    </Card>
  )
}

export default CardStatisticsSessions
