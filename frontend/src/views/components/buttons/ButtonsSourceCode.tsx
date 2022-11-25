export const ButtonsColorsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsColors = () => {
  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button color='success'>Success</Button>
        <Button color='error'>Error</Button>
        <Button color='warning'>Warning</Button>
        <Button color='info'>Info</Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='outlined' color='success'>
          Success
        </Button>
        <Button variant='outlined' color='error'>
          Error
        </Button>
        <Button variant='outlined' color='warning'>
          Warning
        </Button>
        <Button variant='outlined' color='info'>
          Info
        </Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='contained' color='success'>
          Success
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
      </div>
    </Fragment>
  )
}

export default ButtonsColors
`}</code>
  </pre>
)

export const ButtonsFabJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsFab = () => {
  return (
    <>
      <Typography sx={{ fontWeight: 500 }}>Circular Variant</Typography>
      <Box sx={{ mb: 6 }} className='demo-space-x'>
        <Fab aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='primary' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='secondary' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='success' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='error' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='warning' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='info' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab disabled aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
      </Box>
      <Typography sx={{ fontWeight: 500 }}>Extended Variant</Typography>
      <div className='demo-space-x'>
        <Fab variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='primary' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='secondary' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='success' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='error' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='warning' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='info' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab disabled variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
      </div>
    </>
  )
}

export default ButtonsFab
`}</code>
  </pre>
)

export const ButtonsContainedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsContained = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='contained'>Primary</Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsContained
`}</code>
  </pre>
)

export const ButtonsFabSizesJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsFabSizes = () => {
  return (
    <Fragment>
      <div className='demo-space-x'>
        <Fab color='primary' aria-label='add' size='small'>
          <Icon icon='bx:plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='medium'>
          <Icon icon='bx:plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='large'>
          <Icon icon='bx:plus' />
        </Fab>
      </div>
      <div className='demo-space-x'>
        <Fab variant='extended' size='small' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:navigation' />
          Navigate
        </Fab>
        <Fab variant='extended' size='medium' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:navigation' />
          Navigate
        </Fab>
        <Fab variant='extended' size='large' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:navigation' />
          Navigate
        </Fab>
      </div>
    </Fragment>
  )
}

export default ButtonsFabSizes
`}</code>
  </pre>
)

export const ButtonsCustomizedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import { brown } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// Styled component for a custom button
const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: brown[500],
  color: theme.palette.getContrastText(brown[500]),
  '&:not(.Mui-disabled)': {
    boxShadow: 0 2px 4px 0 {hexToRGBA(brown[500], 0.4)} !important
  },
  '&:hover': {
    backgroundColor: brown[700],
    transform: 'none !important'
  }
}))

// Styled component for a Bootstrap button
const BootstrapButton = styled(Button)({
  fontSize: 16,
  lineHeight: 1.5,
  border: '1px solid',
  padding: '6px 12px',
  textTransform: 'none',
  borderColor: '#0063cc',
  backgroundColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:not(.Mui-disabled)': {
    boxShadow: 'none !important'
  },
  '&:hover': {
    boxShadow: 'none',
    borderColor: '#0062cc',
    backgroundColor: '#0069d9',
    transform: 'none !important'
  },
  '&:active': {
    boxShadow: 'none',
    borderColor: '#005cbf',
    backgroundColor: '#0062cc'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5) !important'
  }
})

const ButtonsCustomized = () => {
  return (
    <div className='demo-space-x'>
      <CustomButton variant='contained'>Custom Color</CustomButton>
      <BootstrapButton variant='contained' disableRipple>
        Bootstrap
      </BootstrapButton>
    </div>
  )
}

