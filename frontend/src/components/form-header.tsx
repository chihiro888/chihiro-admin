// ** MUI Components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAppInfo } from 'src/apis/global'

// ** Configs
import themeConfig from 'src/configs/themeConfig'
import { AppDispatch, RootState } from 'src/store'
import { setAppInfo } from 'src/store/apps/app'

// ** Custom
import Logo from './logo'

const FormHeader = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const app = useSelector((state: RootState) => state.app)

  const initData = async () => {
    try {
      const { data: res } = await getAppInfo()
      if (res.statusCode === 200) {
        dispatch(setAppInfo(res.data))
      }
    } catch (err) {
      //
    }
  }

  return (
    <>
      <Box display="flex" justifyContent={'center'} sx={{ mb: 5 }}>
        <Logo width={50} height={50} path={app.appLogo} />
      </Box>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="h5"
          sx={{
            ml: 2,
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: '-0.45px',
            textTransform: 'lowercase',
            fontSize: '1.75rem !important'
          }}
        >
          {app.appName}
        </Typography>
      </Box>
      <Typography sx={{ mb: 6, color: 'text.secondary' }} textAlign="center">
        {app.appDesc}
      </Typography>
    </>
  )
}

export default FormHeader
