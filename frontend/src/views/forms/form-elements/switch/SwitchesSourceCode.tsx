export const SwitchesBasicJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchesBasic = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch defaultChecked />} label='Checked' />
      <FormControlLabel control={<Switch />} label='Unchecked' />
      <FormControlLabel disabled control={<Switch defaultChecked />} label='Disabled Checked' />
      <FormControlLabel disabled control={<Switch />} label='Disabled Unchecked' />
    </FormGroup>
  )
}

export default SwitchesBasic
`}</code>
  </pre>
)

export const SwitchesColorsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchesColors = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch defaultChecked />} label='Primary' />
      <FormControlLabel control={<Switch defaultChecked color='secondary' />} label='Secondary' />
      <FormControlLabel control={<Switch defaultChecked color='success' />} label='Success' />
      <FormControlLabel control={<Switch defaultChecked color='error' />} label='Error' />
      <FormControlLabel control={<Switch defaultChecked color='warning' />} label='Warning' />
      <FormControlLabel control={<Switch defaultChecked color='info' />} label='Info' />
    </FormGroup>
  )
}

export default SwitchesColors
`}</code>
  </pre>
)

export const SwitchesControlledUncontrolledJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchesControlledUncontrolled = () => {
  // ** State
  const [checked, setChecked] = useState(false)

  const handleChange = event => {
    setChecked(event.target.checked)
  }

  return (
    <FormGroup row>
      <FormControlLabel label='Controlled' control={<Switch checked={checked} onChange={handleChange} />} />
      <FormControlLabel control={<Switch />} label='Uncontrolled' />
    </FormGroup>
  )
}

export default SwitchesControlledUncontrolled
`}</code>
  </pre>
)

export const SwitchesLabelPlacementJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchedLabelPlacement = () => {
  return (
    <div>
      <FormGroup row>
        <FormControlLabel value='top' label='Top' labelPlacement='top' sx={{ mr: 8 }} control={<Switch />} />
        <FormControlLabel value='bottom' control={<Switch />} label='Bottom' labelPlacement='bottom' />
      </FormGroup>
      <FormGroup row sx={{ mt: 4 }}>
        <FormControlLabel value='start' label='Start' labelPlacement='start' sx={{ mr: 4 }} control={<Switch />} />
        <FormControlLabel value='end' control={<Switch />} label='End' labelPlacement='end' />
      </FormGroup>
    </div>
  )
}

export default SwitchedLabelPlacement
`}</code>
  </pre>
)

export const SwitchesCustomizedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

// Styled FormControlLabel component
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  margin: '8px !important',
  '& .MuiSwitch-switchBase': {
    top: 0,
    margin: 1,
    padding: '0 !important',
    transform: 'translateX(-12px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="{encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="{encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')
    }
  },
  '& .MuiSwitch-track': {
    width: 48,
    border: 0,
    height: 20,
    opacity: 1,
    borderRadius: 10,
    boxShadow: 'none !important',
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
  }
}))

const SwitchesCustomized = () => (
  <FormControlLabel
    label='MUI switch'
    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked disableRipple={false} />}
  />
)

export default SwitchesCustomized
`}</code>
  </pre>
)

export const SwitchesStandaloneJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'

const SwitchesStandalone = () => {
  return (
    <div>
      <Switch defaultChecked />
      <Switch />
      <Switch disabled defaultChecked />
      <Switch disabled />
    </div>
  )
}

export default SwitchesStandalone
`}</code>
  </pre>
)

export const SwitchesSizesJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchesSizes = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch size='small' />} label='Small' />
      <FormControlLabel control={<Switch />} label='Default' />
    </FormGroup>
  )
}

export default SwitchesSizes
`}</code>
  </pre>
)

export const SwitchesColorsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchesColors = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch defaultChecked />} label='Primary' />
      <FormControlLabel control={<Switch defaultChecked color='secondary' />} label='Secondary' />
      <FormControlLabel control={<Switch defaultChecked color='success' />} label='Success' />
      <FormControlLabel control={<Switch defaultChecked color='error' />} label='Error' />
      <FormControlLabel control={<Switch defaultChecked color='warning' />} label='Warning' />
      <FormControlLabel control={<Switch defaultChecked color='info' />} label='Info' />
    </FormGroup>
  )
}

export default SwitchesColors
`}</code>
  </pre>
)

export const SwitchesBasicTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchesBasic = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch defaultChecked />} label='Checked' />
      <FormControlLabel control={<Switch />} label='Unchecked' />
      <FormControlLabel disabled control={<Switch defaultChecked />} label='Disabled Checked' />
      <FormControlLabel disabled control={<Switch />} label='Disabled Unchecked' />
    </FormGroup>
  )
}

export default SwitchesBasic
`}</code>
  </pre>
)

export const SwitchesControlledUncontrolledTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchesControlledUncontrolled = () => {
  // ** State
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <FormGroup row>
      <FormControlLabel label='Controlled' control={<Switch checked={checked} onChange={handleChange} />} />
      <FormControlLabel control={<Switch />} label='Uncontrolled' />
    </FormGroup>
  )
}

export default SwitchesControlledUncontrolled
`}</code>
  </pre>
)

export const SwitchesCustomizedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import { styled } from '@mui/material/styles'
import Switch, { SwitchProps } from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

// Styled FormControlLabel component
const MaterialUISwitch = styled(Switch)<SwitchProps>(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  margin: '8px !important',
  '& .MuiSwitch-switchBase': {
    top: 0,
    margin: 1,
    padding: '0 !important',
    transform: 'translateX(-12px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="{encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="{encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')
    }
  },
  '& .MuiSwitch-track': {
    width: 48,
    border: 0,
    height: 20,
    opacity: 1,
    borderRadius: 10,
    boxShadow: 'none !important',
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
  }
}))

const SwitchesCustomized = () => (
  <FormControlLabel
    label='MUI switch'
    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked disableRipple={false} />}
  />
)

export default SwitchesCustomized
`}</code>
  </pre>
)

export const SwitchesSizesTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchesSizes = () => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Switch size='small' />} label='Small' />
      <FormControlLabel control={<Switch />} label='Default' />
    </FormGroup>
  )
}

export default SwitchesSizes
`}</code>
  </pre>
)

export const SwitchesLabelPlacementTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const SwitchedLabelPlacement = () => {
  return (
    <div>
      <FormGroup row>
        <FormControlLabel value='top' label='Top' labelPlacement='top' sx={{ mr: 8 }} control={<Switch />} />
        <FormControlLabel value='bottom' control={<Switch />} label='Bottom' labelPlacement='bottom' />
      </FormGroup>
      <FormGroup row sx={{ mt: 4 }}>
        <FormControlLabel value='start' label='Start' labelPlacement='start' sx={{ mr: 4 }} control={<Switch />} />
        <FormControlLabel value='end' control={<Switch />} label='End' labelPlacement='end' />
      </FormGroup>
    </div>
  )
}

export default SwitchedLabelPlacement
`}</code>
  </pre>
)

export const SwitchesStandaloneTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Switch from '@mui/material/Switch'

const SwitchesStandalone = () => {
  return (
    <div>
      <Switch defaultChecked />
      <Switch />
      <Switch disabled defaultChecked />
      <Switch disabled />
    </div>
  )
}

export default SwitchesStandalone
`}</code>
  </pre>
)
