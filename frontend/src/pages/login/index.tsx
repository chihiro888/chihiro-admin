// ** React Imports
import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  ReactNode,
  useEffect,
  useState
} from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationWrapper from 'src/views/pages/auth/AuthIllustrationWrapper'
// import { checkAdmin, getAdmin, login } from 'src/apis/admin'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'src/hooks/useAuth'
import { checkSystemAdmin, getAdmin, login } from 'src/apis/admin'
import FormHeader from 'src/components/form-header'

interface State {
  email: string
  password: string
  showPassword: boolean
}

const LoginV1 = () => {
  // ** State
  const [values, setValues] = useState<State>({
    email: '',
    password: '',
    showPassword: false
  })

  // ** Hook
  const { setUser } = useAuth()
  const theme = useTheme()
  const router = useRouter()
  const { t } = useTranslation()

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleClickAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const params = {
        account: values.email,
        password: values.password
      }
      const { data: res } = await login(params)
      if (res.statusCode === 200) {
        const { data: res } = await getAdmin()
        if (res.statusCode === 200) {
          setUser({ role: 'admin', ...res.data })
          const returnUrl = router.query.returnUrl
          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
          router.replace(redirectURL as string)
        }
      }
    } catch (err: any) {
      toast.error(t(err.response.data.message))
    }
  }

  const initData = async () => {
    const { data: res } = await checkSystemAdmin()
    if (res.statusCode === 200) {
      if (res.data) {
        router.push('/login/init')
      }
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <Box className="content-center">
      <AuthIllustrationWrapper>
        <Card>
          <CardContent sx={{ p: `${theme.spacing(8, 8, 7)} !important` }}>
            <FormHeader />
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => handleClickAction(e)}
            >
              <TextField
                autoFocus
                fullWidth
                id="email"
                label="이메일"
                sx={{ mb: 4 }}
                onChange={handleChange('email')}
              />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel htmlFor="auth-login-password">비밀번호</InputLabel>
                <OutlinedInput
                  label="Password"
                  value={values.password}
                  id="auth-login-password"
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label="toggle password visibility"
                      >
                        <Icon
                          fontSize={20}
                          icon={values.showPassword ? 'bx:show' : 'bx:hide'}
                        />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{ mb: 4, mt: 5 }}
              >
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationWrapper>
    </Box>
  )
}

LoginV1.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

LoginV1.guestGuard = true

export default LoginV1
