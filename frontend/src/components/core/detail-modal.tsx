import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import CustomCloseButton from '../custom-close-button'
import Icon from 'src/@core/components/icon'

const DetailModal = ({ openDetailModal, setOpenDetailModal }) => {
  return (
    <>
      <Dialog
        open={openDetailModal}
        onClose={() => {
          setOpenDetailModal(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">상세</DialogTitle>
        <CustomCloseButton
          size="small"
          aria-label="close"
          onClick={() => {
            setOpenDetailModal(false)
          }}
        >
          <Icon icon="bx:x" />
        </CustomCloseButton>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            TODO
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DetailModal
