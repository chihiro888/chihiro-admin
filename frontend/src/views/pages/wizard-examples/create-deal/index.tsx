// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import MuiStep, { StepProps } from '@mui/material/Step'
import MuiStepper, { StepperProps } from '@mui/material/Stepper'
import MuiStepLabel, { StepLabelProps } from '@mui/material/StepLabel'
import CardContent, { CardContentProps } from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Step Components
import StepDealType from 'src/views/pages/wizard-examples/create-deal/StepDealType'
import StepReview from 'src/views/pages/wizard-examples/create-deal/StepReview'
import StepDealUsage from 'src/views/pages/wizard-examples/create-deal/StepDealUsage'
import StepDealDetails from 'src/views/pages/wizard-examples/create-deal/StepDealDetails'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'

const steps = [
  {
    title: 'Deal Type',
    icon: 'bx:purchase-tag',
    subtitle: 'Choose type of deal'
  },
  {
    title: 'Deal Details',
    subtitle: 'Provide deal details',
    icon: 'bx:detail'
  },
  {
    title: 'Deal Usage',
    icon: 'bx:credit-card',
    subtitle: 'Limitations & Offers'
  },
  {
    subtitle: 'Launch a deal',
    title: 'Review & Complete',
    icon: 'bx:rocket'
  }
]

const Stepper = styled(MuiStepper)<StepperProps>(({ theme }) => ({
  height: '100%',
  minWidth: '15rem',
  '& .MuiStep-root:not(:last-of-type) .MuiStepLabel-root': {
    paddingBottom: theme.spacing(5)
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 0
  }
}))

const StepLabel = styled(MuiStepLabel)<StepLabelProps>(({ theme }) => ({
  '& .MuiStepLabel-label': {
    display: 'flex',
    cursor: 'pointer',
    '& .step-title, & .step-subtitle, & .MuiAvatar-root svg': {
      color: theme.palette.text.secondary
    },
    '&.Mui-active': {
      '& .step-title': {
        color: theme.palette.primary.main
      },
      '& .MuiAvatar-root svg': {
        color: theme.palette.common.white
      }
    },
    '&.Mui-completed': {
      opacity: 0.65,
      '& .MuiAvatar-root svg': {
        color: theme.palette.primary.main
      }
    }
  }
}))

const StepperHeaderContainer = styled(CardContent)<CardContentProps>(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 0,
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const Step = styled(MuiStep)<StepProps>(({ theme }) => ({
  '& .MuiStepLabel-root': {
    paddingTop: 0
  },
  '&:not(:last-of-type) .MuiStepLabel-root': {
    paddingBottom: theme.spacing(6)
  },
  '&:last-of-type .MuiStepLabel-root': {
    paddingBottom: 0
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
  '& .MuiStepLabel-label': {
    cursor: 'pointer',
    '&.Mui-active .step-title': {
      color: theme.palette.primary.main
    }
  }
}))

const CreateDealWizard = () => {
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
        return <StepDealType />
      case 1:
        return <StepDealDetails />
      case 2:
        return <StepDealUsage />
      case 3:
        return <StepReview />
      default:
        return null
    }
  }

  const renderContent = () => {
    return getStepContent(activeStep)
  }

  const renderFooter = () => {
    const stepCondition = activeStep === steps.length - 1

    return (
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
        <Button
          color='secondary'
          variant='outlined'
          onClick={handlePrev}
          disabled={activeStep === 0}
          startIcon={<Icon icon='bx:chevron-left' />}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color={stepCondition ? 'success' : 'primary'}
          {...(!stepCondition ? { endIcon: <Icon icon='bx:chevron-right' /> } : {})}
          onClick={() => (stepCondition ? alert('Submitted..!!') : handleNext())}
        >
          {stepCondition ? 'Submit' : 'Next'}
        </Button>
      </Box>
    )
  }

  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <StepperHeaderContainer>
        <StepperWrapper sx={{ height: '100%' }}>
          <Stepper
            connector={<></>}
            orientation='vertical'
            activeStep={activeStep}
            sx={{ height: '100%', minWidth: '15rem' }}
          >
            {steps.map((step, index) => {
              return (
                <Step
                  key={index}
                  onClick={() => setActiveStep(index)}
                  sx={{ '&.Mui-completed + svg': { color: 'primary.main' } }}
                >
                  <StepLabel>
                    <div className='step-label'>
                      <CustomAvatar
                        variant='rounded'
                        skin={activeStep === index ? 'filled' : 'light'}
                        color={activeStep >= index ? 'primary' : 'secondary'}
                        sx={{
                          mr: 2.5,
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
      </StepperHeaderContainer>
      <CardContent sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
        {renderContent()}
        {renderFooter()}
      </CardContent>
    </Card>
  )
}

export default CreateDealWizard