export default ButtonsCustomized
`}</code>
  </pre>
)

export const ButtonsSizesJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsSizes = () => {
  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='text' size='small'>
          Small
        </Button>
        <Button variant='text' size='medium'>
          Medium
        </Button>
        <Button variant='text' size='large'>
          Large
        </Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='outlined' size='small'>
          Small
        </Button>
        <Button variant='outlined' size='medium'>
          Medium
        </Button>
        <Button variant='outlined' size='large'>
          Large
        </Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </div>
      <div className='demo-space-x'>
        <IconButton aria-label='capture screenshot' color='secondary' size='small'>
          <Icon icon='bx:aperture' fontSize='inherit' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <Icon icon='bx:aperture' fontSize={20} />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <Icon icon='bx:aperture' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary' size='large'>
          <Icon icon='bx:aperture' fontSize={35} />
        </IconButton>
      </div>
    </Fragment>
  )
}

export default ButtonsSizes
`}</code>
  </pre>
)

export const ButtonsIconsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
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
`}</code>
  </pre>
)

export const ButtonsWithIconAndLabelJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Button from '@mui/material/Button'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsWithIconAndLabel = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='contained' endIcon={<Icon icon='bx:send' />}>
        Send
      </Button>
      <Button variant='contained' color='secondary' startIcon={<Icon icon='bx:trash-alt' />}>
        Delete
      </Button>
    </div>
  )
}

export default ButtonsWithIconAndLabel
`}</code>
  </pre>
)

export const ButtonsTextJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsText = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='text'>Primary</Button>
      <Button variant='text' color='secondary'>
        Secondary
      </Button>
      <Button variant='text' disabled>
        Disabled
      </Button>
      <Button variant='text' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsText
`}</code>
  </pre>
)

export const ButtonsOutlinedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsOutlined = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='outlined'>Primary</Button>
      <Button variant='outlined' color='secondary'>
        Secondary
      </Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
      <Button variant='outlined' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsOutlined
`}</code>
  </pre>
)

export const ButtonsColorsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsColors = () => {
  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button color='success'>Success</Button>
        <Button color='error'>Error</Button>
        <Button color='warning'>Warning</Button>
        <Button color='info'>Info</Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='outlined' color='success'>
          Success
        </Button>
        <Button variant='outlined' color='error'>
          Error
        </Button>
        <Button variant='outlined' color='warning'>
          Warning
        </Button>
        <Button variant='outlined' color='info'>
          Info
        </Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='contained' color='success'>
          Success
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
      </div>
    </Fragment>
  )
}

export default ButtonsColors
`}</code>
  </pre>
)

export const ButtonsContainedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsContained = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='contained'>Primary</Button>
      <Button variant='contained' color='secondary'>
        Secondary
      </Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsContained
`}</code>
  </pre>
)

export const ButtonsFabTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsFab = () => {
  return (
    <>
      <Typography sx={{ fontWeight: 500 }}>Circular Variant</Typography>
      <Box sx={{ mb: 6 }} className='demo-space-x'>
        <Fab aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='primary' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='secondary' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='success' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='error' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='warning' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab color='info' aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
        <Fab disabled aria-label='edit'>
          <Icon icon='bx:pencil' />
        </Fab>
      </Box>
      <Typography sx={{ fontWeight: 500 }}>Extended Variant</Typography>
      <div className='demo-space-x'>
        <Fab variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='primary' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='secondary' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='success' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='error' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='warning' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab color='info' variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
        <Fab disabled variant='extended' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:plus' />
          Add
        </Fab>
      </div>
    </>
  )
}

export default ButtonsFab
`}</code>
  </pre>
)

export const ButtonsIconsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
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
`}</code>
  </pre>
)

export const ButtonsCustomizedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import { brown } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// Styled component for a custom button
const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: brown[500],
  color: theme.palette.getContrastText(brown[500]),
  '&:not(.Mui-disabled)': {
    boxShadow: 0 2px 4px 0 {hexToRGBA(brown[500], 0.4)} !important
  },
  '&:hover': {
    backgroundColor: brown[700],
    transform: 'none !important'
  }
}))

