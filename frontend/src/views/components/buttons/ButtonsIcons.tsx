// ** MUI Imports
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsIcons = () => {
  return (
    <div className='demo-space-x'>
      <IconButton aria-label='capture screenshot'>
        <Icon icon='bx:aperture' />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='primary'>
        <Icon icon='bx:aperture' />
      </IconButton>
      <IconButton aria-label='capture screenshot' color='secondary'>
        <Icon icon='bx:aperture' />
      </IconButton>
      <IconButton aria-label='capture screenshot' disabled>
        <Icon icon='bx:aperture' />
      </IconButton>
    </div>
  )
}

export default ButtonsIcons
