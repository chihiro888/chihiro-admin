// ** MUI Components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Custom
import Logo from './logo'

const FormHeader = () => {
  return (
    <>
      <Box
        sx={{
          mb: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Logo width={40} height={40} />
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
          {themeConfig.templateName}
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ mb: 1.5 }}>
        관리자 솔루션
      </Typography>
      <Typography sx={{ mb: 6, color: 'text.secondary' }}>
        전체적인 시스템을 관리하는 서비스
      </Typography>
    </>
  )
}

export default FormHeader
