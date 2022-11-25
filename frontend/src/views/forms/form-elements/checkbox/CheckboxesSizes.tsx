// ** MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckboxesSizes = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        label='Small'
        sx={{ '& svg': { height: 20, width: 20 } }}
        control={<Checkbox defaultChecked name='size-small' />}
      />
      <FormControlLabel label='Default' control={<Checkbox defaultChecked name='size-default' />} />
    </FormGroup>
  )
}

export default CheckboxesSizes
