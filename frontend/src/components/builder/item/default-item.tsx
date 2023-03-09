import { Card, CardContent, Chip, Grid, Typography } from '@mui/material'

const DefaultItem = ({ id, order, type, _key, label }) => {
  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={1}>
            {type && (
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Chip
                      label="type"
                      color="primary"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{type}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {_key && (
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Chip
                      label="key"
                      color="primary"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{_key}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Chip
                    label="label"
                    color="primary"
                    variant="outlined"
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Typography>{label}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default DefaultItem
