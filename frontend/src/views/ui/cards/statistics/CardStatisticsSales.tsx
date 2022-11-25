// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Custom Component Import
import CustomChip from 'src/@core/components/mui/chip'

const CardStatisticsSales = () => {
  return (
    <Card>
      <CardContent sx={{ p: theme => `${theme.spacing(3.5, 4.5)} !important` }}>
        <Typography sx={{ mb: 2, fontWeight: 600, color: 'text.secondary' }}>Sales</Typography>
        <Typography variant='h5' sx={{ mb: 1.5 }}>
          482k
        </Typography>
        <CustomChip rounded size='small' skin='light' color='info' label='+34%' sx={{ mb: 4, fontWeight: 500 }} />
        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
          Sales Target
        </Typography>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <LinearProgress value={78} color='info' variant='determinate' sx={{ mr: 2, height: 8, width: '100%' }} />
          <Typography variant='body2'>78%</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardStatisticsSales
