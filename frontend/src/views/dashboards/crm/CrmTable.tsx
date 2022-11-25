// ** MUI Import
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Avatar from '@mui/material/Avatar'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Import
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

interface TableData {
  email: string
  amount: number
  avatarSrc?: string
  customerName: string
  status: 'paid' | 'failed' | 'pending'
  paidBy: 'visa' | 'paypal' | 'mastercard'
}

const data: TableData[] = [
  {
    amount: 459.65,
    status: 'paid',
    paidBy: 'mastercard',
    email: 'jok@puc.co.uk',
    customerName: 'Henry Barnes',
    avatarSrc: '/images/avatars/7.png'
  },
  {
    amount: 93.81,
    paidBy: 'visa',
    status: 'pending',
    email: 'sami@lelo.com',
    customerName: 'Herman Holland',
    avatarSrc: '/images/avatars/20.png'
  },
  {
    paidBy: 'visa',
    amount: 934.34,
    status: 'pending',
    email: 'initus@odemi.com',
    customerName: 'Hallie Warner',
    avatarSrc: '/images/avatars/9.png'
  },
  {
    status: 'paid',
    amount: 794.97,
    paidBy: 'paypal',
    email: 'tum@upkesja.gov',
    customerName: 'John Davidson',
    avatarSrc: '/images/avatars/14.png'
  },
  {
    amount: 19.49,
    status: 'paid',
    paidBy: 'mastercard',
    email: 'wipare@tin.com',
    customerName: 'Cora Schmidt'
  },
  {
    amount: 636.27,
    paidBy: 'paypal',
    status: 'failed',
    email: 'nur@kaomor.edu',
    customerName: 'Betty Ross',
    avatarSrc: '/images/avatars/8.png'
  }
]

const statusObj = {
  paid: <CustomChip rounded size='small' skin='light' color='success' label='Paid' sx={{ fontWeight: 500 }} />,
  failed: <CustomChip rounded size='small' skin='light' color='error' label='Failed' sx={{ fontWeight: 500 }} />,
  pending: <CustomChip rounded size='small' skin='light' color='warning' label='Pending' sx={{ fontWeight: 500 }} />
}

const CrmTable = () => {
  // ** Hook & Var
  const { settings } = useSettings()
  const { mode, direction } = settings

  const paidByObj = {
    visa: <Avatar alt='visa' variant='rounded' sx={{ width: 50, height: 29 }} src={`/images/cards/visa-${mode}.png`} />,
    paypal: (
      <Avatar alt='paypal' variant='rounded' sx={{ width: 50, height: 29 }} src={`/images/cards/paypal-${mode}.png`} />
    ),
    mastercard: (
      <Avatar
        alt='mastercard'
        variant='rounded'
        sx={{ width: 50, height: 29 }}
        src={`/images/cards/mastercard-${mode}.png`}
      />
    )
  }

  return (
    <Card>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Customer</TableCell>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Amount</TableCell>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Status</TableCell>
              <TableCell sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>Paid By</TableCell>
              <TableCell align='center' sx={{ py: 3, lineHeight: 1.1, fontWeight: 600, whiteSpace: 'nowrap' }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: TableData, index: number) => {
              const { email, paidBy, amount, status, avatarSrc, customerName } = item

              return (
                <TableRow
                  key={index}
                  sx={{ '& .MuiTableCell-root': { py: theme => `${theme.spacing(2)} !important` } }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={avatarSrc} alt={customerName} sx={{ mr: 3.75, width: 38, height: 38 }} />
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography noWrap sx={{ fontWeight: 500 }}>
                          {customerName}
                        </Typography>
                        <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
                          {email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>{`$${amount}`}</Typography>
                  </TableCell>
                  <TableCell>{statusObj[status]}</TableCell>
                  <TableCell>{paidByObj[paidBy]}</TableCell>
                  <TableCell align='center'>
                    <OptionsMenu
                      iconButtonProps={{ size: 'small' }}
                      menuProps={{
                        sx: { '& .MuiMenuItem-root svg': { mr: 2 } },
                        anchorOrigin: { vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' },
                        transformOrigin: { vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }
                      }}
                      options={[
                        {
                          text: 'View Transaction',
                          icon: <Icon icon='bx:file' fontSize={20} />
                        },
                        {
                          text: 'Customer Profile',
                          icon: <Icon icon='bx:user' fontSize={20} />
                        },
                        {
                          text: 'Delete History',
                          icon: <Icon icon='bx:trash-alt' fontSize={20} />
                        }
                      ]}
                    />
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

export default CrmTable
