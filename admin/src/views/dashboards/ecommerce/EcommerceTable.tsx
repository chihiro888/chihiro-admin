// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Table from '@mui/material/Table'
import Avatar from '@mui/material/Avatar'
import TableRow from '@mui/material/TableRow'
import MenuItem from '@mui/material/MenuItem'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Import
import Icon from 'src/@core/components/icon'

// ** Custom Component Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

interface TableData {
  brand: string
  product: string
  amountPaid: number
  amountToPay: number
  avatarSrcDark: string
  avatarSrcLight: string
  status: 'confirmed' | 'completed' | 'cancelled'
  category: 'mouse' | 'smart-tv' | 'computer' | 'smartphone'
}

const data: TableData[] = [
  {
    amountPaid: 120,
    brand: 'OnePlus',
    amountToPay: 499,
    status: 'confirmed',
    category: 'smartphone',
    product: 'OnePlus 7Pro',
    avatarSrcDark: '/images/cards/oneplus-7pro-dark.png',
    avatarSrcLight: '/images/cards/oneplus-7pro-light.png'
  },
  {
    brand: 'Apple',
    amountPaid: 149,
    amountToPay: 149,
    category: 'mouse',
    status: 'completed',
    product: 'Magic Mouse',
    avatarSrcDark: '/images/cards/apple-magic-mouse-dark.png',
    avatarSrcLight: '/images/cards/apple-magic-mouse-light.png'
  },
  {
    amountPaid: 0,
    brand: 'Apple',
    amountToPay: 899,
    status: 'cancelled',
    product: 'iMac Pro',
    category: 'computer',
    avatarSrcDark: '/images/cards/apple-iMac-pro-dark.png',
    avatarSrcLight: '/images/cards/apple-iMac-pro-light.png'
  },
  {
    amountPaid: 169,
    brand: 'Samsung',
    amountToPay: 169,
    product: 'Note 10',
    status: 'completed',
    category: 'smartphone',
    avatarSrcDark: '/images/cards/samsung-note-10-dark.png',
    avatarSrcLight: '/images/cards/samsung-note-10-light.png'
  },
  {
    brand: 'Apple',
    amountPaid: 399,
    amountToPay: 399,
    status: 'completed',
    category: 'smartphone',
    product: 'iPhone 11 Pro',
    avatarSrcDark: '/images/cards/apple-iPhone-11-pro-dark.png',
    avatarSrcLight: '/images/cards/apple-iPhone-11-pro-light.png'
  },
  {
    brand: 'Xiaomi',
    amountPaid: 349,
    amountToPay: 2599,
    status: 'confirmed',
    category: 'smart-tv',
    product: 'Mi Led TV 4X',
    avatarSrcDark: '/images/cards/mi-led-tv-4x-dark.png',
    avatarSrcLight: '/images/cards/mi-led-tv-4x-light.png'
  },
  {
    amountPaid: 89,
    amountToPay: 89,
    brand: 'Logitech',
    category: 'mouse',
    status: 'completed',
    product: 'Logitech MX',
    avatarSrcDark: '/images/cards/logitech-mx-dark.png',
    avatarSrcLight: '/images/cards/logitech-mx-light.png'
  }
]

const statusObj = {
  cancelled: <CustomChip rounded size='small' skin='light' color='error' label='Cancelled' sx={{ fontWeight: 500 }} />,
  confirmed: (
    <CustomChip rounded size='small' skin='light' color='primary' label='Confirmed' sx={{ fontWeight: 500 }} />
  ),
  completed: <CustomChip rounded size='small' skin='light' color='success' label='Completed' sx={{ fontWeight: 500 }} />
}

