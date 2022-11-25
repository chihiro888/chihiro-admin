// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const CrmSalesStats = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    labels: ['Sales'],
    stroke: { lineCap: 'round' },
    colors: [hexToRGBA(theme.palette.success.main, 1)],
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
        top: 20,
        bottom: 30
      }
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '73%',
          imageWidth: 72,
          imageHeight: 53,
          imageOffsetY: -40,
          imageClipped: false,
          image: '/images/cards/arrow-star.png'
        },
        track: {
          strokeWidth: '45px',
          background: hexToRGBA(theme.palette.customColors.trackBg, 1)
        },
        dataLabels: {
          name: {
            offsetY: 50,
            color: theme.palette.text.disabled
          },
          value: {
            offsetY: 10,
            fontWeight: 500,
            fontSize: '32px',
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Sales Stats'
        action={
          <OptionsMenu iconButtonProps={{ size: 'small' }} options={['Last 28 Days', 'Last Month', 'Last Year']} />
        }
      />
      <CardContent>
        <ReactApexcharts type='radialBar' height={348} options={options} series={[75]} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
          <Box sx={{ mr: 2.5, display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: 'success.main' } }}>
            <Icon icon='bxs:circle' fontSize={14} />
            <Typography sx={{ color: 'text.secondary' }}>Conversion Ratio</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: 'customColors.trackBg' } }}>
            <Icon icon='bxs:circle' fontSize={14} />
            <Typography sx={{ color: 'text.secondary' }}>Total requirements</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CrmSalesStats
