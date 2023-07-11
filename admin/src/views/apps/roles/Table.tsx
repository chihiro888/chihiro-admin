// ** React Imports
import { useEffect, useCallback, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { DataGrid } from '@mui/x-data-grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { SelectChangeEvent } from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
import { fetchData } from 'src/store/apps/user'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { UsersType } from 'src/types/apps/userTypes'
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import TableHeader from 'src/views/apps/roles/TableHeader'

interface UserRoleType {
  [key: string]: { icon: string; color: ThemeColor }
}

interface UserRowColorType {
  [key: string]: ThemeColor
}

interface CellType {
  row: UsersType
}

// ** Vars
const userRoleObj: UserRoleType = {
  admin: { icon: 'bx:mobile-alt', color: 'error' },
  author: { icon: 'bx:cog', color: 'warning' },
  maintainer: { icon: 'bx:pie-chart-alt', color: 'success' },
  editor: { icon: 'bx:edit', color: 'info' },
  subscriber: { icon: 'bx:user', color: 'primary' }
}

const userStatusObj: UserRowColorType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

// ** renders client column
const renderClient = (row: UsersType) => {
  if (row.avatar.length) {
    return (
      <CustomAvatar src={row.avatar} sx={{ mr: 4, width: 30, height: 30 }} />
    )
  } else {
    return (
      <CustomAvatar
        skin="light"
        color={row.avatarColor}
        sx={{ mr: 4, width: 30, height: 30, fontSize: '0.875rem' }}
      >
        {getInitials(row.fullName ? row.fullName : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const columns = [
  {
    flex: 0.2,
    minWidth: 230,
    field: 'fullName',
    headerName: 'User',
    renderCell: ({ row }: CellType) => {
      const { fullName, username } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              flexDirection: 'column'
            }}
          >
            <Typography
              noWrap
              component="a"
              sx={{
                fontWeight: 600,
                color: 'text.secondary',
                textDecoration: 'none'
              }}
            >
              {fullName}
            </Typography>
            <Typography
              noWrap
              component="a"
              variant="body2"
              sx={{ color: 'text.disabled', textDecoration: 'none' }}
            >
              {`@${username}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 250,
    field: 'email',
    headerName: 'Email',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap sx={{ color: 'text.secondary' }}>
          {row.email}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    field: 'role',
    minWidth: 150,
    headerName: 'Role',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomAvatar
            skin="light"
            color={userRoleObj[row.role].color || 'primary'}
            sx={{ mr: 2, width: 30, height: 30, '& svg': { fontSize: '1rem' } }}
          >
            <Icon fontSize={20} icon={userRoleObj[row.role].icon} />
          </CustomAvatar>
          <Typography
            noWrap
            sx={{ color: 'text.secondary', textTransform: 'capitalize' }}
          >
            {row.role}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 120,
    headerName: 'Plan',
    field: 'currentPlan',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography
          noWrap
          sx={{
            fontWeight: 600,
            color: 'text.secondary',
            textTransform: 'capitalize'
          }}
        >
          {row.currentPlan}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 110,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellType) => {
      return (
        <CustomChip
          rounded
          skin="light"
          size="small"
          label={row.status}
          color={userStatusObj[row.status]}
        />
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: () => (
      <IconButton>
        <Icon icon="bx:show-alt" />
      </IconButton>
    )
  }
]

const UserList = () => {
  // ** State
  const [plan, setPlan] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(
      fetchData({
        role: '',
        q: value,
        status: '',
        currentPlan: plan
      })
    )
  }, [dispatch, plan, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handlePlanChange = useCallback((e: SelectChangeEvent) => {
    setPlan(e.target.value)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            plan={plan}
            value={value}
            handleFilter={handleFilter}
            handlePlanChange={handlePlanChange}
          />
          <DataGrid
            autoHeight
            rows={store.data}
            columns={columns}
            pageSize={pageSize}
            disableSelectionOnClick
            rowsPerPageOptions={[10, 25, 50]}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserList
