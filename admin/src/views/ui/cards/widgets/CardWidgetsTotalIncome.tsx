// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

interface DataType {
  title: string
  stats: string
  avatarSrc: string
  trendNumber: number
  avatarWidth: number
  avatarHeight: number
  trend?: 'positive' | 'negative'
}

const series = [{ name: 'Income', data: [3350, 3350, 4800, 4800, 2950, 2950, 1800, 1800, 3750, 3750, 5700, 5700] }]

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const data: DataType[] = [
  {
    title: 'Income',
    avatarWidth: 20,
    stats: '$42,845',
    avatarHeight: 22,
    trendNumber: 2.34,
    avatarSrc: '/images/cards/paypal-primary.png'
  },
  {
    avatarWidth: 20,
    title: 'Expense',
    stats: '$38,658',
    avatarHeight: 22,
    trend: 'negative',
    trendNumber: 1.15,
    avatarSrc: '/images/cards/shopping-bag.png'
  },
  {
    title: 'Profit',
    avatarWidth: 22,
    stats: '$18,220',
    avatarHeight: 21,
    trendNumber: 1.34,
    avatarSrc: '/images/cards/wallet-info.png'
  }
]

const CardWidgetsTotalIncome = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 14,
        left: 0,
        blur: 4,
        opacity: 0.15,
        enabled: true,
        color: theme.palette.primary.main
      }
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 4,
      curve: 'straight'
    },
    grid: {
      borderColor: theme.palette.divider,
      padding: {
        top: 5,
        right: 6,
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
              opacity: 0.2,
              color: theme.palette.primary.main
            },
            {
              opacity: 0,
              offset: 100,
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
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
      labels: {
        formatter: value => `$${value / 1000}k`,
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    }
  }

  return (
    <Card>
      <Grid container>
        <StyledGrid item xs={12} md={8}>
          <CardHeader
            sx={{ p: 5, pb: 0 }}
            title='Total Income'
            subheader='Yearly report overview'
            subheaderTypographyProps={{ sx: { fontSize: '1rem !important', color: 'text.disabled' } }}
          />
          <ReactApexcharts type='area' height={291} options={options} series={series} />
        </StyledGrid>
        <Grid item xs={12} md={4}>
          <CardHeader
            title='Report'
            sx={{ p: 5, pt: 4 }}
            subheader='Monthly Avg. $45.578k'
            subheaderTypographyProps={{ sx: { fontSize: '1rem !important', color: 'text.disabled' } }}
            action={
              <OptionsMenu iconButtonProps={{ size: 'small' }} options={['Last Week', 'Last Month', 'Last Year']} />
            }
          />
          <CardContent sx={{ pt: `${theme.spacing(2)} !important` }}>
            {data.map((item: DataType, index: number) => (
              <Box
                key={index}
                sx={{
                  py: 2,
                  px: 3,
                  display: 'flex',
                  borderRadius: 1,
                  alignItems: 'center',
                  backgroundColor: 'background.default',
                  mb: index !== data.length - 1 ? 4 : undefined
                }}
              >
                <Avatar
                  variant='rounded'
                  sx={{ mr: 3, width: 44, height: 44, boxShadow: 6, backgroundColor: 'background.paper' }}
                >
                  <img alt='avatar image' src={item.avatarSrc} width={item.avatarWidth} height={item.avatarHeight} />
                </Avatar>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: 'text.secondary' }}>{item.title}</Typography>
                    <Typography sx={{ fontWeight: 500, fontSize: '1.125rem' }}>{item.stats}</Typography>
                  </Box>
                  <Typography
                    variant='body2'
                    sx={{ mb: 0.5, fontWeight: 500, color: `${item.trend === 'negative' ? 'error' : 'success'}.main` }}
                  >
                    {`${item.trend === 'negative' ? '-' : '+'}${item.trendNumber}k`}
                  </Typography>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardWidgetsTotalIncome
