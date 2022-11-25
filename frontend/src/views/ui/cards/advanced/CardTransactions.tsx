// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  title: string
  imgSrc: string
  amount: string
  subtitle: string
}

const data: DataType[] = [
  {
    title: 'Paypal',
    amount: '+82.6',
    subtitle: 'Send money ',
    imgSrc: '/images/cards/paypal.png'
  },
  {
    title: 'Wallet',
    amount: '+270.69',
    subtitle: "Mac'D",
    imgSrc: '/images/cards/wallet.png'
  },
  {
    title: 'Transfer',
    amount: '+637.91',
    subtitle: 'Refund',
    imgSrc: '/images/cards/chart.png'
  },
  {
    amount: '-838.71',
    title: 'Credit Card',
    subtitle: 'Ordered Food',
    imgSrc: '/images/cards/credit-card.png'
  },
  {
    title: 'Wallet',
    amount: '+203.33',
    subtitle: 'Starbucks',
    imgSrc: '/images/cards/wallet.png'
  },
  {
    amount: '-92.45',
    title: 'Mastercard',
    subtitle: 'Ordered Food',
    imgSrc: '/images/cards/atm-card.png'
  }
]

const CardTransactions = () => {
  return (
    <Card>
      <CardHeader
        title='Transactions'
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.primary' } }}
          />
        }
      />
      <CardContent>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? 6 : undefined
              }}
            >
              <Avatar src={item.imgSrc} variant='rounded' sx={{ mr: 3.5, width: 38, height: 38 }} />
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
                  <Typography variant='body2' sx={{ mb: 0.5, color: 'text.disabled' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontWeight: 500 }}>{item.subtitle}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ mr: 3, fontWeight: 500 }}>{item.amount}</Typography>
                  <Typography sx={{ color: 'text.disabled' }}>USD</Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardTransactions
