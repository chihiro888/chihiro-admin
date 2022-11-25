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

interface DataType {
  title: string
  subtitle: string
  changePercent: number
  change: 'positive' | 'negative'
}

const data: DataType[] = [
  {
    change: 'positive',
    changePercent: 12.8,
    title: 'Impressions',
    subtitle: '12.4k Visits'
  },
  {
    change: 'negative',
    changePercent: 8.3,
    title: 'Added To Cart',
    subtitle: '32 Product in cart'
  },
  {
    title: 'Checkout',
    change: 'positive',
    changePercent: 9.12,
    subtitle: '21 Product checkout'
  },
  {
    title: 'Purchased',
    change: 'positive',
    changePercent: 2.24,
    subtitle: '12 Orders'
  }
]

const series = [{ data: [30, 58, 45, 68] }]

const EcommerceConversionRate = () => {
  // ** Hooks
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 8,
        blur: 3,
        left: 3,
        enabled: true,
        opacity: 0.14,
        color: theme.palette.primary.main
      }
    },
    grid: {
      show: false,
      padding: {
        top: -21,
        left: -5,
        bottom: -8
      }
    },
    tooltip: { enabled: false },
    colors: [hexToRGBA(theme.palette.primary.main, 1)],
    markers: {
      size: 6,
      offsetX: -2,
      offsetY: -1,
      strokeWidth: 5,
      strokeOpacity: 1,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 7,
          seriesIndex: 0,
          strokeColor: theme.palette.primary.main,
          fillColor: theme.palette.background.paper,
          dataPointIndex: series[0].data.length - 1
        }
      ]
    },
    stroke: {
      width: 5,
      curve: 'smooth',
      lineCap: 'round'
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardHeader
        sx={{ pb: 2 }}
        title='Conversion Rate'
        subheader='Compared To Last Month'
        subheaderTypographyProps={{ sx: { color: 'text.disabled' } }}
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Refresh', 'Update']} />}
      />
      <CardContent sx={{ pt: `${theme.spacing(2.5)} !important` }}>
        <Box
          sx={{ mb: 3.25, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: 'success.main' } }}>
            <Typography variant='h4' sx={{ mr: 1.5 }}>
              8.72%
            </Typography>
            <Icon icon='bx:chevron-up' />
            <Typography variant='body2' sx={{ fontWeight: 500, color: 'success.main' }}>
              4.8%
            </Typography>
          </Box>
          <ReactApexcharts type='line' width={125} height={70} options={options} series={series} />
        </Box>
        {data.map((row: DataType, index: number) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              mb: index !== data.length - 1 ? 4 : undefined
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ mb: 0.75, fontWeight: 500 }}>{row.title}</Typography>
              <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                {row.subtitle}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                '& svg': { mr: 3, color: row.change === 'positive' ? 'success.main' : 'error.main' }
              }}
            >
              {row.change === 'positive' ? (
                <Icon icon='bx:up-arrow-alt' fontSize={18} />
              ) : (
                <Icon icon='bx:down-arrow-alt' fontSize={18} />
              )}
              <Typography variant='body2' sx={{ fontWeight: 500 }}>
                {`${row.change === 'negative' ? '-' : ''}${row.changePercent}%`}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

export default EcommerceConversionRate
