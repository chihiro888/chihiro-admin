// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabPanel from '@mui/lab/TabPanel'
import Avatar from '@mui/material/Avatar'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

interface DataType {
  stats: string
  title: string
  avatarSrc: string
  difference: number
  trendNumber: number
  progressValue: number
  trend?: 'positive' | 'negative'
  series: { name: string; data: number[] }[]
}

const series = [{ data: [24, 21, 30, 22, 42, 26, 35, 29] }]

const data: { [key: string]: DataType } = {
  income: {
    difference: 39,
    title: 'Income',
    stats: '$459.1k',
    trendNumber: 42.9,
    progressValue: 6.5,
    avatarSrc: '/images/cards/wallet-with-bg.png',
    series: [{ name: 'Income', data: [24, 21, 30, 22, 42, 26, 35, 29] }]
  },
  expenses: {
    difference: 16,
    stats: '$316.5k',
    title: 'Expenses',
    trend: 'negative',
    trendNumber: 27.8,
    progressValue: 7.2,
    avatarSrc: '/images/cards/paypal.png',
    series: [{ name: 'Expenses', data: [24, 21, 30, 22, 42, 26, 35, 29] }]
  },
  profit: {
    difference: 28,
    title: 'Profit',
    stats: '$147.9k',
    trendNumber: 35.1,
    progressValue: 4.2,
    avatarSrc: '/images/cards/chart.png',
    series: [{ name: 'Profit', data: [24, 21, 30, 22, 42, 26, 35, 29] }]
  }
}

// Styled TabList component
const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  minHeight: 40,
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiTab-root': {
    minHeight: 40,
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    borderRadius: theme.shape.borderRadius,
    '&.Mui-selected': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const AnalyticsTabsWithChart = () => {
  // ** State
  const [value, setValue] = useState<string>('income')

  // ** Hook
  const theme = useTheme()

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    grid: {
      strokeDashArray: 4.5,
      borderColor: theme.palette.divider,
      padding: {
        left: 0,
        top: -18,
        right: 11,
        bottom: 7
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.25,
        opacityFrom: 0.5,
        stops: [0, 95, 100],
        shadeIntensity: 0.6,
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: theme.palette.primary.main
            },
            {
              offset: 100,
              opacity: 0.2,
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
        color: theme.palette.primary.main
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      crosshairs: {
        stroke: { color: `rgba(${theme.palette.customColors.main}, 0.2)` }
      },
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: {
      min: 10,
      max: 50,
      show: false,
      tickAmount: 4
    },
    markers: {
      size: 8,
      strokeWidth: 6,
      strokeOpacity: 1,
      hover: { size: 8 },
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 8,
          seriesIndex: 0,
          fillColor: theme.palette.common.white,
          strokeColor: theme.palette.primary.main,
          dataPointIndex: series[0].data.length - 1
        }
      ]
    }
  }

  return (
    <Card>
      <TabContext value={value}>
        <CardContent sx={{ p: `${theme.spacing(5)} !important`, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <TabList variant='scrollable' scrollButtons='auto' onChange={handleChange} aria-label='tab widget card'>
            <Tab value='income' label='Income' />
            <Tab value='expenses' label='Expenses' />
            <Tab value='profit' label='Profit' />
          </TabList>
        </CardContent>
        <TabPanel value={value} sx={{ border: 0, boxShadow: 0, p: '0 !important', backgroundColor: 'transparent' }}>
          <Box sx={{ p: 5, display: 'flex', alignItems: 'center' }}>
            <Avatar variant='rounded' src={data[value].avatarSrc} sx={{ mr: 3.5, width: 46, height: 46 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ color: 'text.secondary' }}>{`Total ${data[value].title}`}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: 'success.main' } }}>
                <Typography variant='h6' sx={{ mr: 0.5 }}>
                  {data[value].stats}
                </Typography>
                <Icon icon='bx:chevron-up' />
                <Typography variant='body2' sx={{ fontWeight: 500, color: 'success.main' }}>
                  {`${data[value].trendNumber}%`}
                </Typography>
              </Box>
            </Box>
          </Box>
          <ReactApexcharts type='area' height={222} options={options} series={series} />
          <Box sx={{ p: 5, pt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ mr: 4, position: 'relative' }}>
              <CircularProgress
                size={50}
                value={100}
                thickness={2}
                variant='determinate'
                sx={{
                  position: 'absolute',
                  color: 'customColors.trackBg',
                  '& .MuiCircularProgress-circle': { strokeWidth: 2 }
                }}
              />
              <CircularProgress
                size={50}
                thickness={4}
                color='primary'
                variant='determinate'
                value={data[value].progressValue * 10}
                sx={{ '& .MuiCircularProgress-circle': { strokeWidth: 4, strokeLinecap: 'round' } }}
              />
              <Box sx={{ mt: -1, top: '50%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)' }}>
                <Typography variant='body2' sx={{ fontWeight: 500 }}>
                  {`${data[value].progressValue}k`}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ color: 'text.secondary' }}>{`${data[value].title} this week`}</Typography>
              <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                {`$${data[value].difference}k less than last week`}
              </Typography>
            </Box>
          </Box>
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AnalyticsTabsWithChart
