export const DialogAlertJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const DialogAlert = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogAlert
`}</code>
  </pre>
)

export const DialogConfirmationJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const DialogConfirmation = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        disableEscapeKeyDown
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose()
          }
        }}
      >
        <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogConfirmation
`}</code>
  </pre>
)

export const DialogFormJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const DialogForm = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <TextField id='name' autoFocus fullWidth type='email' label='Email Address' />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogForm
`}</code>
  </pre>
)

export const DialogCustomizedJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled close button
const CustomCloseButton = styled(IconButton)(({ theme }) => ({
  top: '2.25rem',
  borderRadius: 8,
  right: '0.75rem',
  position: 'absolute',
  padding: theme.spacing(1.5),
  boxShadow: theme.shadows[3],
  marginTop: theme.spacing(-6),
  transition: 'all .23s ease .1s',
  transform: 'translate(23px, -25px)',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: 'translate(20px, -20px)',
    backgroundColor: theme.palette.background.paper
  }
}))

const DialogCustomized = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        sx={{ '& .MuiPaper-root': { overflow: 'visible' } }}
      >
        <DialogTitle id='customized-dialog-title' sx={{ position: 'relative' }}>
          <Typography variant='h6' component='span'>
            Modal title
          </Typography>
          <CustomCloseButton size='small' aria-label='close' onClick={handleClose}>
            <Icon icon='bx:x' />
          </CustomCloseButton>
        </DialogTitle>
        <DialogContent sx={{ p: 4, '& + .MuiDialogActions-root': { p: theme => {theme.spacing(3)} !important } }}>
          <Typography gutterBottom>
            Chupa chups jelly-o candy sweet roll wafer cake chocolate bar. Brownie sweet roll topping cake chocolate
            cake cheesecake tiramisu chocolate cake. Jujubes liquorice chocolate bar pastry. Chocolate jujubes caramels
            pastry.
          </Typography>
          <Typography gutterBottom>
            Ice cream marshmallow dragée bonbon croissant. Carrot cake sweet donut ice cream bonbon oat cake danish
            sugar plum. Gingerbread gummies marzipan gingerbread.
          </Typography>
          <Typography gutterBottom>
            Soufflé toffee ice cream. Jelly-o pudding sweet roll bonbon. Marshmallow liquorice icing. Jelly beans
            chocolate bar chocolate marzipan candy fruitcake jujubes.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogCustomized
`}</code>
  </pre>
)

export const DialogSizesJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { styled } from '@mui/material/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'
import Select from '@mui/material/Select'

// Styled component for the form
const Form = styled('form')({
  margin: 'auto',
  display: 'flex',
  width: 'fit-content',
  flexDirection: 'column'
})

const DialogSizes = () => {
  // ** States
  const [open, setOpen] = useState(false)
  const [fullWidth, setFullWidth] = useState(true)
  const [maxWidth, setMaxWidth] = useState('sm')
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleMaxWidthChange = event => {
    setMaxWidth(event.target.value)
  }

  const handleFullWidthChange = event => {
    setFullWidth(event.target.checked)
  }

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        onClose={handleClose}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle id='max-width-dialog-title'>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 4 }}>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Form noValidate>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor='max-width'>maxWidth</InputLabel>
              <Select
                label='maxWidth'
                value={maxWidth}
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width'
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value='xs'>xs</MenuItem>
                <MenuItem value='sm'>sm</MenuItem>
                <MenuItem value='md'>md</MenuItem>
                <MenuItem value='lg'>lg</MenuItem>
                <MenuItem value='xl'>xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              label='Full width'
              sx={{ mt: 2 }}
              control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
            />
          </Form>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogSizes
`}</code>
  </pre>
)

export const DialogFullScreenJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const DialogFullScreen = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog fullScreen onClose={handleClose} aria-labelledby='full-screen-dialog-title' open={open}>
        <DialogTitle id='full-screen-dialog-title'>
          <Typography variant='h6' component='span'>
            Modal title
          </Typography>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{ top: 8, right: 10, position: 'absolute', color: 'grey.500' }}
          >
            <Icon icon='bx:x' />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ '& + .MuiDialogActions-root': { p: theme => {theme.spacing(3)} !important } }}>
          <Typography gutterBottom>
            Chupa chups jelly-o candy sweet roll wafer cake chocolate bar. Brownie sweet roll topping cake chocolate
            cake cheesecake tiramisu chocolate cake. Jujubes liquorice chocolate bar pastry. Chocolate jujubes caramels
            pastry.
          </Typography>
          <Typography gutterBottom>
            Ice cream marshmallow dragée bonbon croissant. Carrot cake sweet donut ice cream bonbon oat cake danish
            sugar plum. Gingerbread gummies marzipan gingerbread.
          </Typography>
          <Typography gutterBottom>
            Soufflé toffee ice cream. Jelly-o pudding sweet roll bonbon. Marshmallow liquorice icing. Jelly beans
            chocolate bar chocolate marzipan candy fruitcake jujubes.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogFullScreen
`}</code>
  </pre>
)

export const DialogSimpleJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import MuiAvatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const emails = ['username@gmail.com', 'user02@gmail.com']

const DialogSimple = () => {
  // ** States
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(emails[1])
  const handleClickOpen = () => setOpen(true)
  const handleDialogClose = () => setOpen(false)

  const handleClose = value => {
    setOpen(false)
    setSelectedValue(value)
  }

  return (
    <div>
      <Typography variant='subtitle1' sx={{ mb: 2 }}>
        Selected: {selectedValue}
      </Typography>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog onClose={handleDialogClose} aria-labelledby='simple-dialog-title' open={open}>
        <DialogTitle id='simple-dialog-title'>Set backup account</DialogTitle>
        <List sx={{ pt: 0, px: '0 !important' }}>
          {emails.map(email => (
            <ListItem key={email} disablePadding onClick={() => handleClose(email)}>
              <ListItemButton>
                <ListItemAvatar>
                  <CustomAvatar skin='light'>
                    <Icon icon='bx:user' />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding onClick={() => handleClose('addAccount')}>
            <ListItemButton>
              <ListItemAvatar>
                <MuiAvatar>
                  <Icon icon='bx:plus' />
                </MuiAvatar>
              </ListItemAvatar>
              <ListItemText primary='Add account' />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export default DialogSimple
`}</code>
  </pre>
)

export const DialogRespoFullScreenJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

const DialogRespoFullScreen = () => {
  // ** State
  const [open, setOpen] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
        <DialogTitle id='responsive-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogRespoFullScreen
`}</code>
  </pre>
)

export const DialogsScrollJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { useEffect, useRef, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'
import DialogContentText from '@mui/material/DialogContentText'

const DialogsScroll = () => {
  // ** States
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')

  // ** Ref
  const descriptionElementRef = useRef(null)

  const handleClickOpen = scrollType => () => {
    setOpen(true)
    setScroll(scrollType)
  }
  const handleClose = () => setOpen(false)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div className='demo-space-x'>
      <Button variant='outlined' onClick={handleClickOpen('paper')}>
        scroll=paper
      </Button>
      <Button variant='outlined' onClick={handleClickOpen('body')}>
        scroll=body
      </Button>
      <Dialog
        open={open}
        scroll={scroll}
        onClose={handleClose}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <DialogTitle id='scroll-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
            {[...new Array(50)].map(
              () => Cotton candy sesame snaps toffee chupa chups caramels. Candy icing gummi bears pastry cake icing brownie
                oat cake. Tootsie roll biscuit chupa chups apple pie muffin jelly-o caramels. Muffin chocolate bar sweet
                cookie chupa chups.
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: theme => {theme.spacing(2.5)} !important }}>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogsScroll
`}</code>
  </pre>
)

export const DialogTransitionJSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { forwardRef, Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import DialogContentText from '@mui/material/DialogContentText'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const DialogTransition = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogTransition
`}</code>
  </pre>
)

export const DialogAlertTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const DialogAlert = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogAlert
`}</code>
  </pre>
)

export const DialogConfirmationTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const DialogConfirmation = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        disableEscapeKeyDown
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose()
          }
        }}
      >
        <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogConfirmation
`}</code>
  </pre>
)

export const DialogCustomizedTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled close button
const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  top: '2.25rem',
  borderRadius: 8,
  right: '0.75rem',
  position: 'absolute',
  padding: theme.spacing(1.5),
  boxShadow: theme.shadows[3],
  marginTop: theme.spacing(-6),
  transition: 'all .23s ease .1s',
  transform: 'translate(23px, -25px)',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: 'translate(20px, -20px)',
    backgroundColor: theme.palette.background.paper
  }
}))

