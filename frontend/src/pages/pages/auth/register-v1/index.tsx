// ** React Imports
import { useState, ChangeEvent, MouseEvent, ReactNode } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationWrapper from 'src/views/pages/auth/AuthIllustrationWrapper'

interface State {
  password: string
  showPassword: boolean
}

// ** Styled Components
const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const RegisterV1 = () => {
  // ** States
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <Box className='content-center'>
      <AuthIllustrationWrapper>
        <Card>
          <CardContent sx={{ p: `${theme.spacing(8, 8, 7)} !important` }}>
            <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width={22} height={32} viewBox='0 0 55 81' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill={theme.palette.primary.main}
                  d='M30.1984 0.0144043C24.8945 0.425781 25.2534 6.16968 26.6435 7.65326C22.693 10.3649 13.1875 16.8867 6.76944 21.2803C1.21531 25.0824 -0.842975 34.6064 1.11159 40.8262C3.00952 46.8658 12.4904 51.3615 17.5337 52.7256C17.5337 52.7256 11.7188 56.0269 6.60358 60.0482C1.48831 64.0695 -0.622615 69.3436 3.06836 75.262C6.75933 81.1805 12.725 80.761 17.5257 78.6229C22.3264 76.4848 32.1683 69.1692 37.9402 65.1633C42.7282 61.5411 43.9669 53.6444 41.7631 46.9643C39.9758 41.5468 30.0969 36.4284 25.1792 34.6064C27.1946 33.1595 32.4935 29.4242 37.129 26.0909C38.7184 30.5636 43.9998 30.212 45.6103 27.8209C47.6216 23.4326 51.8339 13.4663 53.9579 8.55175C54.8862 4.81044 52.5639 2.78457 50.2227 2.35938C46.8672 1.75 38.3222 0.960115 30.1984 0.0144043Z'
                />
                <path
                  fillOpacity='0.2'
                  fill={theme.palette.common.white}
                  d='M26.6523 7.65625C24.9492 5.625 25.3239 0.255308 30.2922 0.0105286C33.0074 0.326611 35.7804 0.62685 38.3907 0.909477C43.5904 1.47246 48.1446 1.96556 50.311 2.3748C52.7331 2.83234 54.886 5.06072 53.9543 8.61103C53.2063 10.3418 52.2075 12.6646 51.1482 15.1282C49.1995 19.6601 47.0459 24.6685 45.8717 27.3445C44.7224 29.964 39.111 31.0585 37.1137 26.0951C32.4782 29.4283 27.2884 33.1556 25.273 34.6026C24.931 34.4553 24.3074 34.2381 23.5124 33.9613C20.8691 33.0407 16.331 31.4602 13.9477 29.5966C9.61363 25.5918 11.6259 19.4662 13.1737 16.904C17.8273 13.7183 20.7417 11.7161 23.4984 9.82236C24.5437 9.10427 25.5662 8.40178 26.6523 7.65625Z'
                />
                <path
                  fillOpacity='0.2'
                  fill={theme.palette.common.white}
                  d='M17.543 52.7266C21.2241 53.9875 28.5535 57.0509 30.091 59.101C32.0129 61.6635 33.1576 64.34 29.2527 71.2039C28.5954 71.6481 27.9821 72.0633 27.4069 72.4528C22.1953 75.9817 20.1085 77.3946 16.6243 79.0531C13.5855 80.2464 6.61575 81.7103 2.66559 74.5653C-1.11764 67.7222 3.23818 62.7113 6.5963 60.065L12.1695 56.0339L14.8359 54.3477L17.543 52.7266Z'
                />
              </svg>
              <Typography
                variant='h5'
                sx={{
                  ml: 2,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: '-0.45px',
                  textTransform: 'lowercase',
                  fontSize: '1.75rem !important'
                }}
              >
                {themeConfig.templateName}
              </Typography>
            </Box>
            <Typography variant='h6' sx={{ mb: 1.5 }}>
              Adventure starts here 🚀
            </Typography>
            <Typography sx={{ mb: 6, color: 'text.secondary' }}>Make your app management easy and fun!</Typography>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <TextField autoFocus fullWidth id='username' label='Username' sx={{ mb: 4 }} />
              <TextField fullWidth type='email' label='Email' sx={{ mb: 4 }} />
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-register-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='auth-register-password'
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        <Icon fontSize={20} icon={values.showPassword ? 'bx:show' : 'bx:hide'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox />}
                sx={{
                  mb: 4,
                  mt: 1.5,
                  '& .MuiFormControlLabel-label': { fontSize: '0.875rem', color: 'text.secondary' }
                }}
                label={
                  <>
                    <span>I agree to </span>
                    <Link href='/' passHref>
                      <LinkStyled onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                        privacy policy & terms
                      </LinkStyled>
                    </Link>
                  </>
                }
              />
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                Sign up
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography variant='body2' sx={{ mr: 2 }}>
                  Already have an account?
                </Typography>
                <Typography variant='body2'>
                  <Link passHref href='/pages/auth/login-v1'>
                    <LinkStyled>Sign in instead</LinkStyled>
                  </Link>
                </Typography>
              </Box>
              <Divider sx={{ my: `${theme.spacing(6)} !important` }}>or</Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link href='/' passHref>
                  <IconButton
                    component='a'
                    sx={{ color: '#497ce2' }}
                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  >
                    <Icon icon='bxl:facebook-circle' />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton
                    component='a'
                    sx={{ color: '#1da1f2' }}
                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  >
                    <Icon icon='bxl:twitter' />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton
                    component='a'
                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                    sx={{ color: theme.palette.mode === 'light' ? '#272727' : 'grey.300' }}
                  >
                    <Icon icon='bxl:github' />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton
                    component='a'
                    sx={{ color: '#db4437' }}
                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  >
                    <Icon icon='bxl:google' />
                  </IconButton>
                </Link>
              </Box>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationWrapper>
    </Box>
  )
}

RegisterV1.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterV1
