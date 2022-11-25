// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import AlertTitle from '@mui/material/AlertTitle'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import LinearProgress from '@mui/material/LinearProgress'
import TableContainer from '@mui/material/TableContainer'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import Payment from 'payment'
import Cards, { Focused } from 'react-credit-cards'

// ** Demo Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'
import UserSubscriptionDialog from 'src/views/apps/user/view/UserSubscriptionDialog'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import { CustomRadioIconsData, CustomRadioIconsProps } from 'src/@core/components/custom-radio/types'

// ** Styled Component Imports
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

interface IconType {
  icon: CustomRadioIconsProps['icon']
  iconProps: CustomRadioIconsProps['iconProps']
}
interface DataType {
  name: string
  imgSrc: string
  imgAlt: string
  cardCvc: string
  expiryDate: string
  cardNumber: string
  cardStatus?: string
  badgeColor?: ThemeColor
}

// ** Styled <sup> component
const Sup = styled('sup')(({ theme }) => ({
  top: '0.2rem',
  left: '-0.6rem',
  position: 'absolute',
  color: theme.palette.primary.main
}))

// ** Styled <sub> component
const Sub = styled('sub')({
  fontWeight: 300,
  fontSize: '1rem',
  alignSelf: 'flex-end'
})

const data: DataType[] = [
  {
    cardCvc: '587',
    expiryDate: '12/26',
    imgAlt: 'Mastercard',
    name: 'Kaith Morrison',
    cardNumber: '5577 0000 5577 9856',
    imgSrc: '/images/logos/mastercard.png'
  },
  {
    cardCvc: '681',
    imgAlt: 'Visa card',
    expiryDate: '10/24',
    name: 'Tom McBride',
    badgeColor: 'primary',
    cardStatus: 'Primary',
    cardNumber: '4532 3616 2070 6542',
    imgSrc: '/images/logos/visa.png'
  },
  {
    cardCvc: '3845',
    expiryDate: '10/27',
    name: 'Mildred Wagner',
    imgAlt: 'American Express card',
    cardNumber: '3700 000000 5896',
    imgSrc: '/images/logos/american-express.png'
  }
]

const radioData: CustomRadioIconsData[] = [
  {
    value: 'home',
    title: 'Home',
    isSelected: true,
    content: 'Delivery time (9am – 9pm)'
  },
  {
    value: 'office',
    title: 'Office',
    content: 'Delivery time (9am – 5pm)'
  }
]

const icons: IconType[] = [
  { icon: 'bx:home', iconProps: { fontSize: '2rem', style: { marginBottom: 16 } } },
  { icon: 'bx:briefcase', iconProps: { fontSize: '2rem', style: { marginBottom: 16 } } }
]