// Styled component for a Bootstrap button
const BootstrapButton = styled(Button)({
  fontSize: 16,
  lineHeight: 1.5,
  border: '1px solid',
  padding: '6px 12px',
  textTransform: 'none',
  borderColor: '#0063cc',
  backgroundColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  '&:not(.Mui-disabled)': {
    boxShadow: 'none !important'
  },
  '&:hover': {
    boxShadow: 'none',
    borderColor: '#0062cc',
    backgroundColor: '#0069d9',
    transform: 'none !important'
  },
  '&:active': {
    boxShadow: 'none',
    borderColor: '#005cbf',
    backgroundColor: '#0062cc'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5) !important'
  }
})

const ButtonsCustomized = () => {
  return (
    <div className='demo-space-x'>
      <CustomButton variant='contained'>Custom Color</CustomButton>
      <BootstrapButton variant='contained' disableRipple>
        Bootstrap
      </BootstrapButton>
    </div>
  )
}

export default ButtonsCustomized
`}</code>
  </pre>
)

export const ButtonsSizesTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsSizes = () => {
  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='text' size='small'>
          Small
        </Button>
        <Button variant='text' size='medium'>
          Medium
        </Button>
        <Button variant='text' size='large'>
          Large
        </Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='outlined' size='small'>
          Small
        </Button>
        <Button variant='outlined' size='medium'>
          Medium
        </Button>
        <Button variant='outlined' size='large'>
          Large
        </Button>
      </div>
      <div className='demo-space-x'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Medium
        </Button>
        <Button variant='contained' size='large'>
          Large
        </Button>
      </div>
      <div className='demo-space-x'>
        <IconButton aria-label='capture screenshot' color='secondary' size='small'>
          <Icon icon='bx:aperture' fontSize='inherit' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <Icon icon='bx:aperture' fontSize={20} />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary'>
          <Icon icon='bx:aperture' />
        </IconButton>
        <IconButton aria-label='capture screenshot' color='secondary' size='large'>
          <Icon icon='bx:aperture' fontSize={35} />
        </IconButton>
      </div>
    </Fragment>
  )
}

export default ButtonsSizes
`}</code>
  </pre>
)

export const ButtonsOutlinedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsOutlined = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='outlined'>Primary</Button>
      <Button variant='outlined' color='secondary'>
        Secondary
      </Button>
      <Button variant='outlined' disabled>
        Disabled
      </Button>
      <Button variant='outlined' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsOutlined
`}</code>
  </pre>
)

export const ButtonsFabSizesTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Fab from '@mui/material/Fab'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsFabSizes = () => {
  return (
    <Fragment>
      <div className='demo-space-x'>
        <Fab color='primary' aria-label='add' size='small'>
          <Icon icon='bx:plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='medium'>
          <Icon icon='bx:plus' />
        </Fab>
        <Fab color='primary' aria-label='add' size='large'>
          <Icon icon='bx:plus' />
        </Fab>
      </div>
      <div className='demo-space-x'>
        <Fab variant='extended' size='small' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:navigation' />
          Navigate
        </Fab>
        <Fab variant='extended' size='medium' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:navigation' />
          Navigate
        </Fab>
        <Fab variant='extended' size='large' sx={{ '& svg': { mr: 1 } }}>
          <Icon icon='bx:navigation' />
          Navigate
        </Fab>
      </div>
    </Fragment>
  )
}

export default ButtonsFabSizes
`}</code>
  </pre>
)

export const ButtonsTextTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Button from '@mui/material/Button'

const ButtonsText = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='text'>Primary</Button>
      <Button variant='text' color='secondary'>
        Secondary
      </Button>
      <Button variant='text' disabled>
        Disabled
      </Button>
      <Button variant='text' href='#'>
        Link
      </Button>
    </div>
  )
}

export default ButtonsText
`}</code>
  </pre>
)

export const ButtonsWithIconAndLabelTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Button from '@mui/material/Button'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ButtonsWithIconAndLabel = () => {
  return (
    <div className='demo-space-x'>
      <Button variant='contained' endIcon={<Icon icon='bx:send' />}>
        Send
      </Button>
      <Button variant='contained' color='secondary' startIcon={<Icon icon='bx:trash-alt' />}>
        Delete
      </Button>
    </div>
  )
}

export default ButtonsWithIconAndLabel
`}</code>
  </pre>
)
