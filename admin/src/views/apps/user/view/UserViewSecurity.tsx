// ** React Imports
import { ChangeEvent, MouseEvent, useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import AlertTitle from '@mui/material/AlertTitle'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import DialogTitle from '@mui/material/DialogTitle'
import OutlinedInput from '@mui/material/OutlinedInput'
import DialogContent from '@mui/material/DialogContent'
import InputAdornment from '@mui/material/InputAdornment'
import TableContainer from '@mui/material/TableContainer'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

interface State {
  newPassword: string
  showNewPassword: boolean
  confirmNewPassword: string
  showConfirmNewPassword: boolean
}

interface DataType {
  icon: string
  device: string
  browser: string
  location: string
  iconColor: ThemeColor
  recentActivity: string
}

const data: DataType[] = [
  {
    iconColor: 'info',
    device: 'HP Spectre 360',
    location: 'Switzerland',
    browser: 'Chrome on Windows',
    icon: 'bxl:windows',
    recentActivity: '10, July 2021 20:07'
  },
  {
    iconColor: 'error',
    device: 'iPhone 12x',
    icon: 'bx:mobile-alt',
    location: 'Australia',
    browser: 'Chrome on iPhone',
    recentActivity: '13, July 2021 10:10'
  },
  {
    location: 'Dubai',
    icon: 'bxl:android',
    iconColor: 'success',
    device: 'Oneplus 9 Pro',
    browser: 'Chrome on Android',
    recentActivity: '14, July 2021 15:15'
  },
  {
    location: 'India',
    icon: 'bxl:apple',
    device: 'Apple iMac	',
    iconColor: 'secondary',
    browser: 'Chrome on MacOS',
    recentActivity: '16, July 2021 16:17'
  },
  {
    iconColor: 'info',
    device: 'HP Spectre 360',
    location: 'Switzerland',
    browser: 'Chrome on Windows',
    icon: 'bxl:windows',
    recentActivity: '20, July 2021 21:01'
  },
  {
    location: 'Dubai',
    icon: 'bxl:android',
    iconColor: 'success',
    device: 'Oneplus 9 Pro',
    browser: 'Chrome on Android',
    recentActivity: '21, July 2021 12:22'
  }
]

const UserViewSecurity = () => {
  // ** States
  const [defaultValues, setDefaultValues] = useState<any>({
    mobile: '+1(968) 819-2547'
  })
  const [mobileNumber, setMobileNumber] = useState<string>(defaultValues.mobile)
  const [openEditMobileNumber, setOpenEditMobileNumber] =
    useState<boolean>(false)
  const [values, setValues] = useState<State>({
    newPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showConfirmNewPassword: false
  })

  // Handle Password
  const handleNewPasswordChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }
  const handleMouseDownNewPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmNewPasswordChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }
  const handleClickShowConfirmNewPassword = () => {
    setValues({
      ...values,
      showConfirmNewPassword: !values.showConfirmNewPassword
    })
  }
  const handleMouseDownConfirmNewPassword = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  // Handle edit mobile number dialog
  const handleEditMobileNumberClickOpen = () => setOpenEditMobileNumber(true)
  const handleEditMobileNumberClose = () => setOpenEditMobileNumber(false)

  // Handle button click inside the dialog
  const handleCancelClick = () => {
    setMobileNumber(defaultValues.mobile)
    handleEditMobileNumberClose()
  }
  const handleSubmitClick = () => {
    setDefaultValues({ ...defaultValues, mobile: mobileNumber })
    handleEditMobileNumberClose()
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Change Password" />
          <CardContent>
            <Alert icon={false} severity="warning" sx={{ mb: 6 }}>
              <AlertTitle
                sx={{
                  fontWeight: 600,
                  mb: (theme) => `${theme.spacing(1)} !important`
                }}
              >
                Ensure that these requirements are met
              </AlertTitle>
              Minimum 8 characters long, uppercase & symbol
            </Alert>

            <form onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="user-view-security-new-password">
                      New Password
                    </InputLabel>
                    <OutlinedInput
                      label="New Password"
                      value={values.newPassword}
                      id="user-view-security-new-password"
                      onChange={handleNewPasswordChange('newPassword')}
                      type={values.showNewPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowNewPassword}
                            aria-label="toggle password visibility"
                            onMouseDown={handleMouseDownNewPassword}
                          >
                            <Icon
                              icon={
                                values.showNewPassword ? 'bx:show' : 'bx:hide'
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="user-view-security-confirm-new-password">
                      Confirm New Password
                    </InputLabel>
                    <OutlinedInput
                      label="Confirm New Password"
                      value={values.confirmNewPassword}
                      id="user-view-security-confirm-new-password"
                      type={values.showConfirmNewPassword ? 'text' : 'password'}
                      onChange={handleConfirmNewPasswordChange(
                        'confirmNewPassword'
                      )}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmNewPassword}
                            onMouseDown={handleMouseDownConfirmNewPassword}
                          >
                            <Icon
                              icon={
                                values.showConfirmNewPassword
                                  ? 'bx:show'
                                  : 'bx:hide'
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    Change Password
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader
            title="Two-step verification"
            titleTypographyProps={{ sx: { mb: 1 } }}
            subheader="Keep your account secure with authentication step."
          />
          <CardContent>
            <Typography sx={{ mb: 2.5, fontWeight: 500 }}>SMS</Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Typography sx={{ color: 'text.secondary' }}>
                {mobileNumber}
              </Typography>
              <div>
                <IconButton
                  size="small"
                  aria-label="edit"
                  sx={{ color: 'text.secondary' }}
                  onClick={handleEditMobileNumberClickOpen}
                >
                  <Icon icon="bx:edit" fontSize={20} />
                </IconButton>
                <IconButton
                  size="small"
                  aria-label="delete"
                  sx={{ color: 'text.secondary' }}
                >
                  <Icon icon="bx:trash-alt" fontSize={20} />
                </IconButton>
              </div>
            </Box>

            <Divider
              sx={{
                mt: (theme) => `${theme.spacing(2)} !important`,
                mb: (theme) => `${theme.spacing(6)} !important`
              }}
            />

            <Typography
              sx={{
                color: 'text.secondary',
                '& a': {
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' }
                }
              }}
            >
              Two-factor authentication adds an additional layer of security to
              your account by requiring more than just a password to log in.{' '}
              <Link
                href="/"
                onClick={(e: SyntheticEvent) => e.preventDefault()}
              >
                Learn more
              </Link>
              .
            </Typography>
          </CardContent>

          <Dialog
            open={openEditMobileNumber}
            onClose={handleCancelClick}
            aria-labelledby="user-view-security-edit-mobile-number"
            sx={{
              '& .MuiPaper-root': { width: '100%', maxWidth: 560, p: [2, 10] }
            }}
            aria-describedby="user-view-security-edit-mobile-number-description"
          >
            <DialogTitle
              id="user-view-security-edit-mobile-number"
              sx={{
                mb: 6,
                textAlign: 'center',
                fontSize: '1.625rem !important'
              }}
            >
              Enable One Time Password
            </DialogTitle>

            <DialogContent>
              <Typography sx={{ mb: 4, fontWeight: 500 }}>
                Verify Your Mobile Number for SMS
              </Typography>
              <Typography sx={{ mb: 6, color: 'text.secondary' }}>
                Enter your mobile phone number with country code and we will
                send you a verification code.
              </Typography>
              <form onSubmit={(e) => e.preventDefault()}>
                <TextField
                  fullWidth
                  value={mobileNumber}
                  label="Mobile number with country code"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <Box sx={{ mt: 6, display: 'flex' }}>
                  <Button
                    type="submit"
                    sx={{ mr: 5 }}
                    variant="contained"
                    onClick={handleSubmitClick}
                  >
                    Submit
                  </Button>
                  <Button
                    type="reset"
                    color="secondary"
                    variant="outlined"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            </DialogContent>
          </Dialog>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardHeader title="Recent devices" />

          <Divider sx={{ m: '0 !important' }} />

          <TableContainer>
            <Table sx={{ minWidth: 500 }}>
              <TableHead
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'grey.50'
                      : 'background.default'
                }}
              >
                <TableRow>
                  <TableCell>Browser</TableCell>
                  <TableCell>Device</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Recent Activity</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((item: DataType, index: number) => (
                  <TableRow
                    hover
                    key={index}
                    sx={{ '&:last-of-type td': { border: 0 } }}
                  >
                    <TableCell>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          '& svg': { color: `${item.iconColor}.main` }
                        }}
                      >
                        <Icon icon={item.icon} fontSize={20} />
                        <Typography sx={{ ml: 4, fontWeight: 600 }}>
                          {item.browser}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{item.device}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.recentActivity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserViewSecurity
