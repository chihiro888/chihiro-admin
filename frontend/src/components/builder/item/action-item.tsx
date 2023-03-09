import { Card, CardContent, Chip, Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { useDrag, useDrop } from 'react-dnd'
import { useRef } from 'react'

const ActionItem = ({ id, icon, label, loadAPI, updateAPI }) => {
  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography>
            {'id => '} {id}
          </Typography>

          <Grid container spacing={3}>
            <Grid item>
              <Icon icon={icon} />
            </Grid>
            <Grid item>
              <Typography>{label}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={5}>
              <Chip label="loadAPI" color="primary" variant="outlined" />
            </Grid>
            <Grid item xs={7}>
              {loadAPI}
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={5}>
              <Chip label="updateAPI" color="primary" variant="outlined" />
            </Grid>
            <Grid item xs={7}>
              {updateAPI}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default ActionItem
