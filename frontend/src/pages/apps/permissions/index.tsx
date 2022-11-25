// ** React Imports
import { useState, useEffect, useCallback } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { DataGrid } from '@mui/x-data-grid'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import AlertTitle from '@mui/material/AlertTitle'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import PageHeader from 'src/@core/components/page-header'
import TableHeader from 'src/views/apps/permissions/TableHeader'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { PermissionRowType } from 'src/types/apps/permissionTypes'

// ** Actions Imports
import { fetchData } from 'src/store/apps/permissions'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface Colors {
  [key: string]: ThemeColor
}

interface CellType {
  row: PermissionRowType
}

const colors: Colors = {
  support: 'info',
  users: 'success',
  manager: 'warning',
  administrator: 'primary',
  'restricted-user': 'error'
}

const defaultColumns = [
  {
    flex: 0.25,
    field: 'name',
    minWidth: 240,
    headerName: 'Name',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.name}</Typography>
  },
  {
    flex: 0.35,
    minWidth: 280,
    field: 'assignedTo',
    headerName: 'Assigned To',
    renderCell: ({ row }: CellType) => {
      return row.assignedTo.map((assignee: string, index: number) => (
        <CustomChip
          rounded
          size='small'
          key={index}
          skin='light'
          color={colors[assignee]}
          label={assignee.replace('-', ' ')}
          sx={{ '&:not(:last-of-type)': { mr: 2 } }}
        />
      ))
    }
  },
  {
    flex: 0.25,
    minWidth: 215,
    field: 'createdDate',
    headerName: 'Created Date',
    renderCell: ({ row }: CellType) => <Typography sx={{ color: 'text.secondary' }}>{row.createdDate}</Typography>
  }
]

const PermissionsTable = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false)

  // ** Hooks
  const {
    control,
    setValue: setFormValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { name: '' } })
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.permissions)

  useEffect(() => {
    dispatch(
      fetchData({
        q: value
      })
    )
  }, [dispatch, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handleEditPermission = (name: string) => {
    setFormValue('name', name)
    setEditDialogOpen(true)
  }

  const handleDialogToggle = () => setEditDialogOpen(!editDialogOpen)

  const onSubmit = () => {
    setEditDialogOpen(false)
    setFormValue('name', '')
  }

  const columns = [
    ...defaultColumns,
    {
      flex: 0.15,
      minWidth: 115,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => handleEditPermission(row.name)}>
            <Icon fontSize={20} icon='bx:edit' />
          </IconButton>
          <IconButton>
            <Icon fontSize={20} icon='bx:trash' />
          </IconButton>
        </Box>
      )
    }
  ]

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <PageHeader
            title={<Typography sx={{ mb: 5, fontSize: '1.375rem', fontWeight: 700 }}>Permissions List</Typography>}
            subtitle={
              <Typography sx={{ color: 'text.secondary' }}>
                Each category (Basic, Professional, and Business) includes the four predefined roles shown below.
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <TableHeader value={value} handleFilter={handleFilter} />
            <DataGrid
              autoHeight
              rows={store.data}
              columns={columns}
              pageSize={pageSize}
              disableSelectionOnClick
              rowsPerPageOptions={[10, 25, 50]}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            />
          </Card>
        </Grid>
      </Grid>
      <Dialog
        maxWidth='sm'
        fullWidth
        onClose={handleDialogToggle}
        open={editDialogOpen}
        sx={{
          '& .MuiDialogTitle-root + .MuiDialogContent-root': {
            pt: theme => `${theme.spacing(1.5)} !important`
          }
        }}
      >
        <DialogTitle sx={{ pt: 16, mx: 'auto', textAlign: 'center', fontSize: '1.625rem !important' }}>
          Edit Permission
        </DialogTitle>
        <DialogContent sx={{ pb: 16, px: 18 }}>
          <Typography sx={{ mb: 6, textAlign: 'center', color: 'text.secondary' }}>
            Edit permission as per your requirements.
          </Typography>
          <Alert severity='warning' sx={{ maxWidth: '500px' }} icon={false}>
            <AlertTitle>Warning!</AlertTitle>
            By editing the permission name, you might break the system permissions functionality. Please ensure you're
            absolutely certain before proceeding.
          </Alert>

          <Box component='form' sx={{ mt: 5 }} onSubmit={handleSubmit(onSubmit)}>
            <FormGroup sx={{ mb: 2, alignItems: 'center', flexDirection: 'row', flexWrap: ['wrap', 'nowrap'] }}>
              <Controller
                name='name'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    size='small'
                    value={value}
                    label='Permission Name'
                    onChange={onChange}
                    error={Boolean(errors.name)}
                    sx={{ mr: [0, 4], mb: [3, 0] }}
                    placeholder='Enter Permission Name'
                  />
                )}
              />

              <Button type='submit' variant='contained'>
                Update
              </Button>
            </FormGroup>
            {errors.name && (
              <FormHelperText sx={{ color: 'error.main' }}>Please enter a valid permission name</FormHelperText>
            )}
            <FormControlLabel control={<Checkbox />} label='Set as core permission' />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PermissionsTable
