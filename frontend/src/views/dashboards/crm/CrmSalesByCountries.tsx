// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface DataType {
  sales: string
  title: string
  trend: ReactNode
  subtitle: string
  trendDir: string
  avatarAlt: string
  avatarSrc: string
  trendNumber: string
  avatarColor: ThemeColor
}

const data: DataType[] = [
  {
    sales: '894k',
    trendDir: 'up',
    avatarAlt: 'USA',
    title: '$8,656k',
    trendNumber: '25.8%',
    avatarColor: 'success',
    avatarSrc: '/images/cards/usa.png',
    subtitle: 'United states of america',
    trend: <Icon icon='bx:chevron-up' />
  },
  {
    sales: '645k',
    avatarAlt: 'BR',
    title: '$2,415k',
    trendDir: 'down',
    subtitle: 'Brazil',
    trendNumber: '-6.2%',
    avatarColor: 'error',
    avatarSrc: '/images/cards/brazil.png',
    trend: <Icon icon='bx:chevron-down' />
  },
  {
    sales: '148k',
    title: '$865k',
    trendDir: 'up',
    avatarAlt: 'IN',
    subtitle: 'India',
    trendNumber: '12.4%',
    avatarColor: 'warning',
    avatarSrc: '/images/cards/india.png',
    trend: <Icon icon='bx:chevron-up' />
  },
  {
    sales: '86k',
    title: '$745k',
    avatarAlt: 'AU',
    trendDir: 'down',
    subtitle: 'Australia',
    trendNumber: '-11.9%',
    avatarColor: 'secondary',
    avatarSrc: '/images/cards/australia.png',
    trend: <Icon icon='bx:chevron-down' />
  },
  {
    sales: '42k',
    title: '$45k',
    trendDir: 'up',
    avatarAlt: 'BE',
    subtitle: 'Belgium',
    trendNumber: '16.2%',
    avatarColor: 'error',
    avatarSrc: '/images/cards/belgium.png',
    trend: <Icon icon='bx:chevron-up' />
  },
  {
    sales: '8k',
    title: '$12k',
    trendDir: 'up',
    avatarAlt: 'CH',
    subtitle: 'China',
    trendNumber: '14.8%',
    avatarColor: 'primary',
    avatarSrc: '/images/cards/china.png',
    trend: <Icon icon='bx:chevron-up' />
  }
]

const CrmSalesByCountries = () => {
  return (
    <Card>
      <CardHeader
        title='Sales by Countries'
        subheader='Monthly Sales Overview'
        subheaderTypographyProps={{ sx: { color: 'text.disabled' } }}
        action={
          <OptionsMenu iconButtonProps={{ size: 'small' }} options={['Last 28 Days', 'Last Month', 'Last Year']} />
        }
      />
      <CardContent>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? 4.5 : undefined
              }}
            >
              <Avatar alt={item.avatarAlt} src={item.avatarSrc} sx={{ mr: 4, width: 38, height: 38 }}>
                {item.avatarAlt}
              </Avatar>

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
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 1, fontWeight: 500 }}>{item.title}</Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& svg': { mr: 0.5, color: item.trendDir === 'down' ? 'error.main' : 'success.main' }
                      }}
                    >
                      {item.trend}
                      <Typography
                        variant='body2'
                        sx={{ fontWeight: 500, color: item.trendDir === 'down' ? 'error.main' : 'success.main' }}
                      >
                        {item.trendNumber}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 500 }}>{item.sales}</Typography>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CrmSalesByCountries
