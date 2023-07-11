// ** React Imports
import { Ref, useState, forwardRef, ReactElement, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import PlanDetails from 'src/@core/components/plan-details'

// ** Types
import {
  PricingDataType,
  PricingPlanType
} from 'src/@core/components/plan-details/types'

interface Props {
  data: PricingDataType
}

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const DialogPricing = ({ data }: Props) => {
  // ** States
  const [show, setShow] = useState<boolean>(false)
  const [plan, setPlan] = useState<'monthly' | 'annually'>('monthly')

  const handleChange = (e: ChangeEvent<{ checked: boolean }>) => {
    if (e.target.checked) {
      setPlan('annually')
    } else {
      setPlan('monthly')
    }
  }

  const renderPlan = () => {
    return data?.pricingPlans.map((item: PricingPlanType) => {
      return (
        <Grid item xs={12} md={4} key={item.title.toLowerCase()}>
          <PlanDetails plan={plan} data={item} />
        </Grid>
      )
    })
  }

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
        <Icon icon="bx:bar-chart-alt-2" fontSize="2rem" />
        <Typography variant="h6" sx={{ mb: 4 }}>
          Pricing
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Elegant pricing options dialog popup example, easy to use in any page.
        </Typography>
        <Button variant="contained" onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <Dialog
        fullWidth
        open={show}
        scroll="body"
        maxWidth="lg"
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
      >
        <DialogContent
          sx={{
            px: { xs: 8, sm: 15 },
            py: { xs: 8, sm: 12.5 },
            position: 'relative'
          }}
        >
          <IconButton
            size="small"
            onClick={() => setShow(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Icon icon="bx:x" />
          </IconButton>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Subscription Plan
            </Typography>
            <Typography variant="body2">
              All plans include 40+ advanced tools and features to boost your
              product. Choose the best plan to fit your needs.
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <InputLabel
              htmlFor="modal-pricing-switch"
              sx={{
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.875rem',
                color: 'text.secondary'
              }}
            >
              Monthly
            </InputLabel>
            <Switch
              onChange={handleChange}
              id="modal-pricing-switch"
              checked={plan === 'annually'}
            />
            <InputLabel
              htmlFor="modal-pricing-switch"
              sx={{
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.875rem',
                color: 'text.secondary'
              }}
            >
              Annually
            </InputLabel>
          </Box>
          <Grid container spacing={6}>
            {renderPlan()}
          </Grid>
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ mb: 2.5 }}>
              Still Not Convinced? Start with a 14-day FREE trial!
            </Typography>
            <Button variant="contained" onClick={() => setShow(false)}>
              Start your trial
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default DialogPricing
