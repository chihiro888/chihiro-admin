// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    paddingRight: theme.spacing(5),
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const StyledGrid2 = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(4)
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(5)
  }
}))

const CardStatisticsNewVisitors = () => {
  // ** Hook
  const theme = useTheme()

  const barOptions: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        distributed: true,
        columnWidth: '42%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      theme.palette.primary.main,
      hexToRGBA(theme.palette.primary.main, 0.16)
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        top: -10,
        left: -10,
        right: -10,
        bottom: -9
      }
    }
  }

  const areaOptions: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    grid: {
      show: false,
      padding: {
        top: -12,
        bottom: -9
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
              color: theme.palette.success.main
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
        color: theme.palette.success.main
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardContent sx={{ p: `${theme.spacing(4, 5)} !important` }}>
        <Grid container>
          <StyledGrid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <Typography variant='h6'>New Visitors</Typography>
              <Typography variant='body2'>Last Week</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' sx={{ mb: 2 }}>
                  23%
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'error.main' } }}>
                  <Icon icon='bx:down-arrow-alt' fontSize={18} />
                  <Typography variant='body2' sx={{ fontWeight: 500, color: 'error.main' }}>
                    8.75%
                  </Typography>
                </Box>
              </Box>
              <ReactApexcharts
                type='bar'
                width={190}
                height={140}
                options={barOptions}
                series={[{ data: [20, 60, 53, 25, 42, 86, 55] }]}
              />
            </Box>
          </StyledGrid>
          <StyledGrid2 item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <Typography variant='h6'>Activity</Typography>
              <Typography variant='body2'>Last Week</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' sx={{ mb: 2 }}>
                  82%
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'success.main' } }}>
                  <Icon icon='bx:up-arrow-alt' fontSize={18} />
                  <Typography variant='body2' sx={{ fontWeight: 500, color: 'success.main' }}>
                    19.6%
                  </Typography>
                </Box>
              </Box>
              <ReactApexcharts
                type='area'
                width={190}
                height={140}
                options={areaOptions}
                series={[{ data: [14, 22, 17, 40, 12, 35, 25] }]}
              />
            </Box>
          </StyledGrid2>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardStatisticsNewVisitors
