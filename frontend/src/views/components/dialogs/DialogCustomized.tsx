// ** React Imports
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
        <DialogContent sx={{ p: 4, '& + .MuiDialogActions-root': { p: theme => `${theme.spacing(3)} !important` } }}>
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
