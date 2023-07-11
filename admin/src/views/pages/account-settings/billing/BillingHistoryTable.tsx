// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { DataGrid } from '@mui/x-data-grid'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import format from 'date-fns/format'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { ThemeColor } from 'src/@core/layouts/types'
import { InvoiceType } from 'src/types/apps/invoiceTypes'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

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

// ** Styled component for the link in the dataTable
const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

// ** Vars
const invoiceStatusObj: InvoiceStatusObj = {
  Paid: { color: 'success', icon: 'bx:check' },
  Sent: { color: 'secondary', icon: 'bx:send' },
  Downloaded: { color: 'info', icon: 'bx:down-arrow-alt' },
  Draft: { color: 'primary', icon: 'bx:save' },
  'Past Due': { color: 'error', icon: 'bx:info-circle' },
  'Partial Payment': { color: 'warning', icon: 'bx:adjust' }
}

// ** renders client column
const renderClient = (row: InvoiceType) => {
  if (row.avatar.length) {
    return (
      <CustomAvatar
        src={row.avatar}
        sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }}
      />
    )
  } else {
    return (
      <CustomAvatar
        skin="light"
        color={(row.avatarColor as ThemeColor) || ('primary' as ThemeColor)}
        sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}
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
    headerName: '#',
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
    renderHeader: () => <Icon icon="bx:trending-up" fontSize={20} />,
    renderCell: ({ row }: CellType) => {
      const { dueDate, balance, invoiceStatus } = row

      const color = invoiceStatusObj[invoiceStatus]
        ? invoiceStatusObj[invoiceStatus].color
        : 'primary'

      return (
        <Tooltip
          title={
            <div>
              <Typography
                variant="caption"
                sx={{ color: 'common.white', fontWeight: 600 }}
              >
                {invoiceStatus}
              </Typography>
              <br />
              <Typography
                variant="caption"
                sx={{ color: 'common.white', fontWeight: 600 }}
              >
                Balance:
              </Typography>{' '}
              {balance}
              <br />
              <Typography
                variant="caption"
                sx={{ color: 'common.white', fontWeight: 600 }}
              >
                Due Date:
              </Typography>{' '}
              {dueDate}
            </div>
          }
        >
          <CustomAvatar
            skin="light"
            color={color}
            sx={{ width: '1.875rem', height: '1.875rem' }}
          >
            <Icon icon={invoiceStatusObj[invoiceStatus].icon} fontSize="1rem" />
          </CustomAvatar>
        </Tooltip>
      )
    }
  },
  {
    flex: 0.25,
    field: 'name',
    minWidth: 300,
    headerName: 'Client',
    renderCell: ({ row }: CellType) => {
      const { name, companyEmail } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              noWrap
              variant="body2"
              sx={{ color: 'text.primary', fontWeight: 600 }}
            >
              {name}
            </Typography>
            <Typography noWrap variant="caption">
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
    renderCell: ({ row }: CellType) => (
      <Typography variant="body2">{`$${row.total || 0}`}</Typography>
    )
  },
  {
    flex: 0.15,
    minWidth: 125,
    field: 'issuedDate',
    headerName: 'Issued Date',
    renderCell: ({ row }: CellType) => (
      <Typography variant="body2">{row.issuedDate}</Typography>
    )
  },
  {
    flex: 0.1,
    minWidth: 90,
    field: 'balance',
    headerName: 'Balance',
    renderCell: ({ row }: CellType) => {
      return row.balance !== 0 ? (
        <Typography variant="body2" sx={{ color: 'text.primary' }}>
          {row.balance}
        </Typography>
      ) : (
        <CustomChip
          rounded
          size="small"
          skin="light"
          color="success"
          label="Paid"
        />
      )
    }
  }
]

/* eslint-disable */
const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  const startDate =
    props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate =
    props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

  const value = `${startDate}${endDate !== null ? endDate : ''}`
  props.start === null && props.dates.length && props.setDates
    ? props.setDates([])
    : null
  const updatedProps = { ...props }
  delete updatedProps.setDates

  return (
    <TextField
      fullWidth
      inputRef={ref}
      {...updatedProps}
      label={props.label || ''}
      value={value}
    />
  )
})
/* eslint-enable */

const BillingHistoryTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [statusValue, setStatusValue] = useState<string>('')

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.invoice)

  useEffect(() => {
    dispatch(
      fetchData({
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value])

  const handleFilter = (val: string) => {
    setValue(val)
  }

  const handleStatusValue = (e: SelectChangeEvent) => {
    setStatusValue(e.target.value)
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
          <Tooltip title="Delete Invoice">
            <IconButton
              size="small"
              onClick={() => dispatch(deleteInvoice(row.id))}
            >
              <Icon icon="bx:trash-alt" fontSize={20} />
            </IconButton>
          </Tooltip>
          <Tooltip title="View">
            <div>
              <Link href={`/apps/invoice/preview/${row.id}`} passHref>
                <IconButton
                  size="small"
                  component="a"
                  sx={{ textDecoration: 'none' }}
                >
                  <Icon icon="bx:show" fontSize={20} />
                </IconButton>
              </Link>
            </div>
          </Tooltip>
          <OptionsMenu
            iconProps={{ fontSize: 20 }}
            iconButtonProps={{ size: 'small' }}
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            options={[
              {
                text: 'Download',
                icon: <Icon icon="bx:download" fontSize={20} />
              },
              {
                text: 'Edit',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon="bx:pencil" fontSize={20} />
              },
              {
                text: 'Duplicate',
                icon: <Icon icon="bx:copy" fontSize={20} />
              }
            ]}
          />
        </Box>
      )
    }
  ]

  return (
    <Card>
      <CardHeader title="Billing History" />
      <Divider sx={{ m: '0 !important' }} />
      <CardContent>
        <Box
          sx={{
            gap: 4,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Link href="/apps/invoice/add" passHref>
            <Button variant="contained" startIcon={<Icon icon="bx:plus" />}>
              Create Invoice
            </Button>
          </Link>
          <Box
            sx={{
              gap: 4,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}
          >
            <TextField
              size="small"
              value={value}
              placeholder="Search Invoice"
              onChange={(e) => handleFilter(e.target.value)}
            />
            <FormControl size="small">
              <InputLabel id="invoice-status-select">Invoice Status</InputLabel>
              <Select
                sx={{ pr: 4 }}
                value={statusValue}
                label="Invoice Status"
                onChange={handleStatusValue}
                labelId="invoice-status-select"
              >
                <MenuItem value="">none</MenuItem>
                <MenuItem value="downloaded">Downloaded</MenuItem>
                <MenuItem value="draft">Draft</MenuItem>
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="past due">Past Due</MenuItem>
                <MenuItem value="partial payment">Partial Payment</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </CardContent>
      <DataGrid
        autoHeight
        pagination
        rows={store.data}
        columns={columns}
        disableSelectionOnClick
        pageSize={Number(pageSize)}
        rowsPerPageOptions={[10, 25, 50]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      />
    </Card>
  )
}

export default BillingHistoryTable