const DialogCustomized = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        sx={{ '& .MuiPaper-root': { overflow: 'visible' } }}
      >
        <DialogTitle id='customized-dialog-title' sx={{ position: 'relative' }}>
          <Typography variant='h6' component='span'>
            Modal title
          </Typography>
          <CustomCloseButton size='small' aria-label='close' onClick={handleClose}>
            <Icon icon='bx:x' />
          </CustomCloseButton>
        </DialogTitle>
        <DialogContent sx={{ p: 4, '& + .MuiDialogActions-root': { p: theme => {theme.spacing(3)} !important } }}>
          <Typography gutterBottom>
            Chupa chups jelly-o candy sweet roll wafer cake chocolate bar. Brownie sweet roll topping cake chocolate
            cake cheesecake tiramisu chocolate cake. Jujubes liquorice chocolate bar pastry. Chocolate jujubes caramels
            pastry.
          </Typography>
          <Typography gutterBottom>
            Ice cream marshmallow dragée bonbon croissant. Carrot cake sweet donut ice cream bonbon oat cake danish
            sugar plum. Gingerbread gummies marzipan gingerbread.
          </Typography>
          <Typography gutterBottom>
            Soufflé toffee ice cream. Jelly-o pudding sweet roll bonbon. Marshmallow liquorice icing. Jelly beans
            chocolate bar chocolate marzipan candy fruitcake jujubes.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogCustomized
`}</code>
  </pre>
)

export const DialogFormTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const DialogForm = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <TextField id='name' autoFocus fullWidth type='email' label='Email Address' />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogForm
`}</code>
  </pre>
)

export const DialogFullScreenTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const DialogFullScreen = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog fullScreen onClose={handleClose} aria-labelledby='full-screen-dialog-title' open={open}>
        <DialogTitle id='full-screen-dialog-title'>
          <Typography variant='h6' component='span'>
            Modal title
          </Typography>
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{ top: 8, right: 10, position: 'absolute', color: 'grey.500' }}
          >
            <Icon icon='bx:x' />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ '& + .MuiDialogActions-root': { p: theme => {theme.spacing(3)} !important } }}>
          <Typography gutterBottom>
            Chupa chups jelly-o candy sweet roll wafer cake chocolate bar. Brownie sweet roll topping cake chocolate
            cake cheesecake tiramisu chocolate cake. Jujubes liquorice chocolate bar pastry. Chocolate jujubes caramels
            pastry.
          </Typography>
          <Typography gutterBottom>
            Ice cream marshmallow dragée bonbon croissant. Carrot cake sweet donut ice cream bonbon oat cake danish
            sugar plum. Gingerbread gummies marzipan gingerbread.
          </Typography>
          <Typography gutterBottom>
            Soufflé toffee ice cream. Jelly-o pudding sweet roll bonbon. Marshmallow liquorice icing. Jelly beans
            chocolate bar chocolate marzipan candy fruitcake jujubes.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogFullScreen
`}</code>
  </pre>
)

export const DialogSizesTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState, ChangeEvent } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import { styled, Breakpoint } from '@mui/material/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// Styled component for the form
const Form = styled('form')({
  margin: 'auto',
  display: 'flex',
  width: 'fit-content',
  flexDirection: 'column'
})

const DialogSizes = () => {
  // ** States
  const [open, setOpen] = useState<boolean>(false)
  const [fullWidth, setFullWidth] = useState<boolean>(true)
  const [maxWidth, setMaxWidth] = useState<Breakpoint>('sm')

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleMaxWidthChange = (event: SelectChangeEvent) => {
    setMaxWidth(event.target.value as Breakpoint)
  }

  const handleFullWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked)
  }

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        onClose={handleClose}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle id='max-width-dialog-title'>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 4 }}>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Form noValidate>
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor='max-width'>maxWidth</InputLabel>
              <Select
                label='maxWidth'
                value={maxWidth}
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width'
                }}
              >
                <MenuItem value={false as any}>false</MenuItem>
                <MenuItem value='xs'>xs</MenuItem>
                <MenuItem value='sm'>sm</MenuItem>
                <MenuItem value='md'>md</MenuItem>
                <MenuItem value='lg'>lg</MenuItem>
                <MenuItem value='xl'>xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              label='Full width'
              sx={{ mt: 2 }}
              control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
            />
          </Form>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogSizes
`}</code>
  </pre>
)

export const DialogRespoFullScreenTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import { useTheme } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

const DialogRespoFullScreen = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
        <DialogTitle id='responsive-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogRespoFullScreen
`}</code>
  </pre>
)

export const DialogSimpleTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import MuiAvatar from '@mui/material/Avatar'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const emails = ['username@gmail.com', 'user02@gmail.com']

const DialogSimple = () => {
  // ** States
  const [open, setOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>(emails[1])

  const handleClickOpen = () => setOpen(true)

  const handleDialogClose = () => setOpen(false)

  const handleClose = (value: string) => {
    setOpen(false)
    setSelectedValue(value)
  }

  return (
    <div>
      <Typography variant='subtitle1' sx={{ mb: 2 }}>
        Selected: {selectedValue}
      </Typography>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog onClose={handleDialogClose} aria-labelledby='simple-dialog-title' open={open}>
        <DialogTitle id='simple-dialog-title'>Set backup account</DialogTitle>
        <List sx={{ pt: 0, px: '0 !important' }}>
          {emails.map(email => (
            <ListItem key={email} disablePadding onClick={() => handleClose(email)}>
              <ListItemButton>
                <ListItemAvatar>
                  <CustomAvatar skin='light'>
                    <Icon icon='bx:user' />
                  </CustomAvatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding onClick={() => handleClose('addAccount')}>
            <ListItemButton>
              <ListItemAvatar>
                <MuiAvatar>
                  <Icon icon='bx:plus' />
                </MuiAvatar>
              </ListItemAvatar>
              <ListItemText primary='Add account' />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export default DialogSimple
`}</code>
  </pre>
)

export const DialogsScrollTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { useEffect, useRef, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogContentText from '@mui/material/DialogContentText'

const DialogsScroll = () => {
  // ** States
  const [open, setOpen] = useState<boolean>(false)
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper')

  // ** Ref
  const descriptionElementRef = useRef<HTMLElement>(null)

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => setOpen(false)

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div className='demo-space-x'>
      <Button variant='outlined' onClick={handleClickOpen('paper')}>
        scroll=paper
      </Button>
      <Button variant='outlined' onClick={handleClickOpen('body')}>
        scroll=body
      </Button>
      <Dialog
        open={open}
        scroll={scroll}
        onClose={handleClose}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <DialogTitle id='scroll-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
            {[...new Array(50)].map(
              () =>
                Cotton candy sesame snaps toffee chupa chups caramels. Candy icing gummi bears pastry cake icing brownie
                oat cake. Tootsie roll biscuit chupa chups apple pie muffin jelly-o caramels. Muffin chocolate bar sweet
                cookie chupa chups.
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: theme => {theme.spacing(2.5)} !important }}>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogsScroll
`}</code>
  </pre>
)

export const DialogTransitionTSXCode = (
  <pre className="language-jsx">
    <code className="language-jsx">{`// ** React Imports
import { forwardRef, Fragment, ReactElement, Ref, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide, { SlideProps } from '@mui/material/Slide'
import DialogContentText from '@mui/material/DialogContentText'

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const DialogTransition = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Disagree
          </Button>
          <Button variant='contained' onClick={handleClose}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogTransition
`}</code>
  </pre>
)
