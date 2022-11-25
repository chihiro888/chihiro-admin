// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

// Styled component for the avatar image
const AvatarImg = styled('img')({
  left: 23,
  bottom: 0,
  height: 186,
  position: 'absolute'
})

const CardUpgradeAccount = () => {
  // ** Hook
  const theme = useTheme()

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Grid container>
          <Grid item xs={5}>
            <AvatarImg alt='Upgrade Account' src={`/images/cards/upgrade-account-launch-${theme.palette.mode}.png`} />
          </Grid>
          <Grid item xs={7} sx={{ textAlign: 'center' }}>
            <Typography variant='h6' sx={{ mb: 1 }}>
              Upgrade Account
            </Typography>
            <Typography variant='body2' sx={{ mb: 4.25 }}>
              Add 15 team members
            </Typography>
            <Typography variant='h5' sx={{ color: 'info.main', fontSize: '1.625rem !important' }}>
              $129
            </Typography>
            <Typography variant='body2' sx={{ mb: 3.75, color: 'text.disabled' }}>
              20% OFF
            </Typography>
            <Button size='small' color='info' variant='contained'>
              Upgrade
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardUpgradeAccount
