// ** React Imports
import { SyntheticEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import List, { ListProps } from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const StyledList = styled(List)<ListProps>(({ theme }) => ({
  '& .MuiListItem-root': {
    padding: theme.spacing(4),
    border: `1px solid ${theme.palette.divider}`,
    '&:first-of-type': {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    '&:last-of-type': {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
    },
    '&:not(:last-of-type)': {
      borderBottom: 0
    },
    '& .MuiListItemText-root': {
      marginTop: 0,

      '& .MuiTypography-root': {
        fontWeight: 500,
        color: theme.palette.text.secondary
      }
    },
    '& .remove-item': {
      top: '0.5rem',
      right: '0.5rem',
      position: 'absolute',
      color: theme.palette.text.secondary
    }
  }
}))

const StepCart = ({ handleNext }: { handleNext: () => void }) => {
  return (
    <Grid container spacing={6}>
      <Grid item lg={8} xs={12}>
        <Alert
          severity='success'
          icon={<Icon icon='bx:purchase-tag' />}
          sx={{
            mb: 6,
            '& .MuiAlert-icon': {
              width: 38,
              alignItems: 'center',
              justifyContent: 'center',
              height: '38px !important'
            }
          }}
        >
          <AlertTitle sx={{ fontWeight: '700 !important' }}>Available Offers</AlertTitle>
          <div>
            <Typography sx={{ color: 'success.main' }}>
              - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards
            </Typography>
            <Typography sx={{ color: 'success.main' }}>
              - 25% Cashback Voucher of up to $60 on first ever PayPal transaction. TCA
            </Typography>
          </div>
        </Alert>
        <Typography sx={{ mb: 2, fontSize: '1.125rem', fontWeight: 500 }}>My Shopping Bag (2 Items)</Typography>
        <StyledList>
          <ListItem>
            <ListItemAvatar>
              <img width={100} src='/images/products/google-home.png' alt='Google Home' />
            </ListItemAvatar>
            <IconButton size='small' className='remove-item' sx={{ color: 'text.primary' }}>
              <Icon icon='bx:x' fontSize={20} />
            </IconButton>
            <Grid container>
              <Grid item xs={12} md={8}>
                <ListItemText primary='Google - Google Home - White' />
                <div>
                  <Box sx={{ mt: 4, mb: 1, display: 'flex' }}>
                    <Typography sx={{ color: 'text.disabled' }}>Sold By:</Typography>
                    <Typography sx={{ mx: 1, color: 'primary.main', cursor: 'pointer' }}>Google</Typography>
                    <CustomChip rounded size='small' skin='light' color='success' label='In Stock' />
                  </Box>
                  <Rating name='google-nest-rating' value={4} readOnly />
                  <div>
                    <TextField size='small' type='number' defaultValue='1' sx={{ maxWidth: 75 }} />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: 'flex',
                    mt: { xs: 0, md: 4 },
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-start', md: 'flex-end' }
                  }}
                >
                  <Box sx={{ display: 'flex', my: { xs: 3, md: 6 } }}>
                    <Typography sx={{ color: 'primary.main' }}>$299</Typography>
                    <Typography sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>/$359</Typography>
                  </Box>
                  <div>
                    <Button variant='outlined' size='small' color='secondary'>
                      Move to wishlist
                    </Button>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <img width={100} src='/images/products/iphone-11.png' alt='iphone 11' />
            </ListItemAvatar>
            <Grid container>
              <Grid item xs={12} md={8}>
                <ListItemText primary='Apple iPhone 11 (64GB, Black)' />
                <div>
                  <Box sx={{ mt: 4, display: 'flex' }}>
                    <Typography sx={{ color: 'text.disabled' }}>Sold By:</Typography>
                    <Typography sx={{ mx: 2, color: 'primary.main', cursor: 'pointer' }}>Apple</Typography>
                    <CustomChip rounded size='small' skin='light' color='success' label='In Stock' />
                  </Box>
                  <Rating name='iphone-11-rating' value={4} readOnly />
                  <div>
                    <TextField size='small' type='number' defaultValue='1' sx={{ maxWidth: 75 }} />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <IconButton size='small' className='remove-item' sx={{ color: 'text.primary' }}>
                  <Icon icon='bx:x' fontSize={20} />
                </IconButton>
                <Box
                  sx={{
                    mt: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-start', md: 'flex-end' }
                  }}
                >
                  <Box sx={{ display: 'flex', my: 6 }}>
                    <Typography sx={{ color: 'primary.main' }}>$299</Typography>
                    <Typography sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>/$359</Typography>
                  </Box>
                  <div>
                    <Button variant='outlined' size='small' color='secondary'>
                      Move to wishlist
                    </Button>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </ListItem>
        </StyledList>
        <StyledList sx={{ '& svg': { cursor: 'pointer' } }}>
          <ListItem sx={{ py: theme => `${theme.spacing(2.5)} !important`, justifyContent: 'space-between' }}>
            <Link href='/' passHref>
              <Box
                component='a'
                onClick={(e: SyntheticEvent) => e.preventDefault()}
                sx={{ color: 'text.secondary', textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Add more products from wishlist
              </Box>
            </Link>
            <Icon icon='bx:chevron-right' />
          </ListItem>
        </StyledList>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Card
          sx={{
            mb: 4,
            borderRadius: 1,
            boxShadow: 'none',
            border: '1px solid',
            borderColor: 'divider',
            background: 'transparent'
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Offer</Typography>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <TextField fullWidth sx={{ mr: 4 }} size='small' placeholder='Enter Promo Code' />
              <Button variant='outlined'>Apply</Button>
            </Box>
            <Box sx={{ p: 4, borderRadius: 1, backgroundColor: 'action.hover' }}>
              <Typography sx={{ mb: 4, fontWeight: 600, color: 'text.secondary' }}>
                Buying gift for a loved one?
              </Typography>
              <Typography sx={{ mb: 4, color: 'text.secondary' }}>
                Gift wrap and personalized message on card, Only for $2.
              </Typography>

              <Link href='/' passHref>
                <Box
                  component='a'
                  onClick={(e: SyntheticEvent) => e.preventDefault()}
                  sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 600 }}
                >
                  Add a gift wrap
                </Box>
              </Link>
            </Box>
          </CardContent>
          <Divider sx={{ my: '0 !important' }} />
          <CardContent sx={{ p: 4, pb: theme => `${theme.spacing(2)} !important` }}>
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Price Details</Typography>
            <Grid container>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ color: 'text.secondary' }}>Bag Total</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ textAlign: 'right', color: 'text.secondary' }}>$1198.00</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ color: 'text.secondary' }}>Coupon Discount</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ textAlign: 'right', color: 'success.main' }}>-$98.00</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ color: 'text.secondary' }}>Order Total</Typography>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <Typography sx={{ textAlign: 'right', color: 'text.secondary' }}>$1100.00</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: 'text.secondary' }}>Delivery Charges</Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Typography sx={{ mr: 2, textDecoration: 'line-through', color: 'text.secondary' }}>$5.00</Typography>
                  <CustomChip rounded size='small' skin='light' color='success' label='Free' />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ my: '0 !important' }} />
          <CardContent sx={{ p: theme => `${theme.spacing(4)} !important` }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 700, color: 'text.secondary' }}>Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 600, textAlign: 'right', color: 'text.secondary' }}>$1100.00</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Button fullWidth variant='contained' onClick={handleNext}>
          Place Order
        </Button>
      </Grid>
    </Grid>
  )
}

export default StepCart
