// ** MUI Imports
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import Radio, { RadioProps } from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'

// Inspired by blueprintjs
const BpRadio = (props: RadioProps) => {
  return (
    <Radio
      {...props}
      disableRipple={false}
      sx={{ '& svg': { height: 18, width: 18 } }}
      checkedIcon={
        <svg width='24' height='24' viewBox='0 0 24 24'>
          <path fill='currentColor' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
        </svg>
      }
      icon={
        <svg width='24' height='24' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'
          />
        </svg>
      }
    />
  )
}

const RadioCustomized = () => {
  return (
    <FormControl>
      <FormLabel component='legend'>Gender</FormLabel>
      <RadioGroup row defaultValue='female' aria-label='gender' name='customized-radios'>
        <FormControlLabel value='female' control={<BpRadio />} label='Female' />
        <FormControlLabel value='male' control={<BpRadio />} label='Male' />
        <FormControlLabel value='other' control={<BpRadio />} label='Other' />
        <FormControlLabel value='disabled' disabled control={<BpRadio />} label='Disabled' />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioCustomized
