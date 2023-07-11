// ** React Imports
import { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationWrapper from 'src/views/pages/auth/AuthIllustrationWrapper'

// ** Third Party Components
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

// ** API
import { getAppInfo } from 'src/apis/global'
import { checkSystemAdmin, getAdminBySession, login } from 'src/apis/admin'

// ** Custom component
import FormHeader from 'src/components/custom/form-header'

// ** Redux
import { useAuth } from 'src/hooks/useAuth'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'
import { setAppInfo } from 'src/store/apps/app'

interface State {
  email: string
  password: string
  showPassword: boolean
}

const LoginV1 = () => {
  // ** State
  const [values, setValues] = useState<State>({
    // 이메일
    email: '',

    // 비밀번호
    password: '',
    showPassword: false
  })

  // ** Hook
  const { setUser } = useAuth()
  const theme = useTheme()
  const router = useRouter()
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()

  // ** Handler
  // 입력 값 수정
  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  // 비밀번호 보이기/숨기기
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  // 로그인 버튼 클릭
  const handleClickAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 로그인
    try {
      const params = {
        account: values.email,
        password: values.password
      }
      const { data: res } = await login(params)

      // 로그인 성공한 경우
      if (res.statusCode === 200) {
        // 관리자 정보 조회
        const { data: res } = await getAdminBySession()
        if (res.statusCode === 200) {
          // 관리자 정보 Context에 저장
          setUser({ ...res.data })

          // 로그인 이후 리다이렉트
          const returnUrl = router.query.returnUrl
          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
          router.replace(redirectURL as string)
        }
      }
    } catch (err: any) {
      toast.error(t(err.response.data.message))
    }
  }

  // 초기 데이터
  const initData = async () => {
    // 시스템 관리자 존재유무 확인
    const { data: res } = await checkSystemAdmin()
    if (res.statusCode === 200) {
      if (res.data) {
        // 시스템 관리자가 존재하지 않는 경우 관리자 계정 생성 페이지로 이동
        router.push('/login/init')
      }
    }

    try {
      // 앱 정보 조회
      const { data: res } = await getAppInfo()
      if (res.statusCode === 200) {
        // 앱 정보 설정
        dispatch(setAppInfo(res.data))
      }
    } catch (err) {
      // pass
    }
  }

  useEffect(() => {
    initData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
