import { DialogTitle, IconButton } from '@mui/material'
import Icon from 'src/@core/components/icon'

const CustomDialogTitle = ({ title, onClose }) => {
  return (
    <DialogTitle id="simple-dialog-title">
      테이블 헤더 편집
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 18,
          color: (theme) => theme.palette.grey[500]
        }}
      >
        <Icon icon="bx:bx-x" />
      </IconButton>
    </DialogTitle>
  )
}

export default CustomDialogTitle
