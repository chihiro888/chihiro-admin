// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const AddActions = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Button
              fullWidth
              sx={{ mb: 4 }}
              variant="contained"
              startIcon={<Icon icon="bx:paper-plane" />}
            >
              Send Invoice
            </Button>
            <Link href="/apps/invoice/preview/4987" passHref>
              <Button
                fullWidth
                component="a"
                sx={{ mb: 4 }}
                color="secondary"
                variant="outlined"
              >
                Preview
              </Button>
            </Link>
            <Button fullWidth color="secondary" variant="outlined">
              Save
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="payment-select">Accept payments via</InputLabel>
          <Select
            fullWidth
            sx={{ mb: 4 }}
            labelId="payment-select"
            label="Accept payments via"
            defaultValue="Internet Banking"
          >
            <MenuItem value="Internet Banking">Internet Banking</MenuItem>
            <MenuItem value="Debit Card">Debit Card</MenuItem>
            <MenuItem value="Credit Card">Credit Card</MenuItem>
            <MenuItem value="Paypal">Paypal</MenuItem>
            <MenuItem value="UPI Transfer">UPI Transfer</MenuItem>
          </Select>
        </FormControl>
        <OptionsWrapper>
          <InputLabel
            htmlFor="invoice-add-payment-terms"
            sx={{ cursor: 'pointer' }}
          >
            Payment Terms
          </InputLabel>
          <Switch defaultChecked id="invoice-add-payment-terms" />
        </OptionsWrapper>
        <OptionsWrapper>
          <InputLabel
            htmlFor="invoice-add-client-notes"
            sx={{ cursor: 'pointer' }}
          >
            Client Notes
          </InputLabel>
          <Switch id="invoice-add-client-notes" />
        </OptionsWrapper>
        <OptionsWrapper>
          <InputLabel
            sx={{ cursor: 'pointer' }}
            htmlFor="invoice-add-payment-stub"
          >
            Payment Stub
          </InputLabel>
          <Switch id="invoice-add-payment-stub" />
        </OptionsWrapper>
      </Grid>
    </Grid>
  )
}

export default AddActions
