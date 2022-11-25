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

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface DataType {
  title: string
  amount: string
  subtitle: string
  percentage: number
  avatarIcon: ReactNode
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    amount: '$1,619',
    percentage: 18.6,
    title: 'Net Profit',
    avatarColor: 'primary',
    subtitle: '12.4k Sales',
    avatarIcon: <Icon icon='bx:trending-up' />
  },
  {
    amount: '$3,571',
    percentage: 39.6,
    title: 'Total Income',
    avatarColor: 'success',
    subtitle: 'Sales, Affiliation',
    avatarIcon: <Icon icon='bx:dollar' />
  },
  {
    amount: '$430',
    percentage: 52.8,
    title: 'Total Expenses',
    avatarColor: 'secondary',
    subtitle: 'ADVT, Marketing',
    avatarIcon: <Icon icon='bx:credit-card' />
  }
]

const CardEarningReport = () => {
  // ** Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: '52%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.primary.main, 0.1),
      hexToRGBA(theme.palette.primary.main, 0.1),
      hexToRGBA(theme.palette.primary.main, 0.1),
      hexToRGBA(theme.palette.primary.main, 0.1),
      theme.palette.primary.main,
      hexToRGBA(theme.palette.primary.main, 0.1),
      hexToRGBA(theme.palette.primary.main, 0.1)
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
          fontSize: '15px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        top: -5,
        left: -14,
        right: -16,
        bottom: -12
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Earning Report'
        subheader='Weekly Earnings Overview'
        subheaderTypographyProps={{ sx: { color: 'text.disabled' } }}
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Last Week', 'Last Month', 'Last Year']} />}
      />
      <CardContent sx={{ pt: `${theme.spacing(1)} !important`, pb: `${theme.spacing(3.75)} !important` }}>
        {data.map((item: DataType) => {
          return (
            <Box key={item.title} sx={{ mb: 4.5, display: 'flex', alignItems: 'center' }}>
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
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    '& svg': { mr: 0.5, color: 'success.main' }
                  }}
                >
                  <Typography variant='body2' sx={{ mr: 0.5, fontWeight: 500 }}>
                    {item.amount}
                  </Typography>
                  <Icon icon='bx:chevron-up' />
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    {`${item.percentage}%`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
        <ReactApexcharts type='bar' height={180} options={options} series={[{ data: [32, 98, 61, 41, 88, 47, 71] }]} />
      </CardContent>
    </Card>
  )
}

export default CardEarningReport
