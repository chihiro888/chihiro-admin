// ** React Imports
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
