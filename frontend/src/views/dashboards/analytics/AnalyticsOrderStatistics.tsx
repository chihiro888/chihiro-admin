// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Import
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

interface DataType {
  title: string
  subtitle: string
  avatarIcon: ReactNode
  amount: string | number
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    amount: '82.5k',
    title: 'Electronic',
    avatarColor: 'primary',
    subtitle: 'Mobile, Earbuds, TV',
    avatarIcon: <Icon icon='bx:mobile-alt' />
  },
  {
    amount: '23.8k',
    title: 'Fashion',
    avatarColor: 'success',
    subtitle: 'Tshirt, Jeans, Shoes',
    avatarIcon: <Icon icon='bx:closet' />
  },
  {
    amount: 849,
    title: 'Decor',
    avatarColor: 'info',
    subtitle: 'Fine Art, Dining',
    avatarIcon: <Icon icon='bx:home' />
  },
  {
    amount: 99,
    title: 'Sports',
    avatarColor: 'secondary',
    subtitle: 'Football, Cricket Kit',
    avatarIcon: <Icon icon='bx:football' />
  }
]

const AnalyticsOrderStatistics = () => {
  // ** Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      sparkline: { enabled: true },
      animations: { enabled: false }
    },
    stroke: {
      width: 6,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['Fashion', 'Electronic', 'Sports', 'Decor'],
    colors: [
      theme.palette.success.main,
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.info.main
    ],
    grid: {
      padding: {
        top: -7,
        bottom: 5
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              offsetY: 17,
              fontSize: '14px',
              color: theme.palette.text.disabled,
              fontFamily: theme.typography.fontFamily
            },
            value: {
              offsetY: -17,
              fontSize: '24px',
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily
            },
            total: {
              show: true,
              label: 'Weekly',
              fontSize: '14px',
              formatter: () => '38%',
              color: theme.palette.text.disabled,
              fontFamily: theme.typography.fontFamily
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        sx={{ pb: 2.5 }}
        title='Order Statistics'
        subheader='42.82k Total Sales'
        subheaderTypographyProps={{ sx: { color: 'text.disabled' } }}
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Refresh', 'Edit']} />}
      />
      <CardContent>
        <Box sx={{ mb: 7.5, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Box sx={{ mt: 7, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4' sx={{ mb: 0.5 }}>
              8,258
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Total Orders</Typography>
          </Box>
          <ReactApexcharts type='donut' width={110} height={125} options={options} series={[45, 80, 20, 40]} />
        </Box>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? 5.5 : undefined
              }}
            >
              <CustomAvatar
                skin='light'
                variant='rounded'
                color={item.avatarColor}
                sx={{ mr: 3, width: 38, height: 38 }}
              >
                {item.avatarIcon}
              </CustomAvatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Typography variant='body2' sx={{ fontWeight: 500 }}>
                  {item.amount}
                </Typography>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default AnalyticsOrderStatistics
