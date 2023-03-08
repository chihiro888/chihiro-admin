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
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const ModalCodeViewerContainer = ({ title, content }) => {
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
          <SyntaxHighlighter language="json" style={vs2015}>
            {content}
          </SyntaxHighlighter>
        </DialogContent>
        <DialogActions
          sx={{ pb: { xs: 8, sm: 12.5 }, justifyContent: 'center' }}
        ></DialogActions>
      </Dialog>
    </>
  )
}

export default ModalCodeViewerContainer
