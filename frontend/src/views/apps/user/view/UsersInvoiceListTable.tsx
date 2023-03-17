// ** React Imports
import { MouseEvent, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { DataGrid } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { InvoiceType } from 'src/types/apps/invoiceTypes'

// ** Custom Component Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

interface Props {
  invoiceData: InvoiceType[]
}

interface InvoiceStatusObj {
  [key: string]: {
    icon: string
    color: ThemeColor
  }
}
interface CellType {
  row: InvoiceType
}

const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

// ** Vars
const invoiceStatusObj: InvoiceStatusObj = {
  Sent: { color: 'secondary', icon: 'bx:mail-send' },
  Paid: { color: 'success', icon: 'bx:pie-chart' },
  Draft: { color: 'primary', icon: 'bxs:save' },
  'Partial Payment': { color: 'warning', icon: 'bx:adjust' },
  'Past Due': { color: 'error', icon: 'bx:info-circle' },
  Downloaded: { color: 'info', icon: 'bx:down-arrow-circle' }
}

const columns = [
  {
    flex: 0.2,
    field: 'id',
    minWidth: 90,
    headerName: '# ID',
    renderCell: ({ row }: CellType) => (
      <Link href={`/apps/invoice/preview/${row.id}`} passHref>
        <StyledLink>{`#${row.id}`}</StyledLink>
      </Link>
    )
  },
  {
    flex: 0.15,
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
            <>
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
            </>
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
    minWidth: 90,
    field: 'total',
    headerName: 'Total',
    renderCell: ({ row }: CellType) => (
      <Typography variant="body2">${row.total || 0}</Typography>
    )
  },
  {
    flex: 0.3,
    minWidth: 125,
    field: 'issuedDate',
    headerName: 'Issued Date',
    renderCell: ({ row }: CellType) => (
      <Typography variant="body2">{row.issuedDate}</Typography>
    )
  },
  {
    flex: 0.1,
    minWidth: 130,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }: CellType) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title="Send Mail">
          <IconButton size="small">
            <Icon icon="bx:send" fontSize={20} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Preview">
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
        <Tooltip title="Download">
          <IconButton size="small">
            <Icon icon="bx:download" fontSize={20} />
          </IconButton>
        </Tooltip>
      </Box>
    )
  }
]

const InvoiceListTable = ({ invoiceData }: Props) => {
  // ** State
  const [pageSize, setPageSize] = useState<number>(7)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // ** Var
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <CardHeader
        title="Invoice List"
        sx={{ '& .MuiCardHeader-action': { m: 0 } }}
        action={
          <>
            <Button
              color="secondary"
              variant="outlined"
              aria-haspopup="true"
              onClick={handleClick}
              aria-expanded={open ? 'true' : undefined}
              endIcon={<Icon icon="bx:chevron-down" />}
              aria-controls={open ? 'user-view-overview-export' : undefined}
            >
              Export
            </Button>
            <Menu
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              id="user-view-overview-export"
            >
              <MenuItem onClick={handleClose}>PDF</MenuItem>
              <MenuItem onClick={handleClose}>XLSX</MenuItem>
              <MenuItem onClick={handleClose}>CSV</MenuItem>
            </Menu>
          </>
        }
      />
      <DataGrid
        autoHeight
        columns={columns}
        rows={invoiceData}
        pageSize={pageSize}
        disableSelectionOnClick
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      />
    </Card>
  )
}

export default InvoiceListTable
