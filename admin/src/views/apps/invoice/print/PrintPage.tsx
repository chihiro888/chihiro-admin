// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'

// ** Types
import {
  SingleInvoiceType,
  InvoiceLayoutProps
} from 'src/types/apps/invoiceTypes'

// ** Third Party Components
import axios from 'axios'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

const CalcWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingTop: `${theme.spacing(1)} !important`,
  paddingBottom: `${theme.spacing(1)} !important`
}))

const InvoicePrint = ({ id }: InvoiceLayoutProps) => {
  // ** State
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<null | SingleInvoiceType>(null)

  // ** Hooks
  const theme = useTheme()

  useEffect(() => {
    setTimeout(() => {
      window.print()
    }, 100)
  }, [])

  useEffect(() => {
    axios
      .get('/apps/invoice/single-invoice', { params: { id } })
      .then((res) => {
        setData(res.data)
        setError(false)
      })
      .catch(() => {
        setData(null)
        setError(true)
      })
  }, [id])

  if (data) {
    const { invoice, paymentDetails } = data

    return (
      <Box sx={{ p: 12, pb: 6 }}>
        <Grid container>
          <Grid item xs={8} sx={{ mb: { sm: 0, xs: 4 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
                <svg
                  width={22}
                  height={32}
                  viewBox="0 0 55 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill={theme.palette.primary.main}
                    d="M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z"
                  />
                  <path
                    fillOpacity="0.2"
                    fill={theme.palette.common.white}
                    d="M26.6523 7.65625C24.9492 5.625 25.3239 0.255308 30.2922 0.0105286C33.0074 0.326611 35.7804 0.62685 38.3907 0.909477C43.5904 1.47246 48.1446 1.96556 50.311 2.3748C52.7331 2.83234 54.886 5.06072 53.9543 8.61103C53.2063 10.3418 52.2075 12.6646 51.1482 15.1282C49.1995 19.6601 47.0459 24.6685 45.8717 27.3445C44.7224 29.964 39.111 31.0585 37.1137 26.0951C32.4782 29.4283 27.2884 33.1556 25.273 34.6026C24.931 34.4553 24.3074 34.2381 23.5124 33.9613C20.8691 33.0407 16.331 31.4602 13.9477 29.5966C9.61363 25.5918 11.6259 19.4662 13.1737 16.904C17.8273 13.7183 20.7417 11.7161 23.4984 9.82236C24.5437 9.10427 25.5662 8.40178 26.6523 7.65625Z"
                  />
                  <path
                    fillOpacity="0.2"
                    fill={theme.palette.common.white}
                    d="M17.543 52.7266C21.2241 53.9875 28.5535 57.0509 30.091 59.101C32.0129 61.6635 33.1576 64.34 29.2527 71.2039C28.5954 71.6481 27.9821 72.0633 27.4069 72.4528C22.1953 75.9817 20.1085 77.3946 16.6243 79.0531C13.5855 80.2464 6.61575 81.7103 2.66559 74.5653C-1.11764 67.7222 3.23818 62.7113 6.5963 60.065L12.1695 56.0339L14.8359 54.3477L17.543 52.7266Z"
                  />
                </svg>
                <Typography
                  variant="h5"
                  sx={{
                    ml: 2,
                    lineHeight: 1,
                    fontWeight: 700,
                    letterSpacing: '-0.45px',
                    textTransform: 'lowercase',
                    fontSize: '1.75rem !important'
                  }}
                >
                  {themeConfig.templateName}
                </Typography>
              </Box>
              <div>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>
                  Office 149, 450 South Brand Brooklyn
                </Typography>
                <Typography sx={{ mb: 1, color: 'text.secondary' }}>
                  San Diego County, CA 91905, USA
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  +1 (123) 456 7891, +44 (876) 543 2198
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { sm: 'flex-end', xs: 'flex-start' }
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: 'text.secondary' }}>
                {`Invoice #${invoice.id}`}
              </Typography>
              <Box sx={{ mb: 2, display: 'flex' }}>
                <Typography sx={{ mr: 3, color: 'text.secondary' }}>
                  Date Issued:
                </Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  {invoice.issuedDate}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ mr: 3, color: 'text.secondary' }}>
                  Date Due:
                </Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  {invoice.dueDate}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: (theme) => `${theme.spacing(6)} !important` }} />

        <Grid container>
          <Grid item xs={7} md={8} sx={{ mb: { lg: 0, xs: 4 } }}>
            <Typography
              sx={{ mb: 3.5, fontWeight: 600, color: 'text.secondary' }}
            >
              Invoice To:
            </Typography>
            <Typography sx={{ mb: 2, color: 'text.secondary' }}>
              {invoice.name}
            </Typography>
            <Typography sx={{ mb: 2, color: 'text.secondary' }}>
              {invoice.company}
            </Typography>
            <Typography sx={{ mb: 2, color: 'text.secondary' }}>
              {invoice.address}
            </Typography>
            <Typography sx={{ mb: 2, color: 'text.secondary' }}>
              {invoice.contact}
            </Typography>
            <Typography sx={{ mb: 2, color: 'text.secondary' }}>
              {invoice.companyEmail}
            </Typography>
          </Grid>
          <Grid item xs={5} md={4}>
            <Typography
              sx={{ mb: 3.5, fontWeight: 600, color: 'text.secondary' }}
            >
              Bill To:
            </Typography>
            <Table>
              <TableBody>
                <TableRow>
                  <MUITableCell>Total Due:</MUITableCell>
                  <MUITableCell>
                    <strong>{paymentDetails.totalDue}</strong>
                  </MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>Bank name:</MUITableCell>
                  <MUITableCell>{paymentDetails.bankName}</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>Country:</MUITableCell>
                  <MUITableCell>{paymentDetails.country}</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>IBAN:</MUITableCell>
                  <MUITableCell>{paymentDetails.iban}</MUITableCell>
                </TableRow>
                <TableRow>
                  <MUITableCell>SWIFT code:</MUITableCell>
                  <MUITableCell>{paymentDetails.swiftCode}</MUITableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>

        <Divider
          sx={{
            mt: (theme) => `${theme.spacing(6)} !important`,
            mb: '0 !important'
          }}
        />

        <Table sx={{ mb: 6 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ py: 2 }}>Item</TableCell>
              <TableCell sx={{ py: 2 }}>Description</TableCell>
              <TableCell sx={{ py: 2 }}>hours</TableCell>
              <TableCell sx={{ py: 2 }}>qty</TableCell>
              <TableCell sx={{ py: 2 }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Premium Branding Package</TableCell>
              <TableCell>Branding & Promotion</TableCell>
              <TableCell>48</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$32</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Social Media</TableCell>
              <TableCell>Social media templates</TableCell>
              <TableCell>42</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$28</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Web Design</TableCell>
              <TableCell>Web designing package</TableCell>
              <TableCell>46</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$24</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SEO</TableCell>
              <TableCell>Search engine optimization</TableCell>
              <TableCell>40</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$22</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Grid container>
          <Grid item xs={8} sm={7} lg={9}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{ mr: 2, fontWeight: 600, color: 'text.secondary' }}
              >
                Salesperson:
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Tommy Shelby
              </Typography>
            </Box>

            <Typography sx={{ color: 'text.secondary' }}>
              Thanks for your business
            </Typography>
          </Grid>
          <Grid item xs={4} sm={5} lg={3}>
            <CalcWrapper>
              <Typography sx={{ color: 'text.secondary' }}>
                Subtotal:
              </Typography>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
                $154.25
              </Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography sx={{ color: 'text.secondary' }}>
                Discount:
              </Typography>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
                $00.00
              </Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography sx={{ color: 'text.secondary' }}>Tax:</Typography>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
                $50.00
              </Typography>
            </CalcWrapper>
            <CalcWrapper>
              <Typography sx={{ color: 'text.secondary' }}>Total:</Typography>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
                $204.25
              </Typography>
            </CalcWrapper>
          </Grid>
        </Grid>

        <Divider
          sx={{ color: 'text.secondary', my: `${theme.spacing(6)} !important` }}
        />
        <Typography sx={{ color: 'text.secondary' }}>
          <strong>Note:</strong> It was a pleasure working with you and your
          team. We hope you will keep us in mind for future freelance projects.
          Thank You!
        </Typography>
      </Box>
    )
  } else if (error) {
    return (
      <Box sx={{ p: 5 }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Alert severity="error">
              Invoice with the id: {id} does not exist. Please check the list of
              invoices: <Link href="/apps/invoice/list">Invoice List</Link>
            </Alert>
          </Grid>
        </Grid>
      </Box>
    )
  } else {
    return null
  }
}

export default InvoicePrint
