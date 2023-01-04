import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

const EditConfirmModal = ({
  openConfirmModal,
  handleClickCloseConfirmModal
}) => {
  return (
    <>
      <Dialog
        open={openConfirmModal}
        onClose={handleClickCloseConfirmModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">수정 (확인)</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            수정하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickCloseConfirmModal}
          >
            취소
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              //
            }}
          >
            수정
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditConfirmModal
