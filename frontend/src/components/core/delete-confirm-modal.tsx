import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

const DeleteConfirmModal = ({
  openDeleteConfirmModal,
  setOpenDeleteConfirmModal
}) => {
  return (
    <>
      <Dialog
        open={openDeleteConfirmModal}
        onClose={() => {
          setOpenDeleteConfirmModal(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">삭제 (확인)</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setOpenDeleteConfirmModal(false)
            }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              setOpenDeleteConfirmModal(false)
            }}
          >
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteConfirmModal
