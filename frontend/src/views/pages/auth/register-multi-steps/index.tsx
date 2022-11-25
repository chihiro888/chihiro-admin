// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import MuiStep, { StepProps } from '@mui/material/Step'

// ** Step Components
import StepPersonalInfo from 'src/views/pages/auth/register-multi-steps/StepPersonalInfo'
import StepAccountDetails from 'src/views/pages/auth/register-multi-steps/StepAccountDetails'
import StepBillingDetails from 'src/views/pages/auth/register-multi-steps/StepBillingDetails'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

const steps = [
  {
    title: 'Account',
    icon: 'bx:home',
    subtitle: 'Account Details'
  },
  {
    title: 'Personal',
    icon: 'bx:user',
    subtitle: 'Enter Information'
  },
  {
    title: 'Billing',
    subtitle: 'Payment Details',
    icon: 'bx:detail'
  }
]

const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  '&:first-of-type': {
    paddingLeft: 0
  },
  '&:last-of-type': {
    paddingRight: 0
  },
  '& .MuiStepLabel-iconContainer': {
    display: 'none'
  },
  '& .step-subtitle': {
    color: `${theme.palette.text.disabled} !important`
  },
  '&:not(.Mui-completed)': {
    '& .step-title': {
      color: theme.palette.text.secondary
    },
    '& + svg': {
      color: theme.palette.text.disabled
    }
  },
  '&.Mui-completed': {
    '& .step-title': {
      color: theme.palette.text.disabled
    },
    '& + svg': {
      color: theme.palette.primary.main
    }
  },
  '& .MuiStepLabel-label.Mui-active .step-title': {
    color: theme.palette.primary.main
  },
  [theme.breakpoints.down('md')]: {
    padding: 0,
    '& + svg': { display: 'none' },
    '&:not(:last-of-type)': {
      marginBottom: theme.spacing(5)
    }
  }
}))

const RegisterMultiSteps = () => {
  // ** States
  const [activeStep, setActiveStep] = useState<number>(0)

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }
  const handlePrev = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepAccountDetails handleNext={handleNext} />
      case 1:
        return <StepPersonalInfo handleNext={handleNext} handlePrev={handlePrev} />
      case 2:
        return <StepBillingDetails handlePrev={handlePrev} />

      default:
        return null
    }
  }

  const renderContent = () => {
    return getStepContent(activeStep)
  }

  return (
    <>
      <StepperWrapper sx={{ mb: 10 }}>
        <Stepper activeStep={activeStep} connector={<Icon icon='bx:chevron-right' />}>
          {steps.map((step, index) => {
            return (
              <Step key={index}>
                <StepLabel>
                  <div className='step-label'>
                    <CustomAvatar
                      variant='rounded'
                      skin={activeStep === index ? 'filled' : 'light'}
                      color={activeStep >= index ? 'primary' : 'secondary'}
                      sx={{
                        mr: 2.5,
                        borderRadius: 1,
                        ...(activeStep === index && {
                          boxShadow: theme => `0 0.1875rem 0.375rem 0 ${hexToRGBA(theme.palette.primary.main, 0.4)}`
                        })
                      }}
                    >
                      <Icon icon={step.icon} />
                    </CustomAvatar>
                    <div>
                      <Typography className='step-title'>{step.title}</Typography>
                      <Typography className='step-subtitle'>{step.subtitle}</Typography>
                    </div>
                  </div>
                </StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </StepperWrapper>
      {renderContent()}
    </>
  )
}

export default RegisterMultiSteps
