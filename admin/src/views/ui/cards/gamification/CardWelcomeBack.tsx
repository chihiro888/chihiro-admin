// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'

// ** Custom Component Import
import CustomChip from 'src/@core/components/mui/chip'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    order: 1,
    display: 'flex',
    justifyContent: 'center'
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  left: 58,
  bottom: 0,
  height: 173,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    position: 'static'
  }
}))

const CardWelcomeBack = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent sx={{ pb: theme => ['0 !important', `${theme.spacing(6)} !important`] }}>
        <Grid container spacing={6}>
          <StyledGrid item xs={12} sm={6}>
            <Img alt='Welcome back John' src={`/images/cards/welcome-back-anna-${theme.palette.mode}.png`} />
          </StyledGrid>
          <Grid item xs={12} sm={6} sx={{ textAlign: ['center', 'start'] }}>
            <Typography variant='h5' sx={{ mb: 4.25 }}>
              Welcome back Anna!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>You have 12 task to finish today,</Typography>
            <Typography sx={{ mb: 3.5, color: 'text.secondary' }}>Your already completed 189 task good job.</Typography>
            <CustomChip
              rounded
              size='small'
              skin='light'
              color='primary'
              label='78% of Target'
              sx={{ fontWeight: 500 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardWelcomeBack
