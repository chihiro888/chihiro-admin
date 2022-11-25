// ** MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioSizes = () => {
  return (
    <RadioGroup row aria-label='sizes' name='sizes' defaultValue='small'>
      <FormControlLabel
        value='small'
        label='Small'
        control={<Radio size='small' sx={{ '& svg': { height: 20, width: 20 } }} />}
      />
      <FormControlLabel value='default' control={<Radio />} label='Default' />
    </RadioGroup>
  )
}

export default RadioSizes
