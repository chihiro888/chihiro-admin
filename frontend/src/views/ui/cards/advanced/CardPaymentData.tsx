// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import Payment from 'payment'

// ** Type Import
import { CustomRadioBasicData } from 'src/@core/components/custom-radio/types'

// ** Custom Component Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import CustomRadioBasic from 'src/@core/components/custom-radio/basic'

// ** Util Import
import { formatCVC, formatExpirationDate, formatCreditCardNumber } from 'src/@core/utils/format'

const data: CustomRadioBasicData[] = [
  {
    value: 'paypal',
    isSelected: true,
    title: <Typography sx={{ mt: 0.25, color: 'text.secondary' }}>Paypal</Typography>
  },
  {
    value: 'credit-card',
    title: <Typography sx={{ mt: 0.25, color: 'text.secondary' }}>Credit Card</Typography>
  }
]

const CardPaymentData = () => {
  const initialSelected: string = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  // ** States
  const [cvc, setCvc] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [expiry, setExpiry] = useState<string>('')
  const [cardNumber, setCardNumber] = useState<string>('')
  const [selected, setSelected] = useState<string>(initialSelected)

  const handleRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelected(prop)
    } else {
      setSelected((prop.target as HTMLInputElement).value)
    }
  }

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

  return (
    <Card>
      <CardHeader
        title='Payment Data'
        sx={{ pt: 5, pb: 3 }}
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Re-send OTP', 'Call Support', 'Delete']} />}
      />
      <CardContent>
        <Typography variant='body2' sx={{ mb: 0.5 }}>
          Price
        </Typography>
        <Box sx={{ mb: 4, rowGap: 2, columnGap: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography variant='h6' sx={{ color: 'primary.main' }}>
            $455.60
          </Typography>
          <CustomChip rounded size='small' skin='light' color='primary' label='35% Off' />
        </Box>
        <Typography variant='body2' sx={{ mb: 2.5 }}>
          Choose payment method:
        </Typography>
        <Grid container spacing={5}>
          {data.map((item, index) => (
            <CustomRadioBasic
              key={index}
              data={data[index]}
              selected={selected}
              handleChange={handleRadioChange}
              name='custom-radios-payment-data'
              gridProps={{
                sm: 6,
                xs: 12,
                sx: { '& > .MuiBox-root': { px: 3, pt: 1.75, pb: 1.75, '& .MuiRadio-root': { my: -2 } } }
              }}
            />
          ))}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name='number'
              value={cardNumber}
              autoComplete='off'
              label='Card Number'
              onChange={handleInputChange}
              placeholder='0000 0000 0000 0000'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name='expiry'
              value={expiry}
              autoComplete='off'
              label='Expiry Date'
              placeholder='MM/YY'
              onChange={handleInputChange}
              inputProps={{ maxLength: '5' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              name='cvc'
              value={cvc}
              label='CVC Code'
              autoComplete='off'
              onChange={handleInputChange}
              placeholder={Payment.fns.cardType(cardNumber) === 'amex' ? '1234' : '123'}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name='name'
              value={name}
              label='Name'
              autoComplete='off'
              placeholder='John Doe'
              onChange={e => setName(e.target.value)}
            />
          </Grid>
        </Grid>
        <FormControlLabel
          label='Save Card?'
          sx={{ mt: 1.5, mb: 3 }}
          control={<Checkbox defaultChecked name='payment-data-save-card' />}
        />
        <Button fullWidth variant='contained'>
          Add Card
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardPaymentData
