// ** MUI Imports
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) => `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'}`
)

const AutocompleteDisabledOptions = () => {
  return (
    <Autocomplete
      sx={{ width: 250 }}
      options={timeSlots}
      id='autocomplete-disabled-options'
      renderInput={params => <TextField {...params} label='Disabled options' />}
      getOptionDisabled={option => option === timeSlots[0] || option === timeSlots[2]}
    />
  )
}

export default AutocompleteDisabledOptions
