// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Types Imports
import { CardStatsHorizontalProps } from 'src/@core/components/card-statistics/types'

// ** Custom Components Imports
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

interface Props {
  data: CardStatsHorizontalProps[]
}

const CardStatsHorizontal = ({ data }: Props) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item: CardStatsHorizontalProps, index: number) => {
          return (
            <Grid item xs={12} md={3} sm={6} key={index}>
              <CardStatisticsHorizontal {...item} />
            </Grid>
          )
        })}
      </Grid>
    )
  } else {
    return null
  }
}

export default CardStatsHorizontal
