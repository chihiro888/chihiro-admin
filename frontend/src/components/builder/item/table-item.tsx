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
import {
  hOpenTableChipPart,
  hOpenTableDefaultPart,
  hOpenTableImagePart,
  hOpenTableModalPart,
  hOpenTableSnackbarPart,
  setClearInput,
  updateState
} from 'src/store/apps/page'
import { deletePart } from 'src/utils/page'

const TableItem = ({ order, part }) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { editMode, deleteMode } = page

  // 파츠 수정
  const handleUpdatePart = () => {
    dispatch(setClearInput())
    dispatch(
      updateState({ key: 'partSubType', value: part.type ? part.type : '' })
    )

    // 파츠 모드 수정
    dispatch(
      updateState({
        key: 'partMode',
        value: 'edit'
      })
    )

    // 수정 대상 데이터 로드
    dispatch(
      updateState({ key: 'inputOrder', value: part.order ? part.order : 0 })
    )
    dispatch(
      updateState({ key: 'inputLabel', value: part.label ? part.label : '' })
    )
    dispatch(updateState({ key: 'inputKey', value: part.key ? part.key : '' }))
    dispatch(
      updateState({ key: 'inputHeader', value: part.header ? part.header : '' })
    )
    dispatch(
      updateState({ key: 'inputWidth', value: part.width ? part.width : 30 })
    )
    dispatch(
      updateState({ key: 'inputHeight', value: part.height ? part.height : 30 })
    )
    dispatch(
      updateState({
        key: 'inputChipList',
        value: part.condition ? part.condition : []
      })
    )

    const defaultCondition = part.type === 'text' || part.type === 'date'
    const imageCondition = part.type === 'image'
    const chipCondition = part.type === 'chip'
    const modalCondition = part.type === 'modal'
    const snackbarCondition = part.type === 'snackbar'

    if (defaultCondition) {
      dispatch(hOpenTableDefaultPart())
    } else if (imageCondition) {
      dispatch(hOpenTableImagePart())
    } else if (chipCondition) {
      dispatch(hOpenTableChipPart())
    } else if (modalCondition) {
      dispatch(hOpenTableModalPart())
    } else if (snackbarCondition) {
      dispatch(hOpenTableSnackbarPart())
    }
  }

  // 파츠 삭제
  const handleDeletePart = () => {
    deletePart(dispatch, page, order)
  }

  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={1}>
            {part.type && (
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
                    <Typography>{part.type}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {part.header && (
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Chip
                      label="header"
                      color="primary"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{part.header}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {part.key && (
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
                    <Typography>{part.key}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {part.label && (
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
                    <Typography>{part.label}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {part.width && (
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Chip
                      label="width"
                      color="primary"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{part.width}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
            {part.height && (
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Chip
                      label="height"
                      color="primary"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{part.height}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid container sx={{ mt: 3 }} spacing={2}>
            {editMode && (
              <Grid item xs={12}>
                <Button variant="outlined" fullWidth onClick={handleUpdatePart}>
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

export default TableItem
