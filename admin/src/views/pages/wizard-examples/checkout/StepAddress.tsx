// ** React Imports
import { ChangeEvent, SyntheticEvent, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Type Imports
import {
  CustomRadioBasicData,
  CustomRadioIconsData,
  CustomRadioIconsProps
} from 'src/@core/components/custom-radio/types'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

interface IconType {
  icon: CustomRadioIconsProps['icon']
  iconProps: CustomRadioIconsProps['iconProps']
}

const data: CustomRadioBasicData[] = [
  {
    value: 'home',
    isSelected: true,
    title: <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>John Doe (Default)</Typography>,
    meta: <CustomChip rounded size='small' skin='light' label='Home' color='primary' />,
    content: (
      <Box sx={{ mt: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body2' sx={{ mb: 'auto' }}>
          4135 Parkway Street, Los Angeles, CA, 90017.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider
          sx={{ mt: theme => `${theme.spacing(5)} !important`, mb: theme => `${theme.spacing(4)} !important` }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ mr: 3, color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Edit
            </Box>
          </Link>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Remove
            </Box>
          </Link>
        </Box>
      </Box>
    )
  },
  {
    value: 'office',
    title: <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>ACME Inc.</Typography>,
    meta: <CustomChip rounded size='small' skin='light' label='Office' color='success' />,
    content: (
      <Box sx={{ mt: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='body2' sx={{ mb: 'auto' }}>
          87 Hoffman Avenue, New York, NY, 10016.
          <br />
          Mobile : 1234567890 Cash / Card on delivery available
        </Typography>
        <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ mr: 3, color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Edit
            </Box>
          </Link>
          <Link href='/' passHref>
            <Box
              component='a'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
              onClick={(e: SyntheticEvent) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              Remove
            </Box>
          </Link>
        </Box>
      </Box>
    )
  }
]

const dataIcons: CustomRadioIconsData[] = [
  {
    isSelected: true,
    value: 'standard',
    title: 'Standard',
    content: (
      <>
        <CustomChip
          rounded
          size='small'
          skin='light'
          label='Free'
          color='success'
          sx={{ top: 12, right: 12, position: 'absolute' }}
        />
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 1 Week.
        </Typography>
      </>
    )
  },
  {
    value: 'express',
    title: 'Express',
    content: (
      <>
        <CustomChip
          rounded
          label='$10'
          size='small'
          skin='light'
          color='secondary'
          sx={{ top: 12, right: 12, position: 'absolute' }}
        />
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 3-4 days.
        </Typography>
      </>
    )
  },
  {
    value: 'overnight',
    title: 'Overnight',
    content: (
      <>
        <CustomChip
          rounded
          label='$15'
          size='small'
          skin='light'
          color='secondary'
          sx={{ top: 12, right: 12, position: 'absolute' }}
        />
        <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
          Get your product in 1 day.
        </Typography>
      </>
    )
  }
]

const addressRadioData: CustomRadioIconsData[] = [
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

const addressIcons: IconType[] = [
  { icon: 'bx:home', iconProps: { fontSize: '2rem', style: { marginBottom: 0 } } },
  { icon: 'bx:briefcase', iconProps: { fontSize: '2rem', style: { marginBottom: 0 } } }
]

const StepAddress = ({ handleNext }: { handleNext: () => void }) => {
  const initialBasicSelected: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value
  const initialIconSelected: string = dataIcons.filter(item => item.isSelected)[
    dataIcons.filter(item => item.isSelected).length - 1
  ].value
  const selectedAddress: string = addressRadioData.filter(item => item.isSelected)[
    addressRadioData.filter(item => item.isSelected).length - 1
  ].value

  // ** States

  const [openAddressCard, setOpenAddressCard] = useState<boolean>(false)
  const [selectedIconRadio, setSelectedIconRadio] = useState<string>(initialIconSelected)
  const [selectedAddressRadio, setSelectedAddressRadio] = useState<string>(selectedAddress)
  const [selectedBasicRadio, setSelectedBasicRadio] = useState<string>(initialBasicSelected)

  // ** Hook
  const theme = useTheme()

  const icons: IconType[] = [
    {
      icon: 'bx:user',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'bx:crown',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'bx:rocket',
      iconProps: { fontSize: '2rem', style: { marginBottom: 4 }, color: theme.palette.text.secondary }
    }
  ]

  const handleBasicRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedBasicRadio(prop)
    } else {
      setSelectedBasicRadio((prop.target as HTMLInputElement).value)
    }
  }
  const handleIconRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedIconRadio(prop)
    } else {
      setSelectedIconRadio((prop.target as HTMLInputElement).value)
    }
  }

  const handleAddressRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedAddressRadio(prop)
    } else {
      setSelectedAddressRadio((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={8} xl={9}>
        <Typography sx={{ mb: 4, color: 'text.secondary' }}>Select your preferable address</Typography>
        <Grid container spacing={5}>
          {data.map((item, index) => (
            <CustomRadioBasic
              key={index}
              data={data[index]}
              name='custom-radios-address'
              selected={selectedBasicRadio}
              gridProps={{ sm: 6, xs: 12 }}
              handleChange={handleBasicRadioChange}
            />
          ))}
        </Grid>
        <Button variant='contained' sx={{ mt: 5 }} onClick={() => setOpenAddressCard(true)}>
          Add new address
        </Button>
        <Typography sx={{ mt: 8, mb: 4, color: 'text.secondary' }}>Choose Delivery Speed</Typography>
        <Grid container spacing={5}>
          {dataIcons.map((item, index) => (
            <CustomRadioIcons
              key={index}
              data={dataIcons[index]}
              icon={icons[index].icon}
              selected={selectedIconRadio}
              name='custom-radios-delivery'
              gridProps={{ sm: 4, xs: 12 }}
              iconProps={icons[index].iconProps}
              handleChange={handleIconRadioChange}
            />
          ))}
        </Grid>
        <Dialog
          scroll='body'
          open={openAddressCard}
          onClose={() => setOpenAddressCard(false)}
          aria-labelledby='user-address-edit'
          aria-describedby='user-address-edit-description'
          sx={{
            '& .MuiPaper-root': { maxWidth: 800, p: [2, 10] },
            '& .MuiDialogTitle-root + .MuiDialogContent-root': { pt: theme => `${theme.spacing(2)} !important` }
          }}
        >
          <DialogTitle id='user-address-edit' sx={{ textAlign: 'center', fontSize: '1.625rem !important' }}>
            Add New Address
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id='user-address-edit-description'
              sx={{ mb: 6, textAlign: 'center', color: 'text.secondary' }}
            >
              Add new address for express delivery
            </DialogContentText>
            <form>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Grid container spacing={5}>
                    {addressRadioData.map((item, index) => (
                      <CustomRadioIcons
                        key={index}
                        name='custom-radios-icons'
                        gridProps={{ sm: 6, xs: 12 }}
                        data={addressRadioData[index]}
                        icon={addressIcons[index].icon}
                        selected={selectedAddressRadio}
                        handleChange={handleAddressRadioChange}
                        iconProps={addressIcons[index].iconProps}
                      />
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='First Name' placeholder='John' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label='Last Name' placeholder='Doe' />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id='country-select'>Country</InputLabel>
                    <Select labelId='country-select' defaultValue='' label='Country'>
                      <MenuItem value=''></MenuItem>
                      <MenuItem value='usa'>USA</MenuItem>
                      <MenuItem value='uk'>UK</MenuItem>
                      <MenuItem value='france'>France</MenuItem>
                      <MenuItem value='germany'>Germany</MenuItem>
                      <MenuItem value='japan'>Japan</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline minRows={1} label='Address Line 1' placeholder='12, Business Park' />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline minRows={1} label='Address Line 2' placeholder='Mall Road' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder='Nr. Hard Rock Cafe' label='Landmark' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder='Los Angeles' label='City' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder='Capholim' label='State' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth type='number' placeholder='403114' label='Zip Code' />
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
            <Typography sx={{ mb: 4, fontWeight: 500 }}>Estimated Delivery Date</Typography>
            <Box sx={{ mb: 4, display: 'flex' }}>
              <Box sx={{ mr: 4 }}>
                <img width={50} src='/images/products/google-home.png' alt='Google Home' />
              </Box>
              <div>
                <Typography sx={{ color: 'text.secondary' }}>Google - Google Home - White</Typography>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>18th Nov 2021</Typography>
              </div>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ mr: 4 }}>
                <img width={50} src='/images/products/iphone-11.png' alt='iphone 11' />
              </Box>
              <div>
                <Typography sx={{ color: 'text.secondary' }}>Apple iPhone 11 (64GB, Black)</Typography>
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>20th Nov 2021</Typography>
              </div>
            </Box>
          </CardContent>
          <Divider sx={{ mt: theme => `${theme.spacing(4)} !important`, mb: '0 !important' }} />
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
          <Divider sx={{ m: '0 !important' }} />
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

export default StepAddress
