export const SnackbarAlertJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'

const SnackbarAlert = () => {
  // ** State
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClick}>
        Open alert snackbar
      </Button>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
        <Alert variant='filled' elevation={3} onClose={handleClose} severity='success'>
          This is a success message!
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

export default SnackbarAlert
`}</code>
  </pre>
)

export const SnackbarConsecutiveJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** MUI Imports
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'

const SnackbarConsecutive = () => {
  // ** States
  const [open, setOpen] = useState(false)
  const [snackPack, setSnackPack] = useState([])
  const [messageInfo, setMessageInfo] = useState(undefined)
  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setOpen(true)
      setSnackPack(prev => prev.slice(1))
      setMessageInfo({ ...snackPack[0] })
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false)
    }
  }, [snackPack, messageInfo, open])

  const handleClick = message => () => {
    setSnackPack(prev => [...prev, { message, key: new Date().getTime() }])
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleExited = () => {
    setMessageInfo(undefined)
  }

  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='outlined' onClick={handleClick('success')}>
          Success Alert
        </Button>
        <Button variant='outlined' onClick={handleClick('error')}>
          Error Alert
        </Button>
      </div>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        TransitionProps={{ onExited: handleExited }}
        key={messageInfo ? messageInfo.key : undefined}
        message={messageInfo ? messageInfo.message : undefined}
      >
        <Alert
          elevation={3}
          variant='filled'
          onClose={handleClose}
          severity={messageInfo?.message === 'success' ? 'success' : 'error'}
        >
          This is {messageInfo?.message === 'success' ? 'a success' : 'an error'} message!
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

export default SnackbarConsecutive
`}</code>
  </pre>
)

export const SnackbarControlSlideDirectionJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'

const TransitionLeft = props => {
  return <Slide {...props} direction='left' />
}

const TransitionUp = props => {
  return <Slide {...props} direction='up' />
}

const TransitionRight = props => {
  return <Slide {...props} direction='right' />
}

const TransitionDown = props => {
  return <Slide {...props} direction='down' />
}

const SnackbarControlSlideDirection = () => {
  // ** States
  const [open, setOpen] = useState(false)
  const [transition, setTransition] = useState(undefined)

  const handleClick = Transition => () => {
    setTransition(() => Transition)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='outlined' onClick={handleClick(TransitionLeft)}>
          Right
        </Button>
        <Button variant='outlined' onClick={handleClick(TransitionUp)}>
          Up
        </Button>
        <Button variant='outlined' onClick={handleClick(TransitionRight)}>
          Left
        </Button>
        <Button variant='outlined' onClick={handleClick(TransitionDown)}>
          Down
        </Button>
      </div>
      <Snackbar
        open={open}
        onClose={handleClose}
        message='I love snacks'
        autoHideDuration={3000}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
      />
    </Fragment>
  )
}

export default SnackbarControlSlideDirection
`}</code>
  </pre>
)

export const SnackbarPositionedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'

const SnackbarPositioned = () => {
  // ** States
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  })
  const { vertical, horizontal, open } = state

  const handleClick = newState => () => {
    setState({ open: true, ...newState })
  }

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
          Top Center
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
          Top Right
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
          Bottom Right
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom Center
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
          Bottom Left
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
          Top Left
        </Button>
      </div>
      <Snackbar
        open={open}
        onClose={handleClose}
        message='I love snacks'
        autoHideDuration={3000}
        key={vertical + horizontal}
        anchorOrigin={{ vertical, horizontal }}
      />
    </Fragment>
  )
}

export default SnackbarPositioned
`}</code>
  </pre>
)

export const SnackbarSimpleJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const SnackbarSimple = () => {
  // ** State
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClick}>
        Open simple snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        message='Note archived'
        autoHideDuration={3000}
        action={
          <Fragment>
            <Button size='small' onClick={handleClose}>
              Undo
            </Button>
            <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
              <Icon icon='bx:x' fontSize={20} />
            </IconButton>
          </Fragment>
        }
      />
    </Fragment>
  )
}

export default SnackbarSimple
`}</code>
  </pre>
)

export const SnackbarTransitionJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Grow from '@mui/material/Grow'
import Fade from '@mui/material/Fade'
import Slide from '@mui/material/Slide'

const GrowTransition = props => {
  return <Grow {...props} />
}

const SlideTransition = props => {
  return <Slide {...props} direction='up' />
}

const SnackbarTransition = () => {
  // ** State
  const [state, setState] = useState({
    open: false,
    Transition: Fade
  })

  const handleClick = Transition => () => {
    setState({
      open: true,
      Transition
    })
  }

  const handleClose = () => {
    setState({
      ...state,
      open: false
    })
  }

  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='outlined' onClick={handleClick(GrowTransition)}>
          Grow Transition
        </Button>
        <Button variant='outlined' onClick={handleClick(Fade)}>
          Fade Transition
        </Button>
        <Button variant='outlined' onClick={handleClick(SlideTransition)}>
          Slide Transition
        </Button>
      </div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        message='I love snacks'
        autoHideDuration={3000}
        key={state.Transition.name}
        TransitionComponent={state.Transition}
      />
    </Fragment>
  )
}

export default SnackbarTransition
`}</code>
  </pre>
)

export const SnackbarAlertTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'

const SnackbarAlert = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event?: Event | SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClick}>
        Open alert snackbar
      </Button>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>
        <Alert variant='filled' elevation={3} onClose={handleClose} severity='success'>
          This is a success message!
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

