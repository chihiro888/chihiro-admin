// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const CardWidgetsSessionsOverview = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true }
    },
    labels: ['Loss Rate'],
    stroke: { lineCap: 'round' },
    colors: [hexToRGBA(theme.palette.warning.main, 1)],
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
        bottom: -10
      }
    },
    plotOptions: {
      radialBar: {
        endAngle: 140,
        startAngle: -140,
        hollow: { size: '66%' },
        track: {
          strokeWidth: '30%',
          background: theme.palette.action.selected
        },
        dataLabels: {
          name: {
            offsetY: 60,
            fontSize: '14px',
            color: theme.palette.text.disabled,
            fontFamily: theme.typography.fontFamily
          },
          value: {
            offsetY: -5,
            fontWeight: 500,
            fontSize: '26px',
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
        title='Sessions Overview'
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Refresh', 'Update']} />}
      />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={5}>
            <Typography variant='h4'>32,754</Typography>
            <Typography sx={{ mb: 4, color: 'success.main' }}>+0.7645%</Typography>
            <ReactApexcharts type='radialBar' height={178} options={options} series={[78]} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 1, color: 'text.disabled' }}>
                    Today
                  </Typography>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>+ $340</Typography>
                </Box>
                <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 1, color: 'text.disabled' }}>
                    Last Week
                  </Typography>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>+ $680</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 1, color: 'text.disabled' }}>
                    Last Month
                  </Typography>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>+ $3,540</Typography>
                </Box>
              </Box>
              <Box sx={{ mb: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 6 }}>
                  <Typography variant='body2'>Effective Return</Typography>
                  <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <LinearProgress value={74} variant='determinate' sx={{ mr: 3, height: 8, width: '100%' }} />
                    <Typography sx={{ fontWeight: 500 }}>74%</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant='body2'>Invalid Session</Typography>
                  <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <LinearProgress value={40} variant='determinate' sx={{ mr: 3, height: 8, width: '100%' }} />
                    <Typography sx={{ fontWeight: 500 }}>40%</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardWidgetsSessionsOverview
