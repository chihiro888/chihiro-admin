// ** Module Imports
import CountUp from 'react-countup'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const CardStatsVertical = (props: any) => {
  // ** Props
  const {
    topTitle,
    title,
    stats,
    avatarSrc,
    avatarIcon,
    avatarColor = 'primary'
  } = props

  return (
    <Card>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(5, 5, 4)} !important` }}
      >
        <Box
          sx={{
            display: 'flex',
            mb: 4,
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          <CustomAvatar
            skin="light"
            variant="rounded"
            color={avatarColor}
            src={avatarSrc ?? ''}
            sx={{ width: 42, height: 42 }}
          >
            {avatarIcon && !avatarSrc ? avatarIcon : null}
          </CustomAvatar>
        </Box>
        <Typography variant="body2">{topTitle}</Typography>
        <Typography variant="body1" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          <CountUp end={stats} />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical
