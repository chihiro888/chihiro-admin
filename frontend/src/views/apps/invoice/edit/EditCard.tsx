// ** React Imports
import { useEffect, useState, forwardRef, SyntheticEvent, ForwardedRef } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import TableRow from '@mui/material/TableRow'
import Collapse from '@mui/material/Collapse'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import Box, { BoxProps } from '@mui/material/Box'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import TableContainer from '@mui/material/TableContainer'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TableCell, { TableCellBaseProps } from '@mui/material/TableCell'
import CardContent, { CardContentProps } from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import axios from 'axios'
import DatePicker from 'react-datepicker'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import { SingleInvoiceType, InvoiceClientType } from 'src/types/apps/invoiceTypes'

// ** Custom Component Imports
import Repeater from 'src/@core/components/repeater'

interface Props {
  data: SingleInvoiceType
}

interface PickerProps {
  label?: string
}

const CustomInput = forwardRef(({ ...props }: PickerProps, ref: ForwardedRef<HTMLElement>) => {
  return <TextField size='small' inputRef={ref} {...props} sx={{ width: '150px' }} />
})

const MUITableCell = styled(TableCell)<TableCellBaseProps>(({ theme }) => ({
  borderBottom: 0,
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingTop: `${theme.spacing(1)} !important`,
  paddingBottom: `${theme.spacing(1)} !important`
}))

const CalcWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(2)
  }
}))

const RepeatingContent = styled(Grid)<GridProps>(({ theme }) => ({
  paddingRight: 0,
  display: 'flex',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  '& .col-title': {
    top: '-1.85rem',
    position: 'absolute',
    color: theme.palette.text.secondary
  },
  [theme.breakpoints.down('lg')]: {
    '& .col-title': {
      top: '0',
      position: 'relative'
    }
  }
}))

const RepeaterWrapper = styled(CardContent)<CardContentProps>(({ theme }) => ({
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(10),
  '& .repeater-wrapper + .repeater-wrapper': {
    marginTop: theme.spacing(8)
  }
}))

const InvoiceAction = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: theme.spacing(2, 1),
  borderLeft: `1px solid ${theme.palette.divider}`
}))

const EditCard = ({ data }: Props) => {
  // ** States
  const [count, setCount] = useState<number>(1)
  const [selected, setSelected] = useState<string>('')
  const [clients, setClients] = useState<InvoiceClientType[] | undefined>(undefined)
  const [selectedClient, setSelectedClient] = useState<InvoiceClientType | null>(null)
  const [dueDate, setDueDate] = useState<DateType>(data ? new Date(data.invoice.dueDate) : new Date())
  const [issueDate, setIssueDate] = useState<DateType>(data ? new Date(data.invoice.issuedDate) : new Date())

  // ** Hook
  const theme = useTheme()

  useEffect(() => {
    axios.get('/apps/invoice/clients').then(response => {
      if (response.data && clients === undefined) {
        setClients(response.data)
        setSelected(response.data[0].name)
        setSelectedClient(response.data[0])
      }
    })
  }, [clients])

  // ** Deletes form
  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-wrapper').remove()
  }

  // ** Handle Invoice To Change
  const handleInvoiceChange = (e: SelectChangeEvent) => {
    setSelected(e.target.value)
    if (clients !== undefined) {
      setSelectedClient(clients.filter(i => i.name === e.target.value)[0])
    }
  }

  if (data) {
    return (
      <Card>
        <CardContent>
          <Grid container sx={{ p: { sm: 4, xs: 0 } }}>
            <Grid item xl={6} xs={12} sx={{ mb: { xl: 0, xs: 6 } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 6, display: 'flex', alignItems: 'center' }}>
                  <svg width={22} height={32} viewBox='0 0 55 81' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill={theme.palette.primary.main}
                      d='M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z'
                    />
                    <path
                      fillOpacity='0.2'
                      fill={theme.palette.common.white}
                      d='M26.6523 7.65625C24.9492 5.625 25.3239 0.255308 30.2922 0.0105286C33.0074 0.326611 35.7804 0.62685 38.3907 0.909477C43.5904 1.47246 48.1446 1.96556 50.311 2.3748C52.7331 2.83234 54.886 5.06072 53.9543 8.61103C53.2063 10.3418 52.2075 12.6646 51.1482 15.1282C49.1995 19.6601 47.0459 24.6685 45.8717 27.3445C44.7224 29.964 39.111 31.0585 37.1137 26.0951C32.4782 29.4283 27.2884 33.1556 25.273 34.6026C24.931 34.4553 24.3074 34.2381 23.5124 33.9613C20.8691 33.0407 16.331 31.4602 13.9477 29.5966C9.61363 25.5918 11.6259 19.4662 13.1737 16.904C17.8273 13.7183 20.7417 11.7161 23.4984 9.82236C24.5437 9.10427 25.5662 8.40178 26.6523 7.65625Z'
                    />
                    <path
                      fillOpacity='0.2'
                      fill={theme.palette.common.white}
                      d='M17.543 52.7266C21.2241 53.9875 28.5535 57.0509 30.091 59.101C32.0129 61.6635 33.1576 64.34 29.2527 71.2039C28.5954 71.6481 27.9821 72.0633 27.4069 72.4528C22.1953 75.9817 20.1085 77.3946 16.6243 79.0531C13.5855 80.2464 6.61575 81.7103 2.66559 74.5653C-1.11764 67.7222 3.23818 62.7113 6.5963 60.065L12.1695 56.0339L14.8359 54.3477L17.543 52.7266Z'
                    />
                  </svg>
                  <Typography
                    variant='h5'
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
                  <Typography sx={{ mb: 1, color: 'text.secondary' }}>Office 149, 450 South Brand Brooklyn</Typography>
                  <Typography sx={{ mb: 1, color: 'text.secondary' }}>San Diego County, CA 91905, USA</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>+1 (123) 456 7891, +44 (876) 543 2198</Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xl={6} xs={12}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xl: 'flex-end', xs: 'flex-start' } }}>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    flexDirection: { sm: 'row', xs: 'column' },
                    alignItems: { sm: 'center', xs: 'flex-start' }
                  }}
                >
                  <Typography variant='h5' sx={{ mr: 2, mb: { sm: 0, xs: 3 }, width: '105px' }}>
                    Invoice
                  </Typography>
                  <TextField
                    size='small'
                    value={data.invoice.id}
                    sx={{ width: '150px' }}
                    InputProps={{
                      disabled: true,
                      startAdornment: <InputAdornment position='start'>#</InputAdornment>
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    mt: { sm: 0, xs: 2 },
                    flexDirection: { sm: 'row', xs: 'column' },
                    alignItems: { sm: 'center', xs: 'flex-start' }
                  }}
                >
                  <Typography
                    sx={{
                      mr: 3,
                      width: '100px',
                      mb: { sm: 0, xs: 3 },
                      color: 'text.secondary'
                    }}
                  >
                    Date Issued:
                  </Typography>
                  <DatePicker
                    id='issue-date'
                    selected={issueDate}
                    showDisabledMonthNavigation
                    customInput={<CustomInput />}
                    onChange={(date: Date) => setIssueDate(date)}
                  />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    mt: { sm: 0, xs: 2 },
                    flexDirection: { sm: 'row', xs: 'column' },
                    alignItems: { sm: 'center', xs: 'flex-start' }
                  }}
                >
                  <Typography
                    sx={{
                      mr: 3,
                      width: '100px',
                      mb: { sm: 0, xs: 3 },
                      color: 'text.secondary'
                    }}
                  >
                    Date Due:
                  </Typography>
                  <DatePicker
                    selected={dueDate}
                    showDisabledMonthNavigation
                    customInput={<CustomInput />}
                    onChange={(date: Date) => setDueDate(date)}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>

        <Divider
          sx={{ mt: theme => `${theme.spacing(1.25)} !important`, mb: theme => `${theme.spacing(4)} !important` }}
        />

        <CardContent>
          <Grid container sx={{ px: { sm: 4, xs: 0 } }}>
            <Grid item xs={12} sm={6} sx={{ mb: { lg: 0, xs: 6 } }}>
              <Typography sx={{ mb: 4, fontWeight: 500 }}>Invoice To:</Typography>
              <Select size='small' value={selected} onChange={handleInvoiceChange} sx={{ mb: 4, width: '200px' }}>
                {clients !== undefined &&
                  clients.map(client => (
                    <MenuItem key={client.name} value={client.name}>
                      {client.name}
                    </MenuItem>
                  ))}
              </Select>
              {selectedClient !== null ? (
                <div>
                  <Typography sx={{ mb: 1, color: 'text.secondary' }}>{selectedClient.company}</Typography>
                  <Typography sx={{ mb: 1, color: 'text.secondary' }}>{selectedClient.address}</Typography>
                  <Typography sx={{ mb: 1, color: 'text.secondary' }}>{selectedClient.contact}</Typography>
                  <Typography sx={{ mb: 1, color: 'text.secondary' }}>{selectedClient.companyEmail}</Typography>
                </div>
              ) : null}
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: ['flex-start', 'flex-end'] }}>
              <div>
                <Typography sx={{ mb: 4, color: 'text.secondary', fontWeight: 500 }}>Bill To:</Typography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <MUITableCell sx={{ pb: '0 !important' }}>Total Due:</MUITableCell>
                        <MUITableCell sx={{ pb: '0 !important' }}>{data.paymentDetails.totalDue}</MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell sx={{ pb: '0 !important' }}>Bank name:</MUITableCell>
                        <MUITableCell sx={{ pb: '0 !important' }}>{data.paymentDetails.bankName}</MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell sx={{ pb: '0 !important' }}>Country:</MUITableCell>
                        <MUITableCell sx={{ pb: '0 !important' }}>{data.paymentDetails.country}</MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell sx={{ pb: '0 !important' }}>IBAN:</MUITableCell>
                        <MUITableCell sx={{ pb: '0 !important' }}>{data.paymentDetails.iban}</MUITableCell>
                      </TableRow>
                      <TableRow>
                        <MUITableCell>SWIFT code:</MUITableCell>
                        <MUITableCell>{data.paymentDetails.swiftCode}</MUITableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
          </Grid>
        </CardContent>

        <Divider
          sx={{ mt: theme => `${theme.spacing(1)} !important`, mb: theme => `${theme.spacing(2.5)} !important` }}
        />

        <RepeaterWrapper>
          <Repeater count={count}>
            {(i: number) => {
              const Tag = i === 0 ? Box : Collapse

              return (
                <Tag key={i} className='repeater-wrapper' {...(i !== 0 ? { in: true } : {})}>
                  <Grid container>
                    <RepeatingContent item xs={12}>
                      <Grid container sx={{ py: 4, width: '100%', pr: { lg: 0, xs: 4 } }}>
                        <Grid item lg={6} md={5} xs={12} sx={{ px: 4, my: { lg: 0, xs: 2 } }}>
                          <Typography className='col-title' sx={{ mb: { md: 2, xs: 0 } }}>
                            Item
                          </Typography>
                          <Select fullWidth size='small' defaultValue='App Design'>
                            <MenuItem value='App Design'>App Design</MenuItem>
                            <MenuItem value='App Customization'>App Customization</MenuItem>
                            <MenuItem value='ABC Template'>ABC Template</MenuItem>
                            <MenuItem value='App Development'>App Development</MenuItem>
                          </Select>
                          <TextField
                            rows={2}
                            fullWidth
                            multiline
                            size='small'
                            sx={{ mt: 2 }}
                            defaultValue='Customization & Bug Fixes'
                          />
                        </Grid>
                        <Grid item lg={2} md={3} xs={12} sx={{ px: 4, my: { lg: 0, xs: 2 } }}>
                          <Typography className='col-title' sx={{ mb: { md: 2, xs: 0 } }}>
                            Cost
                          </Typography>
                          <TextField
                            size='small'
                            type='number'
                            placeholder='24'
                            defaultValue='24'
                            InputProps={{ inputProps: { min: 0 } }}
                          />
                          <Box sx={{ mt: 2 }}>
                            <Typography component='span' sx={{ color: 'text.secondary' }}>
                              Discount:
                            </Typography>{' '}
                            <Typography component='span' sx={{ color: 'text.secondary' }}>
                              0%
                            </Typography>
                            <Tooltip title='Tax 1' placement='top'>
                              <Typography component='span' sx={{ mx: 2, color: 'text.secondary' }}>
                                0%
                              </Typography>
                            </Tooltip>
                            <Tooltip title='Tax 2' placement='top'>
                              <Typography component='span' sx={{ color: 'text.secondary' }}>
                                0%
                              </Typography>
                            </Tooltip>
                          </Box>
                        </Grid>
                        <Grid item lg={2} md={2} xs={12} sx={{ px: 4, my: { lg: 0, xs: 2 } }}>
                          <Typography className='col-title' sx={{ mb: { md: 2, xs: 0 } }}>
                            Hours
                          </Typography>
                          <TextField
                            size='small'
                            type='number'
                            placeholder='1'
                            defaultValue='1'
                            InputProps={{ inputProps: { min: 0 } }}
                          />
                        </Grid>
                        <Grid item lg={2} md={1} xs={12} sx={{ px: 4, my: { lg: 0 }, mt: 2 }}>
                          <Typography className='col-title' sx={{ mb: { md: 2, xs: 0 } }}>
                            Price
                          </Typography>
                          <Typography>$24.00</Typography>
                        </Grid>
                      </Grid>
                      <InvoiceAction>
                        <IconButton size='small' onClick={deleteForm}>
                          <Icon icon='bx:x' fontSize={20} />
                        </IconButton>
                      </InvoiceAction>
                    </RepeatingContent>
                  </Grid>
                </Tag>
              )
            }}
          </Repeater>

          <Grid container sx={{ mt: 4 }}>
            <Grid item xs={12} sx={{ px: 0 }}>
              <Button
                size='small'
                variant='contained'
                onClick={() => setCount(count + 1)}
                startIcon={<Icon icon='bx:plus' fontSize={20} />}
              >
                Add Item
              </Button>
            </Grid>
          </Grid>
        </RepeaterWrapper>

        <Divider sx={{ mt: '0 !important', mb: theme => `${theme.spacing(2.5)} !important` }} />

        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={9} sx={{ order: { sm: 1, xs: 2 } }}>
              <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <InputLabel
                  htmlFor='salesperson-input'
                  sx={{
                    mr: 12,
                    fontWeight: 600,
                    fontSize: '.75rem',
                    color: 'text.primary',
                    textTransform: 'uppercase'
                  }}
                >
                  Salesperson:
                </InputLabel>
                <TextField id='salesperson-input' size='small' defaultValue='Tommy Shelby' />
              </Box>
              <TextField size='small' defaultValue='Thanks for your business' />
            </Grid>
            <Grid item xs={12} sm={3} sx={{ mb: { sm: 0, xs: 4 }, order: { sm: 2, xs: 1 } }}>
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Subtotal:</Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$5000.25</Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Discount:</Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$00.00</Typography>
              </CalcWrapper>
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Tax:</Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$100.00</Typography>
              </CalcWrapper>
              <Divider sx={{ my: theme => `${theme.spacing(4)} !important` }} />
              <CalcWrapper>
                <Typography sx={{ color: 'text.secondary' }}>Total:</Typography>
                <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>$5100.25</Typography>
              </CalcWrapper>
            </Grid>
          </Grid>
          <Divider
            sx={{ mt: theme => `${theme.spacing(10)} !important`, mb: theme => `${theme.spacing(1)} !important` }}
          />
        </CardContent>

        <CardContent>
          <InputLabel
            htmlFor='invoice-note'
            sx={{ mb: 2, fontSize: '.75rem', fontWeight: 600, color: 'text.primary', textTransform: 'uppercase' }}
          >
            Note:
          </InputLabel>
          <TextField
            rows={2}
            fullWidth
            multiline
            id='invoice-note'
            defaultValue='It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!'
          />
        </CardContent>
      </Card>
    )
  } else {
    return null
  }
}

export default EditCard
