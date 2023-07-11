// ** React Imports
import { useState, MouseEvent } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface State {
  showPassword: boolean
  showConfirmPassword: boolean
}

const StepAccountDetails = ({ handleNext }: { handleNext: () => void }) => {
  // ** States
  const [values, setValues] = useState<State>({
    showPassword: false,
    showConfirmPassword: false
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword })
  }
  const handleMouseDownConfirmPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography variant='h5'>Account Information</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Enter Your Account Details</Typography>
      </Box>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField label='Username' placeholder='johndoe' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField type='email' label='Email' placeholder='john.doe@email.com' />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor='input-password'>Password</InputLabel>
            <OutlinedInput
              label='Password'
              id='input-password'
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                    <Icon fontSize={20} icon={values.showPassword ? 'bx:show' : 'bx:hide'} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor='input-confirm-password'>Password</InputLabel>
            <OutlinedInput
              label='Password'
              id='input-confirm-password'
              type={values.showConfirmPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                  >
                    <Icon fontSize={20} icon={values.showConfirmPassword ? 'bx:show' : 'bx:hide'} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label='Profile Link' placeholder='johndoe/profile' />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button disabled variant='contained' startIcon={<Icon icon='bx:chevron-left' fontSize={20} />}>
              Previous
            </Button>
            <Button variant='contained' onClick={handleNext} endIcon={<Icon icon='bx:chevron-right' fontSize={20} />}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default StepAccountDetails
