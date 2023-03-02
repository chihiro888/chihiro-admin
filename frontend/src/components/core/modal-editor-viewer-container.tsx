// ** React Imports
import { Ref, useState, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
// import { Viewer } from '@toast-ui/react-editor'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import dynamic from 'next/dynamic'

const Viewer = dynamic(
  () => import('@toast-ui/react-editor').then((mod) => mod.Viewer),
  { ssr: false }
)

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const ModalEditorViewerContainer = ({ title, content, nullContent = '' }) => {
  // ** States
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setShow(true)}>{title}</Button>
      <Dialog
        open={show}
        maxWidth="md"
        scroll="body"
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
      >
        <DialogContent
          sx={{
            pb: 8,
            px: { xs: 8, sm: 15 },
            pt: { xs: 8, sm: 12.5 },
            position: 'relative'
          }}
        >
          <IconButton
            size="small"
            onClick={() => setShow(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon="bx:x" />
          </IconButton>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              {title}
            </Typography>
          </Box>
          <Viewer initialValue={content ? content :  (nullContent ? nullContent : '내용이 없습니다.') } />
        </DialogContent>
        <DialogActions
          sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}
        ></DialogActions>
      </Dialog>
    </>
  )
}

export default ModalEditorViewerContainer
