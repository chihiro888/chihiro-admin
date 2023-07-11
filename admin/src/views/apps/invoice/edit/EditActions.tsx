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
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface Props {
  id: string | undefined
  toggleAddPaymentDrawer: () => void
  toggleSendInvoiceDrawer: () => void
}

const OptionsWrapper = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const EditActions = ({
  id,
  toggleSendInvoiceDrawer,
  toggleAddPaymentDrawer
}: Props) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Button
              fullWidth
              sx={{ mb: 4 }}
              variant="contained"
              onClick={toggleSendInvoiceDrawer}
              startIcon={<Icon icon="bx:paper-plane" />}
            >
              Send Invoice
            </Button>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
              <Link href={`/apps/invoice/preview/${id}`} passHref>
                <Button
                  fullWidth
                  component="a"
                  sx={{ mr: 4 }}
                  color="secondary"
                  variant="outlined"
                >
                  Preview
                </Button>
              </Link>
              <Button fullWidth color="secondary" variant="outlined">
                Save
              </Button>
            </Box>
            <Button
              fullWidth
              color="success"
              variant="contained"
              onClick={toggleAddPaymentDrawer}
              startIcon={<Icon icon="bx:dollar" />}
            >
              Add Payment
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="payment-select">Accept payments via</InputLabel>
          <Select
            fullWidth
            defaultValue="Internet Banking"
            label="Accept payments via"
            labelId="payment-select"
            sx={{ mb: 4 }}
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
            htmlFor="invoice-edit-payment-terms"
            sx={{ cursor: 'pointer' }}
          >
            Payment Terms
          </InputLabel>
          <Switch defaultChecked id="invoice-edit-payment-terms" />
        </OptionsWrapper>
        <OptionsWrapper>
          <InputLabel
            htmlFor="invoice-edit-client-notes"
            sx={{ cursor: 'pointer' }}
          >
            Client Notes
          </InputLabel>
          <Switch id="invoice-edit-client-notes" />
        </OptionsWrapper>
        <OptionsWrapper>
          <InputLabel
            sx={{ cursor: 'pointer' }}
            htmlFor="invoice-edit-payment-stub"
          >
            Payment Stub
          </InputLabel>
          <Switch id="invoice-edit-payment-stub" />
        </OptionsWrapper>
      </Grid>
    </Grid>
  )
}

export default EditActions
