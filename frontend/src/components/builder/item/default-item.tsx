import {
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography
} from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

const DefaultItem = ({ id, order, type, _key, label }) => {
  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { editMode, deleteMode } = page

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
          <Grid container sx={{ mt: 3 }} spacing={2}>
            {editMode && (
              <Grid item xs={12}>
                <Button variant="outlined" fullWidth>
                  수정
                </Button>
              </Grid>
            )}
            {deleteMode && (
              <Grid item xs={12}>
                <Button variant="outlined" fullWidth color="error">
                  삭제
                </Button>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default DefaultItem
