// ** MUI Imports
import Chip from '@mui/material/Chip'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ChipsIcon = () => {
  return (
    <div className='demo-space-x'>
      <Chip label='Previous' icon={<Icon icon='bx:left-arrow-circle' fontSize={20} />} />
      <Chip
        label='Next'
        color='primary'
        variant='outlined'
        icon={<Icon icon='bx:right-arrow-circle' fontSize={20} />}
      />
    </div>
  )
}

export default ChipsIcon
