// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Alert from '@mui/material/Alert'
import TabPanel from '@mui/lab/TabPanel'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  minHeight: 40,
  marginBottom: theme.spacing(4),
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

const StepPayment = ({ handleNext }: { handleNext: () => void }) => {
  // ** State
  const [value, setValue] = useState<string>('cc')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8} xl={9}>
        <Alert
          severity='success'
          icon={<Icon icon='bx:purchase-tag' />}
          sx={{
            mb: 4,
            '& .MuiAlert-icon': {
              width: 38,
              alignItems: 'center',
              justifyContent: 'center',
              height: '38px !important'
            }
          }}
        >
          <AlertTitle sx={{ fontWeight: '700 !important' }}>Bank Offers</AlertTitle>
          <div>
            <Typography sx={{ color: 'success.main' }}>
              - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards
            </Typography>
          </div>
        </Alert>
        <TabContext value={value}>
          <TabList
            variant='scrollable'
            scrollButtons='auto'
            onChange={handleChange}
            aria-label='customized tabs example'
          >
            <Tab value='cc' label='Card' />
            <Tab value='cod' label='Cash On Delivery' />
            <Tab value='gc' label='Gift Card' />
          </TabList>
          <Grid
            container
            sx={{ mt: 5, '& .MuiTabPanel-root': { p: 0, border: 0, boxShadow: 0, backgroundColor: 'transparent' } }}
          >
            <Grid item md={8} xs={12}>
              <TabPanel value='cc'>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField fullWidth type='number' label='Card Number' placeholder='1356 3215 6548 7898' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Name' placeholder='John Doe' />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField fullWidth label='Expiry Date' placeholder='MM/YY' />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      fullWidth
                      label='CVV'
                      placeholder='654'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='start'>
                            <Tooltip title='Card Verification Value'>
                              <Box component='span' sx={{ display: 'inline-flex', '& svg': { cursor: 'pointer' } }}>
                                <Icon icon='bx:help-circle' fontSize={20} />
                              </Box>
                            </Tooltip>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label='Save Card for future billing?'
                      sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant='contained' sx={{ mr: 5 }} onClick={handleNext}>
                      Submit
                    </Button>
                    <Button type='reset' variant='outlined' color='secondary'>
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value='cod' sx={{ p: 0 }}>
                <Typography sx={{ mb: 4 }}>
                  Cash on Delivery is a type of payment method where the recipient make payment for the order at the
                  time of delivery rather than in advance.
                </Typography>
                <Button variant='contained' onClick={handleNext}>
                  Pay On Delivery
                </Button>
              </TabPanel>
              <TabPanel value='gc' sx={{ p: 0 }}>
                <Typography sx={{ mb: 4, fontWeight: 500 }}>Enter Gift Card Details</Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField fullWidth type='number' label='Gift Card Number' placeholder='Gift Card Number' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth type='number' label='Gift Card Pin' placeholder='Gift Card Pin' />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant='contained' onClick={handleNext}>
                      Redeem Gift Card
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </TabContext>
      </Grid>
      <Grid item xs={12} lg={4} xl={3}>
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
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Price Details</Typography>
            <Grid container>
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
          <CardContent sx={{ p: 4, pb: theme => `${theme.spacing(4.5)} !important` }}>
            <Grid container sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 700, color: 'text.secondary' }}>Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 600, textAlign: 'right', color: 'text.secondary' }}>$1100.00</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ fontWeight: 700, color: 'text.secondary' }}>Deliver to:</Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ textAlign: 'right' }}>
                  <CustomChip rounded size='small' skin='light' color='primary' label='Home' />
                </Box>
              </Grid>
            </Grid>

            <Box component='address' sx={{ mb: 4.5, fontStyle: 'normal', color: 'text.secondary' }}>
              <Box component='span' sx={{ fontWeight: 600 }}>
                {' '}
                John Doe (Default),
              </Box>
              <br />
              4135 Parkway Street,
              <br />
              Los Angeles, CA, 90017.
              <br />
              Mobile : +1 906 568 2332
            </Box>
            <Link href='/' passHref>
              <Box
                component='a'
                onClick={(e: SyntheticEvent) => e.preventDefault()}
                sx={{ mr: 2, color: 'primary.main', textDecoration: 'none' }}
              >
                Change address
              </Box>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default StepPayment
