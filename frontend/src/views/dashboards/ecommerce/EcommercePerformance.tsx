// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const series = [
  { name: 'Income', data: [26, 29, 31, 40, 29, 24] },
  { name: 'Earning', data: [30, 26, 24, 26, 24, 40] }
]

const EcommercePerformance = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 0,
        blur: 6,
        left: 0,
        opacity: 0.14,
        enabled: true,
        color: theme.palette.common.black
      }
    },
    markers: { size: 0 },
    stroke: { show: false },
    fill: { opacity: [1, 0.85] },
    colors: [theme.palette.primary.main, theme.palette.info.main],
    legend: {
      show: true,
      fontSize: '14px',
      markers: { offsetX: -5 },
      itemMargin: { horizontal: 15 },
      fontFamily: theme.typography.fontFamily,
      labels: { colors: theme.palette.text.secondary }
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: theme.palette.divider,
          connectorColors: theme.palette.divider
        }
      }
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        bottom: -10
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          fontSize: '14px',
          fontFamily: theme.typography.fontFamily,
          colors: [
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled,
            theme.palette.text.disabled
          ]
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Performance'
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Last Week', 'Last Month', 'Last Year']} />}
      />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Typography variant='body2'>
              <Box component='span' sx={{ mr: 1.5 }}>
                Earning:
              </Box>
              <Box component='span' sx={{ fontWeight: 500, display: 'inline-block' }}>
                $846.17
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body2'>
              <Box component='span' sx={{ mr: 1.5 }}>
                Sales:
              </Box>
              <Box component='span' sx={{ fontWeight: 500, display: 'inline-block' }}>
                25.7M
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <ReactApexcharts options={options} series={series} type='radar' height={313} />
      </CardContent>
    </Card>
  )
}

export default EcommercePerformance
