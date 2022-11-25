// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Box component
const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMembership = () => {
  return (
    <Card>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7}>
          <CardContent>
            <Typography variant='h6' sx={{ mb: 3.5 }}>
              Lifetime Membership
            </Typography>
            <Typography variant='body2'>
              Here, I focus on a range of items and features that we use in life without giving them a second thought
              such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not
              fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for
              picking up women or men.
            </Typography>
            <Divider
              sx={{ mt: theme => `${theme.spacing(6.5)} !important`, mb: theme => `${theme.spacing(6.75)} !important` }}
            />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={5}>
                <StyledBox>
                  <Box
                    sx={{
                      mb: 6.75,
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': { color: 'primary.main', mr: 2.75 }
                    }}
                  >
                    <Icon icon='bx:lock-open-alt' fontSize={20} />
                    <Typography variant='body2'>Full Access</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: 'primary.main', mr: 2.75 } }}>
                    <Icon icon='bx:user' fontSize={20} />
                    <Typography variant='body2'>15 Members</Typography>
                  </Box>
                </StyledBox>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box
                  sx={{ mb: 6.75, display: 'flex', alignItems: 'center', '& svg': { color: 'primary.main', mr: 2.75 } }}
                >
                  <Icon icon='bx:star' fontSize={20} />
                  <Typography variant='body2'>Access all Features</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { color: 'primary.main', mr: 2.75 } }}>
                  <Icon icon='bx:trending-up' fontSize={20} />
                  <Typography variant='body2'>Lifetime Free Update</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid
          item
          sm={5}
          xs={12}
          sx={{ pt: ['0 !important', '1.5rem !important'], pl: ['1.5rem !important', '0 !important'] }}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'action.hover',
              p: theme => `${theme.spacing(18, 5, 16)} !important`
            }}
          >
            <div>
              <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <Typography variant='h6'>$</Typography>
                <Typography variant='h6' sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3.75rem !important' }}>
                  899
                </Typography>
                <Typography variant='h6'>USD</Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 13.75, display: 'flex', flexDirection: 'column' }}>
                <span>5 Tips For Offshore</span>
                <span>Software Development</span>
              </Typography>
              <Button variant='contained'>Contact Now</Button>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMembership
