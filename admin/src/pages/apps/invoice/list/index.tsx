// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { ThemeColor } from 'src/@core/layouts/types'
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import TableHeader from 'src/views/apps/invoice/list/TableHeader'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface InvoiceStatusObj {
  [key: string]: {
    icon: string
    color: ThemeColor
  }
}

interface CustomInputProps {
  dates: Date[]
  label: string
  end: number | Date
  start: number | Date
  setDates?: (value: Date[]) => void
}

interface CellType {
  row: InvoiceType
}

// ** Styled components
const StyledLink = styled('a')(({ theme }) => ({
  fontSize: '1rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const StyledUserLink = styled('a')(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

// ** Vars
const invoiceStatusObj: InvoiceStatusObj = {
  Paid: { color: 'success', icon: 'bx:pie-chart-alt' },
  Sent: { color: 'secondary', icon: 'bx:paper-plane' },
  Downloaded: { color: 'info', icon: 'bx:down-arrow-circle' },
  Draft: { color: 'primary', icon: 'bxs:save' },
  'Past Due': { color: 'error', icon: 'bx:info-circle' },
  'Partial Payment': { color: 'warning', icon: 'bx:adjust' }
}

// ** renders client column
const renderClient = (row: InvoiceType) => {
  if (row.avatar.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 30, height: 30 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        sx={{ mr: 3, fontSize: '.8rem', width: 30, height: 30 }}
        color={(row.avatarColor as ThemeColor) || ('primary' as ThemeColor)}
      >
        {getInitials(row.name || 'John Doe')}
      </CustomAvatar>
    )
  }
}

const defaultColumns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 80,
    headerName: '#ID',
    renderCell: ({ row }: CellType) => (
      <Link href={`/apps/invoice/preview/${row.id}`} passHref>
        <StyledLink>{`#${row.id}`}</StyledLink>
      </Link>
    )
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: 'invoiceStatus',
    renderHeader: () => <Icon icon='bx:trending-up' fontSize={20} />,
    renderCell: ({ row }: CellType) => {
      const { dueDate, balance, invoiceStatus } = row

      const color = invoiceStatusObj[invoiceStatus] ? invoiceStatusObj[invoiceStatus].color : 'primary'

      return (
        <Tooltip
          title={
            <div>
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                {invoiceStatus}
              </Typography>
              <br />
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                Balance:
              </Typography>{' '}
              {balance}
              <br />
              <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
                Due Date:
              </Typography>{' '}
              {dueDate}
            </div>
          }
        >
          <CustomAvatar skin='light' color={color} sx={{ width: 30, height: 30 }}>
            <Icon fontSize='1rem' icon={invoiceStatusObj[invoiceStatus].icon} />
          </CustomAvatar>
        </Tooltip>
      )
    }
  },
  {
    flex: 0.3,
    field: 'name',
    minWidth: 300,
    headerName: 'Client',
    renderCell: ({ row }: CellType) => {
      const { name, companyEmail } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <StyledUserLink>{name}</StyledUserLink>
            <Typography noWrap variant='caption' sx={{ color: 'text.disabled' }}>
              {companyEmail}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 90,
    field: 'total',
    headerName: 'Total',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{`$${row.total || 0}`}</Typography>
  },
  {
    flex: 0.2,
    minWidth: 125,
    field: 'issuedDate',
    headerName: 'Issued Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.issuedDate}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 90,
    field: 'balance',
    headerName: 'Balance',
    renderCell: ({ row }: CellType) => {
      return row.balance !== 0 ? (
        <Typography sx={{ color: 'text.secondary' }}>{row.balance}</Typography>
      ) : (
        <CustomChip rounded size='small' skin='light' color='success' label='Paid' />
      )
    }
  }
]

/* eslint-disable */
const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

  const value = `${startDate}${endDate !== null ? endDate : ''}`
  props.start === null && props.dates.length && props.setDates ? props.setDates([]) : null
  const updatedProps = { ...props }
  delete updatedProps.setDates

  return <TextField fullWidth inputRef={ref} {...updatedProps} label={props.label || ''} value={value} />
})
/* eslint-enable */

const InvoiceList = () => {
  // ** State
  const [dates, setDates] = useState<Date[]>([])
  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [statusValue, setStatusValue] = useState<string>('')
  const [endDateRange, setEndDateRange] = useState<DateType>(null)
  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([])
  const [startDateRange, setStartDateRange] = useState<DateType>(null)

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.invoice)

  useEffect(() => {
    dispatch(
      fetchData({
        dates,
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value, dates])

  const handleFilter = (val: string) => {
    setValue(val)
  }

  const handleStatusValue = (e: SelectChangeEvent) => {
    setStatusValue(e.target.value)
  }

  const handleOnChangeRange = (dates: any) => {
    const [start, end] = dates
    if (start !== null && end !== null) {
      setDates(dates)
    }
    setStartDateRange(start)
    setEndDateRange(end)
  }

  const columns = [
    ...defaultColumns,
    {
      flex: 0.1,
      minWidth: 130,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title='Delete Invoice'>
            <IconButton size='small' onClick={() => dispatch(deleteInvoice(row.id))}>
              <Icon icon='bx:trash-alt' fontSize={20} />
            </IconButton>
          </Tooltip>
          <Tooltip title='View'>
            <div>
              <Link href={`/apps/invoice/preview/${row.id}`} passHref>
                <IconButton size='small' component='a' sx={{ textDecoration: 'none' }}>
                  <Icon icon='bx:show' fontSize={20} />
                </IconButton>
              </Link>
            </div>
          </Tooltip>
          <OptionsMenu
            iconProps={{ fontSize: 20 }}
            iconButtonProps={{ size: 'small' }}
            options={[
              { text: 'Download' },
              { text: 'Edit', href: `/apps/invoice/edit/${row.id}` },
              { text: 'Duplicate' }
            ]}
          />
        </Box>
      )
    }
  ]

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title='Filters' />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id='invoice-status-select'>Invoice Status</InputLabel>
                    <Select
                      fullWidth
                      value={statusValue}
                      sx={{ mr: 4, mb: 2 }}
                      label='Invoice Status'
                      onChange={handleStatusValue}
                      labelId='invoice-status-select'
                    >
                      <MenuItem value=''>none</MenuItem>
                      <MenuItem value='downloaded'>Downloaded</MenuItem>
                      <MenuItem value='draft'>Draft</MenuItem>
                      <MenuItem value='paid'>Paid</MenuItem>
                      <MenuItem value='past due'>Past Due</MenuItem>
                      <MenuItem value='partial payment'>Partial Payment</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    isClearable
                    selectsRange
                    monthsShown={2}
                    endDate={endDateRange}
                    selected={startDateRange}
                    startDate={startDateRange}
                    shouldCloseOnSelect={false}
                    id='date-range-picker-months'
                    onChange={handleOnChangeRange}
                    customInput={
                      <CustomInput
                        dates={dates}
                        setDates={setDates}
                        label='Invoice Date'
                        end={endDateRange as number | Date}
                        start={startDateRange as number | Date}
                      />
                    }
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <TableHeader value={value} selectedRows={selectedRows} handleFilter={handleFilter} />
            <DataGrid
              autoHeight
              pagination
              rows={store.data}
              columns={columns}
              checkboxSelection
              disableSelectionOnClick
              pageSize={Number(pageSize)}
              rowsPerPageOptions={[10, 25, 50]}
              onSelectionModelChange={rows => setSelectedRows(rows)}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default InvoiceList
