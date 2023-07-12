// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { updatePassword } from 'src/apis/admin'
import { useTranslation } from 'react-i18next'

interface State {
  showNewPassword: boolean
  showCurrentPassword: boolean
  showConfirmNewPassword: boolean
}

const defaultValues = {
  newPassword: '',
  currentPassword: '',
  confirmNewPassword: ''
}

const schema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(8, '기존 비밀번호는 최소 8자리입니다.')
    .required('기존 비밀번호는 필수 입력항목입니다.'),
  newPassword: yup
    .string()
    .min(8, '새로운 비밀번호는 최소 8자리입니다.')
    .required('새로운 비밀번호는 필수 입력항목입니다.'),
  confirmNewPassword: yup
    .string()
    .required('새로운 비밀번호 확인은 필수 입력항목입니다.')
    .oneOf(
      [yup.ref('newPassword')],
      '새로운 비밀번호와 새로운 비밀번호 확인이 일차하지 않습니다.'
    )
})

const ChangePasswordCard = () => {
  // ** States
  const [values, setValues] = useState<State>({
    showNewPassword: false,
    showCurrentPassword: false,
    showConfirmNewPassword: false
  })

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues, resolver: yupResolver(schema) })
  const { t } = useTranslation()

  // ** Handler
  // 기존 비밀번호 보임/숨김
  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
  }

  // 새로운 비밀번호 보임/숨김
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  // 새로운 비밀번호 확인 보임/숨김
  const handleClickShowConfirmNewPassword = () => {
    setValues({
      ...values,
      showConfirmNewPassword: !values.showConfirmNewPassword
    })
  }

  // 비밀번호 변경
  const onPasswordFormSubmit = async (data: any) => {
    try {
      const params = {
        oldPassword: data.currentPassword,
        newPassword: data.newPassword,
        confirmNewPassword: data.confirmNewPassword
      }
      const { data: res } = await updatePassword(params)
      if (res.statusCode === 200) {
        toast.success(t(res.message))
        reset(defaultValues)
      }
    } catch (err: any) {
      toast.error(t(err.response.data.message))
    }
  }

  return (
    <Card>
      <CardHeader title="비밀번호 변경" />
      <CardContent>
        <form onSubmit={handleSubmit(onPasswordFormSubmit)}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="input-current-password"
                  error={Boolean(errors.currentPassword)}
                  style={{ top: '-6px' }}
                >
                  기존 비밀번호
                </InputLabel>
                <Controller
                  name="currentPassword"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <OutlinedInput
                      size="small"
                      value={value}
                      label="Current Password"
                      onChange={onChange}
                      id="input-current-password"
                      error={Boolean(errors.currentPassword)}
                      type={values.showCurrentPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowCurrentPassword}
                          >
                            <Icon
                              icon={
                                values.showCurrentPassword
                                  ? 'bx:show'
                                  : 'bx:hide'
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.currentPassword && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.currentPassword.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={5} sx={{ mt: 0 }}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="input-new-password"
                  error={Boolean(errors.newPassword)}
                  style={{ top: '-6px' }}
                >
                  새로운 비밀번호
                </InputLabel>
                <Controller
                  name="newPassword"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <OutlinedInput
                      size="small"
                      value={value}
                      label="New Password"
                      onChange={onChange}
                      id="input-new-password"
                      error={Boolean(errors.newPassword)}
                      type={values.showNewPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowNewPassword}
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
                  )}
                />
                {errors.newPassword && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.newPassword.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="input-confirm-new-password"
                  error={Boolean(errors.confirmNewPassword)}
                  style={{ top: '-6px' }}
                >
                  새로운 비밀번호 확인
                </InputLabel>
                <Controller
                  name="confirmNewPassword"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <OutlinedInput
                      size="small"
                      value={value}
                      label="Confirm New Password"
                      onChange={onChange}
                      id="input-confirm-new-password"
                      error={Boolean(errors.confirmNewPassword)}
                      type={values.showConfirmNewPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowConfirmNewPassword}
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
                  )}
                />
                {errors.confirmNewPassword && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.confirmNewPassword.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
                비밀번호 조건
              </Typography>
              <Box
                component="ul"
                sx={{
                  pl: 4,
                  mb: 0,
                  '& li': { mb: 1, color: 'text.secondary' }
                }}
              >
                <Typography variant="body2">최소 8자리 이상의 숫자</Typography>
                <Typography variant="body2">
                  보안을 위해 대문자, 소문자, 특수문자, 숫자를 조합해주십시오
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" sx={{ mr: 3 }}>
                비밀번호 변경
              </Button>
              <Button
                type="reset"
                variant="outlined"
                color="secondary"
                onClick={() => reset()}
              >
                입력 초기화
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ChangePasswordCard
