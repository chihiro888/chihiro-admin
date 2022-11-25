// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonToggleMultiple = () => {
  // ** State
  const [formats, setFormats] = useState<string[]>(() => ['bold', 'italic'])

  const handleFormat = (event: MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats)
  }

  return (
    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label='text alignment'>
      <ToggleButton value='bold' aria-label='bold'>
        <Icon icon='bx:bold' />
      </ToggleButton>
      <ToggleButton value='italic' aria-label='italic'>
        <Icon icon='bx:italic' />
      </ToggleButton>
      <ToggleButton value='underlined' aria-label='underlined'>
        <Icon icon='bx:underline' />
      </ToggleButton>
      <ToggleButton value='color' aria-label='color' disabled>
        <Icon icon='bx:color-fill' />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ButtonToggleMultiple