const categoryObj = {
  mouse: (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CustomAvatar skin='light' color='warning' sx={{ mr: 2, width: 30, height: 30 }}>
        <Icon icon='bx:mouse' fontSize={16} />
      </CustomAvatar>
      <Typography noWrap sx={{ color: 'text.secondary' }}>
        Mouse
      </Typography>
    </Box>
  ),
  computer: (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CustomAvatar skin='light' color='info' sx={{ mr: 2, width: 30, height: 30 }}>
        <Icon icon='bx:desktop' fontSize={16} />
      </CustomAvatar>
      <Typography noWrap sx={{ color: 'text.secondary' }}>
        Computer
      </Typography>
    </Box>
  ),
  'smart-tv': (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CustomAvatar skin='light' color='error' sx={{ mr: 2, width: 30, height: 30 }}>
        <Icon icon='bx:tv' fontSize={16} />
      </CustomAvatar>
      <Typography noWrap sx={{ color: 'text.secondary' }}>
        Smart TV
      </Typography>
    </Box>
  ),
  smartphone: (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CustomAvatar skin='light' sx={{ mr: 2, width: 30, height: 30 }}>
        <Icon icon='bx:mobile-alt' fontSize={16} />
      </CustomAvatar>
      <Typography noWrap sx={{ color: 'text.secondary' }}>
        Smart Phone
      </Typography>
    </Box>
  )
}

const RowOptions = ({ status }: { status: TableData['status'] }) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // ** Hook & Var
  const { settings } = useSettings()
  const { direction } = settings

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        size='small'
        aria-label='more'
        aria-haspopup='true'
        onClick={handleClick}
        aria-controls='more-options'
      >
        <Icon icon='bx:dots-vertical-rounded' />
      </IconButton>
      <Menu
        id='more-options'
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <MenuItem onClick={handleClose} sx={{ '& svg': { mr: 2, color: 'text.secondary' } }}>
          <Icon icon='bx:file' fontSize={20} />
          <Typography>View Details</Typography>
        </MenuItem>
        {status !== 'cancelled' && (
          <MenuItem onClick={handleClose} sx={{ '& svg': { mr: 2, color: 'text.secondary' } }}>
            <Icon icon='bx:printer' fontSize={20} />
            <Typography>Print Invoice</Typography>
          </MenuItem>
        )}
        <MenuItem onClick={handleClose} sx={{ '& svg': { mr: 2, color: 'text.secondary' } }}>
          <Icon icon='bx:cart-add' fontSize={20} />
          <Typography>Buy Again</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ '& svg': { mr: 2, color: 'text.secondary' } }}>
          <Icon icon='bx:trash-alt' fontSize={20} />
          <Typography>Delete History</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

const EcommerceTable = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Product</TableCell>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Category</TableCell>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Payment</TableCell>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Order Status</TableCell>
              <TableCell align='center' sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: TableData, index: number) => {
              const { brand, status, product, category, amountPaid, amountToPay, avatarSrcDark, avatarSrcLight } = item

              return (
                <TableRow
                  key={index}
                  sx={{ '& .MuiTableCell-root': { py: theme => `${theme.spacing(2)} !important` } }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        alt={product}
                        variant='rounded'
                        sx={{ mr: 2.5, width: 32, height: 32 }}
                        src={theme.palette.mode === 'dark' ? avatarSrcDark : avatarSrcLight}
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography noWrap sx={{ fontWeight: 600, color: 'text.secondary' }}>
                          {product}
                        </Typography>
                        <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
                          {brand}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{categoryObj[category]}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      {amountPaid === 0 ? (
                        <Typography sx={{ color: 'text.disabled' }}>{`$0/$${amountToPay}`}</Typography>
                      ) : amountPaid === amountToPay ? (
                        <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>{`$${amountToPay}`}</Typography>
                      ) : (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>{`$${amountPaid}`}</Typography>
                          <Typography sx={{ color: 'text.disabled' }}>{`/$${amountToPay}`}</Typography>
                        </Box>
                      )}
                      {amountPaid === 0 ? (
                        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                          Unpaid
                        </Typography>
                      ) : amountPaid === amountToPay ? (
                        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                          Fully Paid
                        </Typography>
                      ) : (
                        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                          Partially Paid
                        </Typography>
                      )}
                    </Box>
                  </TableCell>
                  <TableCell>{statusObj[status]}</TableCell>
                  <TableCell align='center'>
                    <RowOptions status={status} />
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default EcommerceTable
