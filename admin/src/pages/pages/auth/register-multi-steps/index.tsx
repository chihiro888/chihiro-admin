// ** React Imports
import { ReactNode } from 'react'

// ** MUI Components
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Components Imports
import RegisterMultiStepsWizard from 'src/views/pages/auth/register-multi-steps'

// ** Styled Components
const LoginIllustration = styled('img')({
  height: 'auto',
  maxWidth: '100%'
})

const LeftWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(12, 0, 12, 12),
  [theme.breakpoints.up('lg')]: {
    maxWidth: 480
  },
  [theme.breakpoints.down(1285)]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 635
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(12)
  }
}))

const WizardWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: 700,
  margin: theme.spacing(0, 'auto'),
  [theme.breakpoints.up('md')]: {
    width: 700
  }
}))

const RegisterMultiSteps = () => {
  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))

  // ** Var
  const { skin } = settings

  return (
    <Box className='content-right'>
      {!hidden ? (
        <LeftWrapper>
          <LoginIllustration
            alt='register-illustration'
            src={`/images/pages/create-account-${theme.palette.mode}.png`}
          />
        </LeftWrapper>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <WizardWrapper>
          <RegisterMultiStepsWizard />
        </WizardWrapper>
      </RightWrapper>
    </Box>
  )
}

RegisterMultiSteps.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterMultiSteps
