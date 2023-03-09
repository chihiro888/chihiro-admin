import { Card, CardContent, Chip, Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'

const ActionItem = ({ id, order, icon, label, loadAPI, updateAPI }) => {
  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item>
                  <Icon icon={icon} />
                </Grid>
                <Grid item>
                  <Typography>{label}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Chip label="loadAPI" color="primary" variant="outlined" />
                </Grid>
                <Grid item xs={9}>
                  {loadAPI}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Chip label="updateAPI" color="primary" variant="outlined" />
                </Grid>
                <Grid item xs={9}>
                  {updateAPI}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default ActionItem
