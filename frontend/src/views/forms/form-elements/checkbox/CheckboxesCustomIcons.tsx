// ** MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CheckboxesCustomIcons = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        label='Heart'
        control={
          <Checkbox
            defaultChecked
            name='size-small'
            icon={<Icon icon='bx:heart' fontSize={24} />}
            checkedIcon={<Icon icon='bxs:heart' fontSize={24} />}
          />
        }
      />
      <FormControlLabel
        label='Star'
        control={
          <Checkbox
            defaultChecked
            name='size-small'
            icon={<Icon icon='bx:star' fontSize={24} />}
            checkedIcon={<Icon icon='bxs:star' fontSize={24} />}
          />
        }
      />
    </FormGroup>
  )
}

export default CheckboxesCustomIcons
