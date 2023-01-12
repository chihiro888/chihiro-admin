// ** Module Imports
import CountUp from 'react-countup'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import CustomChip from 'src/@core/components/mui/chip'
import Grid from '@mui/material/Grid'

const CardStatsVertical = (props: any) => {
  // ** Props
  const { image, title, total, today, diff } = props

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
            color="primary"
            src={image ?? ''}
            sx={{ width: 42, height: 42 }}
          >
            {image ? image : null}
          </CustomAvatar>
        </Box>
        <Typography variant="body2">{title}</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item>
            <CustomChip
              rounded
              label="전체"
              skin="light"
              color="primary"
              size="small"
            />
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <CountUp end={total} />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <CustomChip
              rounded
              label="오늘"
              skin="light"
              color="info"
              size="small"
            />
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <CountUp end={today} />
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <CustomChip
              rounded
              label="증감"
              skin="light"
              color="success"
              size="small"
            />
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <CountUp end={diff} />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical
