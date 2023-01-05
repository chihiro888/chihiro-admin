import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

const AddConfirmModal = ({
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
        <DialogTitle id="alert-dialog-title">추가 (확인)</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            데이터를 추가하시겠습니까?
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
              // TODO API 연동
            }}
          >
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddConfirmModal
