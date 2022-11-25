// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider, { DividerProps } from '@mui/material/Divider'

// ** Custom Components Import
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

interface SalesData {
  title: string
  amount: string
  subtitle: string
  avatarSrc: string
}
interface VolumeData {
  title: string
  amount: string
  subtitle: string
  avatarSrc: string
  differenceNumber: number
  difference?: 'positive' | 'negative'
}

const salesData: SalesData[] = [
  {
    amount: '$98,348',
    subtitle: 'Oneplus',
    title: 'Oneplus Nord',
    avatarSrc: '/images/cards/avatar-oneplus-nord-error.png'
  },
  {
    amount: '$15,459',
    subtitle: 'Xiaomi',
    title: 'Smart Band 4',
    avatarSrc: '/images/cards/avatar-xiaomi-band.png'
  },
  {
    amount: '$4,589',
    subtitle: 'Microsoft',
    title: 'Surface Pro X ',
    avatarSrc: '/images/cards/avatar-microsoft-surface.png'
  },
  {
    amount: '$84,345',
    subtitle: 'Apple',
    title: 'iPhone 13',
    avatarSrc: '/images/cards/avatar-apple-iPhone.png'
  },
  {
    subtitle: 'Beats',
    amount: '$10,3748',
    title: 'Bluetooth Earphone',
    avatarSrc: '/images/cards/avatar-beats-headphone.png'
  }
]

const volumeData: VolumeData[] = [
  {
    subtitle: 'HP',
    amount: '12.4k',
    title: 'ENVY Laptop',
    differenceNumber: 12.4,
    avatarSrc: '/images/cards/avatar-hp-envy.png'
  },
  {
    title: 'Apple',
    amount: '74.9k',
    subtitle: 'iMac Pro',
    differenceNumber: 8.5,
    difference: 'negative',
    avatarSrc: '/images/cards/avatar-apple-iMac.png'
  },
  {
    amount: '4.4k',
    subtitle: 'Fitbit',
    title: 'Smart Watch',
    differenceNumber: 17.6,
    avatarSrc: '/images/cards/avatar-fitbit-watch.png'
  },
  {
    amount: '12.34k',
    subtitle: 'Oneplus',
    title: 'Oneplus Nord',
    differenceNumber: 13.9,
    avatarSrc: '/images/cards/avatar-oneplus-nord-success.png'
  },
  {
    amount: '8.65k',
    title: 'Pixel 4a',
    subtitle: 'Google',
    difference: 'negative',
    differenceNumber: 11.8,
    avatarSrc: '/images/cards/avatar-google-pixel.png'
  }
]

// Styled Divider component
const Divider = styled(MuiDivider)<DividerProps>(({ theme }) => ({
  margin: 0,
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const CrmTopProducts = () => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          sx={{ p: theme => theme.spacing(4.75, 5.5) }}
          title={
            <Typography variant='h6' sx={{ mr: 1.5 }}>
              Top Products by
              <Typography variant='h6' component='span' sx={{ ml: 1.5, color: 'primary.main' }}>
                Sales
              </Typography>
            </Typography>
          }
          action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Refresh', 'Update']} />}
        />
        <CardContent sx={{ pt: theme => `${theme.spacing(4.5)} !important` }}>
          {salesData.map((item: SalesData, index: number) => {
            const { title, amount, subtitle, avatarSrc } = item

            return (
              <Box
                key={index}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== salesData.length - 1 ? 5.5 : 0 }}
              >
                <Avatar alt={title} variant='rounded' src={avatarSrc} sx={{ mr: 3, width: 38, height: 38 }} />
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
                    <Typography sx={{ color: 'text.secondary' }}>{title}</Typography>
                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                      {subtitle}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>{amount}</Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>

      <Divider flexItem />

      <Box sx={{ width: '100%' }}>
        <CardHeader
          sx={{ p: theme => theme.spacing(4.75, 5.5) }}
          title={
            <Typography variant='h6' sx={{ mr: 1.5 }}>
              Top Products by
              <Typography variant='h6' component='span' sx={{ ml: 1.5, color: 'primary.main' }}>
                Volume
              </Typography>
            </Typography>
          }
          action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Share', 'Refresh', 'Update']} />}
        />
        <CardContent sx={{ pt: theme => `${theme.spacing(4.5)} !important` }}>
          {volumeData.map((item: VolumeData, index: number) => {
            const { title, amount, subtitle, avatarSrc, difference = 'positive', differenceNumber } = item

            return (
              <Box
                key={index}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== volumeData.length - 1 ? 5.5 : 0 }}
              >
                <Avatar alt={title} variant='rounded' src={avatarSrc} sx={{ mr: 3, width: 38, height: 38 }} />
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
                    <Typography sx={{ color: 'text.secondary' }}>{title}</Typography>
                    <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                      {subtitle}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 3.5, fontWeight: 600, color: 'text.secondary' }}>{amount}</Typography>
                    <CustomChip
                      rounded
                      size='small'
                      skin='light'
                      sx={{ fontWeight: 500 }}
                      color={difference === 'positive' ? 'success' : 'error'}
                      label={`${difference === 'positive' ? '+' : '-'}${differenceNumber}%`}
                    />
                  </Box>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default CrmTopProducts
