import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import CustomCloseButton from '../custom-close-button'
import Icon from 'src/@core/components/icon'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { RootState } from 'src/store'
import { useSelector } from 'react-redux'

const DetailModal = ({ openDetailModal, setOpenDetailModal }) => {
  // ** Hooks
  const crud = useSelector((state: RootState) => state.crud)
  const detailForm = crud.detailForm

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
        <DialogContent style={{ minWidth: '300px' }}>
          <DialogContentText id="alert-dialog-description">
            {detailForm?.map((item, idx) => {
              return (
                <>
                  <Stack key={idx} sx={{ mb: 3 }}>
                    <Typography variant="body2">{item.label}</Typography>
                    <Typography>{item.value ? item.value : '-'}</Typography>
                  </Stack>
                </>
              )
            })}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DetailModal
