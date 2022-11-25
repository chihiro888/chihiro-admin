// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TableContainer from '@mui/material/TableContainer'
import CircularProgress from '@mui/material/CircularProgress'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

interface DataType {
  src?: string
  name: string
  post: string
  value: number
  tasks: string
  project: string
  color: ThemeColor
}

const data: DataType[] = [
  {
    value: 58,
    tasks: '87/135',
    color: 'primary',
    project: 'Zipcar',
    name: 'Nathan Wagner',
    post: 'iOS Developer',
    src: '/images/avatars/17.png'
  },
  {
    value: 80,
    color: 'error',
    tasks: '340/420',
    project: 'Bitbank',
    name: 'Emma Bowen',
    post: 'UI/UX Designer',
    src: '/images/avatars/8.png'
  },
  {
    value: 60,
    tasks: '50/82',
    color: 'warning',
    project: 'Payers',
    name: 'Adrian McGuire',
    post: 'React developer'
  },
  {
    value: 55,
    color: 'info',
    tasks: '98/260',
    project: 'Brandi',
    name: 'Alma Gonzalez',
    post: 'Product Manager',
    src: '/images/avatars/2.png'
  },
  {
    value: 52,
    tasks: '12/25',
    project: 'Aviato',
    color: 'secondary',
    name: 'Travis Collins',
    post: 'VueJs developer',
    src: '/images/avatars/11.png'
  }
]

const CrmTeamMembers = () => {
  return (
    <Card>
      <CardHeader
        sx={{ pb: 0 }}
        title='Team Members'
        action={<OptionsMenu iconButtonProps={{ size: 'small' }} options={['Refresh', 'Share', 'Edit']} />}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ '& .MuiTableCell-root': { py: 4, border: 0 } }}>
              <TableCell>Name</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Tasks</TableCell>
              <TableCell>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: DataType) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{
                    '& .MuiTableCell-root': { border: 0, py: theme => `${theme.spacing(2)} !important` }
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {row.src ? (
                        <CustomAvatar src={row.src} alt={row.name} sx={{ mr: 3, width: 38, height: 38 }} />
                      ) : (
                        <CustomAvatar
                          skin='light'
                          color='warning'
                          sx={{ mr: 3, width: 38, height: 38, fontWeight: 600, fontSize: '1rem' }}
                        >
                          {getInitials(row.name)}
                        </CustomAvatar>
                      )}
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography noWrap sx={{ fontWeight: 500 }}>
                          {row.name}
                        </Typography>
                        <Typography noWrap variant='body2' sx={{ color: 'text.disabled' }}>
                          {row.post}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <CustomChip
                      size='small'
                      skin='light'
                      color={row.color}
                      label={row.project}
                      sx={{ fontWeight: 500 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex' }}>
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        {row.tasks}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', position: 'relative', justifyContent: 'center' }}>
                      <CircularProgress
                        size={32}
                        value={100}
                        thickness={5}
                        variant='determinate'
                        sx={{ position: 'absolute', color: 'customColors.trackBg' }}
                      />
                      <CircularProgress
                        size={32}
                        thickness={5}
                        value={row.value}
                        color={row.color}
                        variant='determinate'
                      />
                    </Box>
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

export default CrmTeamMembers