const UserViewBilling = () => {
  const initialSelected: string = radioData.filter(item => item.isSelected)[
    radioData.filter(item => item.isSelected).length - 1
  ].value

  // ** States
  const [cvc, setCvc] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [focus, setFocus] = useState<Focused>()
  const [cardId, setCardId] = useState<number>(0)
  const [expiry, setExpiry] = useState<string>('')
  const [cardNumber, setCardNumber] = useState<string>('')
  const [dialogTitle, setDialogTitle] = useState<string>('Add')
  const [selected, setSelected] = useState<string>(initialSelected)
  const [openEditCard, setOpenEditCard] = useState<boolean>(false)
  const [openAddressCard, setOpenAddressCard] = useState<boolean>(false)
  const [openUpgradePlans, setOpenUpgradePlans] = useState<boolean>(false)
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState<boolean>(false)

  // Handle Edit Card dialog and get card ID
  const handleEditCardClickOpen = (id: number) => {
    setDialogTitle('Edit')
    setCardId(id)
    setCardNumber(data[id].cardNumber)
    setName(data[id].name)
    setCvc(data[id].cardCvc)
    setExpiry(data[id].expiryDate)
    setOpenEditCard(true)
  }

  const handleAddCardClickOpen = () => {
    setDialogTitle('Add')
    setCardNumber('')
    setName('')
    setCvc('')
    setExpiry('')
    setOpenEditCard(true)
  }

  const handleEditCardClose = () => {
    setDialogTitle('Add')
    setCardNumber('')
    setName('')
    setCvc('')
    setExpiry('')
    setOpenEditCard(false)
  }

  // Handle Upgrade Plan dialog
  const handleUpgradePlansClickOpen = () => setOpenUpgradePlans(true)
  const handleUpgradePlansClose = () => setOpenUpgradePlans(false)

  const handleBlur = () => setFocus(undefined)

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value, Payment)
      setCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setExpiry(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value, cardNumber, Payment)
      setCvc(target.value)
    }
  }

  const handleChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Current plan' />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography sx={{ fontWeight: 500, mb: 1 }}>
                    Your Current Plan is <strong>Basic</strong>
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>A simple start for everyone</Typography>
                </Box>
                <Box sx={{ my: 6 }}>
                  <Typography sx={{ fontWeight: 500, mb: 1 }}>Active until Dec 09, 2021</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    We will send you a notification upon Subscription expiration
                  </Typography>
                </Box>
                <div>
                  <Box sx={{ display: 'flex', mb: 1, alignItems: 'center' }}>
                    <Typography sx={{ mr: 2, fontWeight: 500 }}>$99 Per Month</Typography>
                    <CustomChip rounded skin='light' size='small' label='Popular' color='primary' />
                  </Box>
                  <Typography sx={{ color: 'text.secondary' }}>Standard plan for small to medium businesses</Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={6} sx={{ mt: [4, 4, 0] }}>
                <Alert icon={false} severity='warning' sx={{ mb: 6 }}>
                  <AlertTitle sx={{ fontWeight: 600, mb: theme => `${theme.spacing(1)} !important` }}>
                    We need your attention!
                  </AlertTitle>
                  Your plan requires updates
                </Alert>
                <Box sx={{ display: 'flex', mb: 2, justifyContent: 'space-between' }}>
                  <Typography sx={{ fontWeight: 500 }}>Days</Typography>
                  <Typography sx={{ fontWeight: 500 }}>24 of 30 Days</Typography>
                </Box>
                <LinearProgress value={86.6666666} variant='determinate' sx={{ height: 12 }} />
                <Typography sx={{ mt: 1, mb: 4, color: 'text.secondary' }}>
                  6 days remaining until your plan requires update
                </Typography>
              </Grid>

              <Grid item xs={12} sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <Button variant='contained' onClick={handleUpgradePlansClickOpen} sx={{ mr: 3, mb: [3, 0] }}>
                  Upgrade Plan
                </Button>
                <Button variant='outlined' color='error' onClick={() => setSubscriptionDialogOpen(true)}>
                  Cancel Subscription
                </Button>
              </Grid>
            </Grid>
          </CardContent>

          <UserSubscriptionDialog open={subscriptionDialogOpen} setOpen={setSubscriptionDialogOpen} />

          <Dialog
            open={openUpgradePlans}
            onClose={handleUpgradePlansClose}
            aria-labelledby='user-view-plans'
            aria-describedby='user-view-plans-description'
            sx={{
              '& .MuiPaper-root': { width: '100%', maxWidth: 560, pt: 8, pb: 8 },
              '& .MuiDialogTitle-root ~ .MuiDialogContent-root': { pt: theme => `${theme.spacing(2)} !important` }
            }}
          >
            <DialogTitle id='user-view-plans' sx={{ textAlign: 'center', fontSize: '1.5rem !important' }}>
              Upgrade Plan
            </DialogTitle>

            <DialogContent>
              <DialogContentText variant='body2' sx={{ textAlign: 'center' }} id='user-view-plans-description'>
                Choose the best plan for the user.
              </DialogContentText>
            </DialogContent>

            <DialogContent
              sx={{
                pb: 8,
                gap: 4,
                pl: [6, 15],
                pr: [6, 15],
                display: 'flex',
                alignItems: 'center',
                flexWrap: ['wrap', 'nowrap']
              }}
            >
              <FormControl fullWidth size='small'>
                <InputLabel id='user-view-plans-select-label'>Choose Plan</InputLabel>
                <Select
                  label='Choose Plan'
                  defaultValue='Standard'
                  id='user-view-plans-select'
                  labelId='user-view-plans-select-label'
                >
                  <MenuItem value='Basic'>Basic - $0/month</MenuItem>
                  <MenuItem value='Standard'>Standard - $99/month</MenuItem>
                  <MenuItem value='Enterprise'>Enterprise - $499/month</MenuItem>
                  <MenuItem value='Company'>Company - $999/month</MenuItem>
                </Select>
              </FormControl>
              <Button variant='contained' sx={{ minWidth: ['100%', 0] }}>
                Upgrade
              </Button>
            </DialogContent>

            <Divider sx={{ m: '0 !important' }} />

            <DialogContent sx={{ pt: 8, pl: [6, 15], pr: [6, 15] }}>
              <Typography sx={{ fontWeight: 500, mb: 2, fontSize: '0.875rem' }}>
                User current plan is standard plan
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: ['wrap', 'nowrap'],
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ mr: 3, display: 'flex', ml: 2.4, position: 'relative' }}>
                  <Sup>$</Sup>
                  <Typography
                    variant='h3'
                    sx={{
                      mb: -1.2,
                      lineHeight: 1,
                      color: 'primary.main',
                      fontSize: '3rem !important'
                    }}
                  >
                    99
                  </Typography>
                  <Sub>/ month</Sub>
                </Box>
                <Button color='error' variant='outlined' sx={{ mt: 2 }} onClick={() => setSubscriptionDialogOpen(true)}>
                  Cancel Subscription
                </Button>
              </Box>
            </DialogContent>
          </Dialog>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Payment Methods'
            action={
              <Button size='small' variant='contained' onClick={handleAddCardClickOpen} sx={{ '& svg': { mr: 1 } }}>
                <Icon icon='bx:plus' fontSize={20} />
                Add Card
              </Button>
            }
          />
          <CardContent>
            {data.map((item: DataType, index: number) => (
              <Box
                key={index}
                sx={{
                  p: 5,
                  display: 'flex',
                  borderRadius: 1,
                  flexDirection: ['column', 'row'],
                  justifyContent: ['space-between'],
                  alignItems: ['flex-start', 'center'],
                  mb: index !== data.length - 1 ? 4 : undefined,
                  border: theme => `1px solid ${theme.palette.divider}`
                }}
              >
                <div>
                  <img height='25' alt={item.imgAlt} src={item.imgSrc} />
                  <Box sx={{ mt: 3.5, display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 500 }}>{item.name}</Typography>
                    {item.cardStatus ? (
                      <CustomChip
                        rounded
                        skin='light'
                        size='small'
                        label={item.cardStatus}
                        color={item.badgeColor}
                        sx={{ ml: 2, fontSize: '0.75rem', fontWeight: 600 }}
                      />
                    ) : null}
                  </Box>
                  <Typography sx={{ mt: 2.5, color: 'text.secondary' }}>
                    **** **** **** {item.cardNumber.substring(item.cardNumber.length - 4)}
                  </Typography>
                </div>

                <Box sx={{ mt: [3, 0], textAlign: ['start', 'end'] }}>
                  <Button variant='outlined' sx={{ mr: 4 }} onClick={() => handleEditCardClickOpen(index)}>
                    Edit
                  </Button>
                  <Button variant='outlined' color='secondary'>
                    Delete
                  </Button>
                  <Typography variant='body2' sx={{ mt: 6.5 }}>
                    Card expires at {item.expiryDate}
                  </Typography>
                </Box>
              </Box>
            ))}
          </CardContent>

          <Dialog
            open={openEditCard}
            onClose={handleEditCardClose}
            aria-labelledby='user-view-billing-edit-card'
            sx={{
              '& .MuiPaper-root': { width: '100%', maxWidth: 560, p: [2, 10] },
              '& .MuiDialogTitle-root + .MuiDialogContent-root': { pt: theme => `${theme.spacing(2)} !important` }
            }}
            aria-describedby='user-view-billing-edit-card-description'
          >
            <DialogTitle id='user-view-billing-edit-card' sx={{ textAlign: 'center', fontSize: '1.625rem !important' }}>
              {dialogTitle} Card
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                variant='body2'
                id='user-view-billing-edit-card-description'
                sx={{ mb: 7, textAlign: 'center' }}
              >
                {dialogTitle} card for future billing
              </DialogContentText>
              <form>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <CardWrapper sx={{ '& .rccs': { m: '0 auto' } }}>
                      <Cards cvc={cvc} focused={focus} expiry={expiry} name={name} number={cardNumber} />
                    </CardWrapper>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name='number'
                      value={cardNumber}
                      autoComplete='off'
                      label='Card Number'
                      onBlur={handleBlur}
                      onChange={handleInputChange}
                      placeholder='0000 0000 0000 0000'
                      onFocus={e => setFocus(e.target.name as Focused)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      fullWidth
                      name='name'
                      value={name}
                      autoComplete='off'
                      onBlur={handleBlur}
                      label='Name on Card'
                      placeholder='John Doe'
                      onChange={e => setName(e.target.value)}
                      onFocus={e => setFocus(e.target.name as Focused)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      name='expiry'
                      label='Expiry'
                      value={expiry}
                      onBlur={handleBlur}
                      placeholder='MM/YY'
                      onChange={handleInputChange}
                      inputProps={{ maxLength: '5' }}
                      onFocus={e => setFocus(e.target.name as Focused)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <FormControl fullWidth>
                      <InputLabel id='user-view-billing-edit-card-status-label'>Card Status</InputLabel>
                      <Select
                        label='Card Status'
                        id='user-view-billing-edit-card-status'
                        labelId='user-view-billing-edit-card-status-label'
                        defaultValue={data[cardId].cardStatus ? data[cardId].cardStatus : ''}
                      >
                        <MenuItem value='Primary'>Primary</MenuItem>
                        <MenuItem value='Expired'>Expired</MenuItem>
                        <MenuItem value='Active'>Active</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      name='cvc'
                      label='CVC'
                      value={cvc}
                      autoComplete='off'
                      onBlur={handleBlur}
                      onChange={handleInputChange}
                      onFocus={e => setFocus(e.target.name as Focused)}
                      placeholder={Payment.fns.cardType(cardNumber) === 'amex' ? '1234' : '123'}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label='Save Card for future billing?'
                      sx={{ '& .MuiTypography-root': { color: 'text.secondary' } }}
                    />
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained' sx={{ mr: 1 }} onClick={handleEditCardClose}>
                Submit
              </Button>
              <Button variant='outlined' color='secondary' onClick={handleEditCardClose}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='Billing Address'
            action={
              <Button size='small' variant='contained' onClick={() => setOpenAddressCard(true)}>
                Edit Address
              </Button>
            }
          />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} lg={6}>
                <TableContainer>
                  <Table size='small' sx={{ width: '95%' }}>
                    <TableBody
                      sx={{
                        '& .MuiTableCell-root': {
                          pt: 2,
                          pb: 2,
                          border: 0,
                          pl: '0 !important',
                          pr: '0 !important',
                          '&:first-of-type': {
                            width: 150
                          }
                        }
                      }}
                    >
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.53,
                              whiteSpace: 'nowrap',
                              color: 'text.secondary'
                            }}
                          >
                            Company Name:
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={{ color: 'text.secondary' }}>ThemeSelection</Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.53,
                              whiteSpace: 'nowrap',
                              color: 'text.secondary'
                            }}
                          >
                            Billing Email:
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={{ color: 'text.secondary' }}>gertrude@gmail.com</Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.53,
                              whiteSpace: 'nowrap',
                              color: 'text.secondary'
                            }}
                          >
                            Tax ID:
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={{ color: 'text.secondary' }}>TAX-875623</Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.53,
                              whiteSpace: 'nowrap',
                              color: 'text.secondary'
                            }}
                          >
                            VAT Number:
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography sx={{ color: 'text.secondary' }}>SDF754K77</Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.53,
                              whiteSpace: 'nowrap',
                              color: 'text.secondary'
                            }}
                          >
                            Billing Address:
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ verticalAlign: 'top' }}>
                          <Typography sx={{ color: 'text.secondary' }}>
                            100 Water Plant Avenue, Building 1303 Wake Island
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              <Grid item xs={12} lg={6}>
                <TableContainer>
                  <Table size='small'>
                    <TableBody
                      sx={{
                        '& .MuiTableCell-root': {
                          pt: 2,
                          pb: 2,
                          border: 0,
                          pl: '0 !important',
                          pr: '0 !important',
                          '&:first-of-type': {
                            width: 150
                          }
                        }
                      }}
                    >
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.53,
                              whiteSpace: 'nowrap',
                              color: 'text.secondary'
                            }}
                          >
                            Contact:
                          </Typography>
                        </TableCell>
                        <TableCell>+1(609) 933-44-22</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.53,
                              whiteSpace: 'nowrap',
                              color: 'text.secondary'
                            }}
                          >
                            Country:
                          </Typography>
                        </TableCell>
                        <TableCell>Australia</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.53,
                              whiteSpace: 'nowrap',
                              color: 'text.secondary'
                            }}
                          >
                            State:
                          </Typography>
                        </TableCell>
                        <TableCell>Queensland</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.53,
                              whiteSpace: 'nowrap',
                              color: 'text.secondary'
                            }}
                          >
                            Zip Code:
                          </Typography>
                        </TableCell>
                        <TableCell>403114</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </CardContent>

          <Dialog
            scroll='body'
            open={openAddressCard}
            onClose={() => setOpenAddressCard(false)}
            aria-labelledby='user-address-edit'
            aria-describedby='user-address-edit-description'
            sx={{
              '& .MuiPaper-root': { width: '100%', maxWidth: 650, p: [2, 10] },
              '& .MuiDialogTitle-root + .MuiDialogContent-root': { pt: theme => `${theme.spacing(2)} !important` }
            }}
          >
            <DialogTitle id='user-address-edit' sx={{ textAlign: 'center', fontSize: '1.5rem !important' }}>
              Edit Address
            </DialogTitle>
            <DialogContent>
              <DialogContentText variant='body2' id='user-address-edit-description' sx={{ textAlign: 'center', mb: 7 }}>
                Edit Address for future billing
              </DialogContentText>
              <form>
                <Grid container spacing={5}>
                  {radioData.map((item, index) => (
                    <CustomRadioIcons
                      key={index}
                      selected={selected}
                      data={radioData[index]}
                      icon={icons[index].icon}
                      name='custom-radios-icons'
                      handleChange={handleChange}
                      gridProps={{ sm: 6, xs: 12 }}
                      iconProps={icons[index].iconProps}
                    />
                  ))}
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth defaultValue='ThemeSelection' label='Company Name' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth type='email' defaultValue='gertrude@gmail.com' label='Email' />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id='country-select'>Country</InputLabel>
                      <Select labelId='country-select' defaultValue='usa' label='Country'>
                        <MenuItem value='usa'>USA</MenuItem>
                        <MenuItem value='uk'>UK</MenuItem>
                        <MenuItem value='france'>France</MenuItem>
                        <MenuItem value='germany'>Germany</MenuItem>
                        <MenuItem value='japan'>Japan</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label='Address Line 1' defaultValue='12, Business Park' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label='Address Line 2' defaultValue='Mall Road' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth defaultValue='Nr. Hard Rock Cafe' label='Landmark' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth defaultValue='Los Angeles' label='City' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth defaultValue='Capholim' label='State' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth type='number' defaultValue='403114' label='Zip Code' />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel control={<Switch />} label='Use as a billing address?' />
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained' sx={{ mr: 3.5 }} onClick={() => setOpenAddressCard(false)}>
                Submit
              </Button>
              <Button variant='outlined' color='secondary' onClick={() => setOpenAddressCard(false)}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserViewBilling
