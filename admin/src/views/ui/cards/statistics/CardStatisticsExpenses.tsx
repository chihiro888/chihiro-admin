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

const CardStatisticsExpenses = () => {
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    stroke: { lineCap: 'round' },
    colors: [hexToRGBA(theme.palette.primary.main, 1)],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      radialBar: {
        endAngle: 90,
        startAngle: -90,
        hollow: { size: '64%' },
        track: {
          background: hexToRGBA(theme.palette.customColors.trackBg, 1)
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 3,
            fontWeight: 500,
            fontSize: '22px',
            color: theme.palette.text.primary
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(3.5, 5, 3)} !important` }}>
        <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>Expenses</Typography>
        <ReactApexcharts type='radialBar' height={138} options={options} series={[72]} />
        <Typography variant='body2' sx={{ mt: 4.25, textAlign: 'center', color: 'text.disabled' }}>
          $21k Expenses more than last month
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatisticsExpenses
