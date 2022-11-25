// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonToggleVertical = () => {
  // ** State
  const [view, setView] = useState<string | null>('left')

  const handleView = (event: MouseEvent<HTMLElement>, newView: string | null) => {
    setView(newView)
  }

  return (
    <ToggleButtonGroup exclusive value={view} orientation='vertical' onChange={handleView} aria-label='text alignment'>
      <ToggleButton value='left' aria-label='left aligned'>
        <Icon icon='bx:grid-horizontal' />
      </ToggleButton>
      <ToggleButton value='center' aria-label='center aligned'>
        <Icon icon='bx:grid-vertical' />
      </ToggleButton>
      <ToggleButton value='right' aria-label='right aligned'>
        <Icon icon='bx:grid-small' />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ButtonToggleVertical