export default SnackbarAlert
`}</code>
  </pre>
)

export const SnackbarConsecutiveTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, SyntheticEvent, useEffect, useState } from 'react'

// ** MUI Imports
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'

export interface SnackbarMessage {
  key: number
  message: string
}

const SnackbarConsecutive = () => {
  // ** States
  const [open, setOpen] = useState<boolean>(false)
  const [snackPack, setSnackPack] = useState<SnackbarMessage[]>([])
  const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(undefined)

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setOpen(true)
      setSnackPack(prev => prev.slice(1))
      setMessageInfo({ ...snackPack[0] })
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false)
    }
  }, [snackPack, messageInfo, open])

  const handleClick = (message: string) => () => {
    setSnackPack(prev => [...prev, { message, key: new Date().getTime() }])
  }

  const handleClose = (event: Event | SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleExited = () => {
    setMessageInfo(undefined)
  }

  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='outlined' onClick={handleClick('success')}>
          Success Alert
        </Button>
        <Button variant='outlined' onClick={handleClick('error')}>
          Error Alert
        </Button>
      </div>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        TransitionProps={{ onExited: handleExited }}
        key={messageInfo ? messageInfo.key : undefined}
        message={messageInfo ? messageInfo.message : undefined}
      >
        <Alert
          elevation={3}
          variant='filled'
          onClose={handleClose}
          severity={messageInfo?.message === 'success' ? 'success' : 'error'}
        >
          This is {messageInfo?.message === 'success' ? 'a success' : 'an error'} message!
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

export default SnackbarConsecutive
`}</code>
  </pre>
)

export const SnackbarControlSlideDirectionTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { ComponentType, Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Slide, { SlideProps } from '@mui/material/Slide'

type TransitionProps = Omit<SlideProps, 'direction'>

const TransitionLeft = (props: TransitionProps) => {
  return <Slide {...props} direction='left' />
}

const TransitionUp = (props: TransitionProps) => {
  return <Slide {...props} direction='up' />
}

const TransitionRight = (props: TransitionProps) => {
  return <Slide {...props} direction='right' />
}

const TransitionDown = (props: TransitionProps) => {
  return <Slide {...props} direction='down' />
}

const SnackbarControlSlideDirection = () => {
  // ** States
  const [open, setOpen] = useState<boolean>(false)
  const [transition, setTransition] = useState<ComponentType<TransitionProps> | undefined>(undefined)

  const handleClick = (Transition: ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='outlined' onClick={handleClick(TransitionLeft)}>
          Right
        </Button>
        <Button variant='outlined' onClick={handleClick(TransitionUp)}>
          Up
        </Button>
        <Button variant='outlined' onClick={handleClick(TransitionRight)}>
          Left
        </Button>
        <Button variant='outlined' onClick={handleClick(TransitionDown)}>
          Down
        </Button>
      </div>
      <Snackbar
        open={open}
        onClose={handleClose}
        message='I love snacks'
        autoHideDuration={3000}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
      />
    </Fragment>
  )
}

export default SnackbarControlSlideDirection
`}</code>
  </pre>
)

export const SnackbarSimpleTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const SnackbarSimple = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event: Event | SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClick}>
        Open simple snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        message='Note archived'
        autoHideDuration={3000}
        action={
          <Fragment>
            <Button size='small' onClick={handleClose}>
              Undo
            </Button>
            <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
              <Icon icon='bx:x' fontSize={20} />
            </IconButton>
          </Fragment>
        }
      />
    </Fragment>
  )
}

export default SnackbarSimple
`}</code>
  </pre>
)

export const SnackbarPositionedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'

interface State extends SnackbarOrigin {
  open: boolean
}

const SnackbarPositioned = () => {
  // ** States
  const [state, setState] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  })
  const { vertical, horizontal, open } = state

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState })
  }

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
          Top Center
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
          Top Right
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
          Bottom Right
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
          Bottom Center
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
          Bottom Left
        </Button>
        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
          Top Left
        </Button>
      </div>
      <Snackbar
        open={open}
        onClose={handleClose}
        message='I love snacks'
        autoHideDuration={3000}
        key={vertical + horizontal}
        anchorOrigin={{ vertical, horizontal }}
      />
    </Fragment>
  )
}

export default SnackbarPositioned
`}</code>
  </pre>
)

export const SnackbarTransitionTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { ComponentType, Fragment, ReactElement, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Grow, { GrowProps } from '@mui/material/Grow'
import Fade, { FadeProps } from '@mui/material/Fade'
import Slide, { SlideProps } from '@mui/material/Slide'

const GrowTransition = (props: GrowProps) => {
  return <Grow {...props} />
}

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction='up' />
}

const SnackbarTransition = () => {
  // ** State
  const [state, setState] = useState<{
    open: boolean
    Transition: ComponentType<
      FadeProps & {
        children?: ReactElement<any>
      }
    >
  }>({
    open: false,
    Transition: Fade
  })

  const handleClick =
    (
      Transition: ComponentType<
        FadeProps & {
          children?: ReactElement<any>
        }
      >
    ) =>
    () => {
      setState({
        open: true,
        Transition
      })
    }

  const handleClose = () => {
    setState({
      ...state,
      open: false
    })
  }

  return (
    <Fragment>
      <div className='demo-space-x'>
        <Button variant='outlined' onClick={handleClick(GrowTransition)}>
          Grow Transition
        </Button>
        <Button variant='outlined' onClick={handleClick(Fade)}>
          Fade Transition
        </Button>
        <Button variant='outlined' onClick={handleClick(SlideTransition)}>
          Slide Transition
        </Button>
      </div>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        message='I love snacks'
        autoHideDuration={3000}
        key={state.Transition.name}
        TransitionComponent={state.Transition}
      />
    </Fragment>
  )
}

export default SnackbarTransition
`}</code>
  </pre>
)
