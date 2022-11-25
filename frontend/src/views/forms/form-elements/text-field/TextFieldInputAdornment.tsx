// ** React Imports
import { ChangeEvent, MouseEvent, useState } from 'react'

// ** MUI Imports
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface State {
  weight: string
  password: string
  showPassword: boolean
}

const TextFieldInputAdornment = () => {
  // ** State
  const [values, setValues] = useState<State>({
    weight: '',
    password: '',
    showPassword: false
  })

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <TextField
        id='icons-start-adornment'
        label='With normal TextField'
        InputProps={{
          startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
        }}
      />
      <FormControl>
        <OutlinedInput
          value={values.weight}
          id='icons-adornment-weight'
          onChange={handleChange('weight')}
          aria-describedby='icons-weight-helper-text'
          endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
          inputProps={{
            'aria-label': 'weight'
          }}
        />
        <FormHelperText id='icons-weight-helper-text'>Weight</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='icons-adornment-password'>Password</InputLabel>
        <OutlinedInput
          label='Password'
          value={values.password}
          id='icons-adornment-password'
          onChange={handleChange('password')}
          type={values.showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                edge='end'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                aria-label='toggle password visibility'
              >
                <Icon fontSize={20} icon={values.showPassword ? 'bx:show' : 'bx:hide'} />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  )
}

export default TextFieldInputAdornment
