// ** React Imports
import { Ref, useState, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hooks
import useBgColor, { UseBgColorType } from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const DialogAuthentication = () => {
  // ** States
  const [show, setShow] = useState<boolean>(false)
  const [authType, setAuthType] = useState<'app' | 'sms'>('app')
  const [showAuthDialog, setShowAuthDialog] = useState<boolean>(false)

  // ** Hooks
  const { settings } = useSettings()
  const bgColors: UseBgColorType = useBgColor()

  // ** Var
  const { direction } = settings

  const handleClose = () => {
    setShow(false)
    setAuthType('app')
  }

  const handleAuthDialogClose = () => {
    if (show) {
      setShow(false)
    }
    setShowAuthDialog(false)
    if (authType !== 'app') {
      setTimeout(() => {
        setAuthType('app')
      }, 250)
    }
  }

  const arrowIcon = direction === 'ltr' ? 'bx:chevron-right' : 'bx:chevron-left'

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
        <Icon icon='bx:lock' fontSize='2rem' />
        <Typography variant='h6' sx={{ mb: 4 }}>
          Two Factor Auth
        </Typography>
        <Typography sx={{ mb: 3 }}>Enhance your application security by enabling two factor authentication.</Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={handleClose}
        onBackdropClick={handleClose}
        TransitionComponent={Transition}
      >
        <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton size='small' onClick={handleClose} sx={{ position: 'absolute', right: '1rem', top: '1rem' }}>
            <Icon icon='bx:x' />
          </IconButton>

          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant='h5' sx={{ mb: 3 }}>
                  Select Authentication Method
                </Typography>
                <Typography variant='body2'>
                  You also need to select a method by which the proxy authenticates to the directory serve.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                onClick={() => setAuthType('app')}
                sx={{
                  py: 4,
                  px: 7.2,
                  borderRadius: 1,
                  cursor: 'pointer',
                  ...(authType === 'app' ? { ...bgColors.primaryLight } : { backgroundColor: 'action.hover' }),
                  border: theme =>
                    `1px solid ${authType === 'app' ? theme.palette.primary.main : theme.palette.divider}`
                }}
              >
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', '& svg': { mr: 3 } }}>
                  <Icon icon='bx:cog' fontSize={35} />
                  <div>
                    <Typography
                      variant='h6'
                      sx={{ fontWeight: 600, ...(authType === 'app' ? { color: 'primary.main' } : {}) }}
                    >
                      Authenticator Apps
                    </Typography>
                    <Typography sx={{ ...(authType === 'app' ? { color: 'primary.main' } : {}) }}>
                      Get code from an app like Google Authenticator or Microsoft Authenticator.
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                onClick={() => setAuthType('sms')}
                sx={{
                  py: 4,
                  px: 7.2,
                  borderRadius: 1,
                  cursor: 'pointer',
                  ...(authType === 'sms' ? { ...bgColors.primaryLight } : { backgroundColor: 'action.hover' }),
                  border: theme =>
                    `1px solid ${authType === 'sms' ? theme.palette.primary.main : theme.palette.divider}`
                }}
              >
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', '& svg': { mr: 3 } }}>
                  <Icon icon='bx:message' fontSize={35} />
                  <div>
                    <Typography
                      variant='h6'
                      sx={{
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        ...(authType === 'sms' ? { color: 'primary.main' } : {})
                      }}
                    >
                      sms
                    </Typography>
                    <Typography sx={{ ...(authType === 'sms' ? { color: 'primary.main' } : {}) }}>
                      We will send a code via SMS if you need to use your backup login method.
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant='contained'
                endIcon={<Icon icon={arrowIcon} />}
                onClick={() => {
                  setShow(false)
                  setShowAuthDialog(true)
                }}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Dialog
        fullWidth
        maxWidth='md'
        scroll='body'
        open={showAuthDialog}
        onClose={handleAuthDialogClose}
        TransitionComponent={Transition}
        onBackdropClick={handleAuthDialogClose}
      >
        <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={handleAuthDialogClose}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon='bx:x' />
          </IconButton>

          <Grid container spacing={6}>
            <Grid item xs={12}>
              {authType === 'sms' ? (
                <div>
                  <Typography variant='h6'>Verify Your Mobile Number for SMS</Typography>
                  <Typography variant='body2'>
                    Enter your mobile phone number with country code and we will send you a verification code.
                  </Typography>
                  <TextField fullWidth sx={{ my: 4 }} label='Mobile Number' placeholder='+1 123 456 7890' />
                  <Grid container spacing={6}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant='outlined' color='secondary' onClick={handleAuthDialogClose} sx={{ mr: 4 }}>
                        Cancel
                      </Button>
                      <Button variant='contained' endIcon={<Icon icon={arrowIcon} />} onClick={handleAuthDialogClose}>
                        Continue
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <div>
                  <Typography variant='h5' sx={{ mb: 4, textAlign: 'center' }}>
                    Add Authenticator App
                  </Typography>
                  <Typography variant='h6'>Authenticator Apps</Typography>
                  <Typography variant='body2' sx={{ mb: 4 }}>
                    Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password,
                    scan the QR code. It will generate a 6 digit code for you to enter below.
                  </Typography>

                  <Box sx={{ my: 12, display: 'flex', justifyContent: 'center' }}>
                    <img width={122} height={122} alt='qr-code' src='/images/pages/themeselection-qr.png' />
                  </Box>

                  <Alert severity='warning' icon={false} sx={{ mb: 4, '& .MuiAlert-message': { overflow: 'hidden' } }}>
                    <AlertTitle sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      ASDLKNASDA9AHS678dGhASD78AB
                    </AlertTitle>
                    If you having trouble using the QR code, select manual entry on your app
                  </Alert>

                  <TextField
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Enter Authentication Code'
                    placeholder='Enter Authentication Code'
                  />
                  <Grid container spacing={6}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant='outlined' color='secondary' onClick={handleAuthDialogClose} sx={{ mr: 4 }}>
                        Cancel
                      </Button>
                      <Button variant='contained' endIcon={<Icon icon={arrowIcon} />} onClick={handleAuthDialogClose}>
                        Continue
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default DialogAuthentication
