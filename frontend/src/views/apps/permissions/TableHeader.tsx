// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

interface TableHeaderProps {
  value: string
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { value, handleFilter } = props

  // ** State
  const [open, setOpen] = useState<boolean>(false)

  // ** Hooks
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { name: '' } })

  const handleDialogToggle = () => {
    setOpen(!open)
    setValue('name', '')
  }

  const onSubmit = () => {
    setOpen(false)
    setValue('name', '')
  }

  return (
    <>
      <Box
        sx={{
          p: 5,
          pb: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-end' }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ mr: 2, color: 'text.secondary' }}>
            Search
          </Typography>
          <TextField
            size="small"
            value={value}
            sx={{ mr: 4, mb: 2 }}
            placeholder="Search Permission"
            onChange={(e) => handleFilter(e.target.value)}
          />
        </Box>
        <Button sx={{ mb: 2 }} variant="contained" onClick={handleDialogToggle}>
          Add Permission
        </Button>
      </Box>
      <Dialog
        fullWidth
        maxWidth="sm"
        onClose={handleDialogToggle}
        open={open}
        sx={{
          '& .MuiDialogTitle-root + .MuiDialogContent-root': {
            pt: (theme) => `${theme.spacing(4)} !important`
          }
        }}
      >
        <DialogTitle
          sx={{
            pt: 16,
            mx: 'auto',
            textAlign: 'center',
            fontSize: '1.625rem !important'
          }}
        >
          Add New Permission
        </DialogTitle>
        <DialogContent sx={{ pb: 18, px: 18 }}>
          <Typography sx={{ color: 'text.secondary' }}>
            Permissions you may use and assign to your users.
          </Typography>
          <Box
            component="form"
            sx={{ mt: 7 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormGroup sx={{ mb: 4 }}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    value={value}
                    label="Permission Name"
                    onChange={onChange}
                    error={Boolean(errors.name)}
                    placeholder="Enter Permission Name"
                  />
                )}
              />
              {errors.name && (
                <FormHelperText sx={{ color: 'error.main' }}>
                  Please enter a valid permission name
                </FormHelperText>
              )}
            </FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Set as core permission"
            />
            <Box className="demo-space-x" sx={{ textAlign: 'center' }}>
              <Button
                size="large"
                type="submit"
                variant="contained"
                sx={{ mr: 5 }}
              >
                Create Permission
              </Button>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                onClick={handleDialogToggle}
              >
                Discard
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TableHeader
