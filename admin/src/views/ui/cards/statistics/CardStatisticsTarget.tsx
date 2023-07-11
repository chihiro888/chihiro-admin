// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Type Import
import { CardStatsTargetProps } from 'src/@core/components/card-statistics/types'

// ** Custom Components Imports
import CardStatisticsTarget from 'src/@core/components/card-statistics/card-stats-target'

interface Props {
  data: CardStatsTargetProps[]
}

const CardStatsTarget = ({ data }: Props) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        {data.map((item: CardStatsTargetProps, index: number) => (
          <Grid item xs={12} md={3} sm={6} key={index}>
            <CardStatisticsTarget {...item} />
          </Grid>
        ))}
      </Grid>
    )
  } else {
    return null
  }
}

export default CardStatsTarget
