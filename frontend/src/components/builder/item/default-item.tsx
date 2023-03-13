import {
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { deletePart } from 'src/utils/page'

const DefaultItem = ({ id, order, type, _key, label }) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { editMode, deleteMode } = page

  // 파츠 삭제
  const handleDeletePart = () => {
    deletePart(dispatch, page, order)
  }

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
                <Button
                  variant="outlined"
                  fullWidth
                  color="error"
                  onClick={handleDeletePart}
                >
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
