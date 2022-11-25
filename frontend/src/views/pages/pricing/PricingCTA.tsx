// ** MUI Imports
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import Grid, { GridProps } from '@mui/material/Grid'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(11.25, 36),
  backgroundColor: hexToRGBA(theme.palette.primary.main, 0.04),
  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(11.25, 20)
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(10, 5)
  }
}))

const GridStyled = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    order: -1
  }
}))

const Img = styled('img')(({ theme }) => ({
  bottom: 0,
  right: 144,
  height: 275,
  position: 'absolute',
  [theme.breakpoints.down('md')]: {
    height: 220,
    position: 'static'
  },
  [theme.breakpoints.down('sm')]: {
    height: 180
  }
}))

const PricingCTA = () => {
  return (
    <BoxWrapper>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Typography variant='h5' sx={{ mb: 2.5, color: 'primary.main' }}>
            Still not convinced? Start with a 14-day FREE trial!
          </Typography>
          <Typography sx={{ mb: 10, color: 'text.secondary' }}>
            You will get full access to with all the features for 14 days.
          </Typography>
          <Button variant='contained'>Start 14-day FREE trial</Button>
        </Grid>
        <GridStyled item xs={12} md={4}>
          <Img alt='pricing-cta-avatar' src='/images/pages/pricing-pose.png' />
        </GridStyled>
      </Grid>
    </BoxWrapper>
  )
}

export default PricingCTA
