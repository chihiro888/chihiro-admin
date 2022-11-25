// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [23, 27, 22, 28]

const CrmGeneratedLeads = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    colors: [
      hexToRGBA(theme.palette.success.main, 0.75),
      hexToRGBA(theme.palette.success.main, 0.5),
      hexToRGBA(theme.palette.success.main, 0.25),
      theme.palette.success.main
    ],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      padding: { top: 10 }
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: false,
        donut: {
          size: '73%',
          labels: {
            show: true,
            name: {
              offsetY: 22,
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily
            },
            value: {
              offsetY: -17,
              fontWeight: 500,
              fontSize: '26px',
              formatter: val => `${val}%`,
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily
            },
            total: {
              show: true,
              label: 'Average',
              fontSize: '16px',
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily,
              formatter: () => `${series.reduce((a, b) => a + b, 0) / series.length}%`
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          chart: { height: 155 }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: { height: 171 }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent sx={{ p: `${theme.spacing(4, 5)} !important` }}>
        <Box sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Typography variant='h6'>Generated Leads</Typography>
              <Typography variant='body2'>Monthly Report</Typography>
            </div>
            <div>
              <Typography variant='h5' sx={{ mb: 2 }}>
                4,234
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'success.main' } }}>
                <Icon icon='bx:up-arrow-alt' fontSize={18} />
                <Typography variant='body2' sx={{ fontWeight: 500, color: 'success.main' }}>
                  12.8%
                </Typography>
              </Box>
            </div>
          </Box>
          <ReactApexcharts type='donut' width={150} height={171} series={series} options={options} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default CrmGeneratedLeads
