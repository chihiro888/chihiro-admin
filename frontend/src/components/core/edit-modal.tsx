import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import EditConfirmModal from './edit-confirm-modal'

const EditModal = ({ openEditModal, setOpenEditModal }) => {
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false)
  const handleClickOpenConfirmModal = () => setOpenConfirmModal(true)
  const handleClickCloseConfirmModal = () => setOpenConfirmModal(false)

  return (
    <>
      <Dialog
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">수정</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            TODO
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setOpenEditModal(false)
            }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleClickOpenConfirmModal()
            }}
          >
            수정
          </Button>
        </DialogActions>
      </Dialog>

      <EditConfirmModal
        openConfirmModal={openConfirmModal}
        handleClickCloseConfirmModal={handleClickCloseConfirmModal}
      />
    </>
  )
}

export default EditModal
