// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

const CardFinanceSummary = () => {
  return (
    <Card>
      <CardHeader
        title='Finance Summary'
        subheader='Check out each Column for more details'
        action={
          <CustomAvatar skin='light' sx={{ width: 45, height: 45, color: 'primary.main' }}>
            <Icon icon='bx:dollar' />
          </CustomAvatar>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} sx={{ mb: [0, 5] }}>
            <Typography variant='body2' sx={{ mb: 2 }}>
              Annual Companies Taxes
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>$50,000</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: [0, 5] }}>
            <Typography variant='body2' sx={{ mb: 2 }}>
              Next Tax Review Date
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>{`July 24, ${new Date().getFullYear()}`}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: [0, 5] }}>
            <Typography variant='body2' sx={{ mb: 2 }}>
              Average Product Price
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>$89.90</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: [0, 5] }}>
            <Typography variant='body2' sx={{ mb: 1.5 }}>
              Satisfaction Rate
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 5, width: '100%' }}>
                <LinearProgress value={75} sx={{ height: 7 }} variant='determinate' />
              </Box>
              <Typography variant='body2' sx={{ fontWeight: 500 }}>
                75%
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <AvatarGroup className='pull-up'>
              <Tooltip title='Howard Lloyd'>
                <Avatar alt='Howard Lloyd' src='/images/avatars/5.png' sx={{ width: 34, height: 34 }} />
              </Tooltip>
              <Tooltip title='Katie Lane'>
                <Avatar alt='Katie Lane' src='/images/avatars/12.png' sx={{ width: 34, height: 34 }} />
              </Tooltip>
              <Tooltip title='Alice Cobb'>
                <Avatar alt='Alice Cobb' src='/images/avatars/6.png' sx={{ width: 34, height: 34 }} />
              </Tooltip>
              <Tooltip title='Sara Stone'>
                <Avatar alt='Sara Stone' src='/images/avatars/10.png' sx={{ width: 34, height: 34 }} />
              </Tooltip>
            </AvatarGroup>
          </Grid>

          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: ['flex-end', 'flex-start'] }}>
            <CustomChip
              rounded
              size='small'
              skin='light'
              color='primary'
              label='5 Days Ago'
              sx={{ fontSize: '0.875rem', fontWeight: 500 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardFinanceSummary
