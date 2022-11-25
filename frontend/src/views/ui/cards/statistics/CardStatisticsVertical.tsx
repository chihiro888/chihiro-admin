// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Types Imports
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'

// ** Demo Components Imports
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

interface Props {
  data: CardStatsVerticalProps[]
}

const CardStatsVertical = ({ data }: Props) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item: CardStatsVerticalProps, index: number) => {
          return (
            <Grid item xs={12} sm={4} lg={2} key={index}>
              <CardStatisticsVertical {...item} />
            </Grid>
          )
        })}
      </Grid>
    )
  } else {
    return null
  }
}

export default CardStatsVertical
