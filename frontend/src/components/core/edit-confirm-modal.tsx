import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

const EditConfirmModal = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClickOpen = () => setOpen(true)
  const handleCloseClose = () => setOpen(false)

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">저장</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            현재 내용으로 저장하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseClose}
          >
            취소
          </Button>
          <Button variant="contained" onClick={handleCloseClose}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditConfirmModal
