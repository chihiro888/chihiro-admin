// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import CardAward from 'src/views/ui/cards/gamification/CardAward'
import CardWelcomeBack from 'src/views/ui/cards/gamification/CardWelcomeBack'
import CardUpgradeAccount from 'src/views/ui/cards/gamification/CardUpgradeAccount'
import CardCongratulations from 'src/views/ui/cards/gamification/CardCongratulations'

const CardGamification = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={4} sx={{ order: { xs: 2, lg: 0 } }}>
        <CardAward />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ alignSelf: 'flex-end' }}>
        <CardCongratulations />
      </Grid>
      <Grid item xs={12} lg={8} sx={{ alignSelf: 'flex-end', order: { xs: 3, lg: 0 } }}>
        <CardWelcomeBack />
      </Grid>
      <Grid item xs={12} md={6} lg={4} sx={{ order: { xs: 2, lg: 0 } }}>
        <CardUpgradeAccount />
      </Grid>
    </Grid>
  )
}

export default CardGamification
