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
  hOpenDefaultPart,
  hOpenLinePart,
  hOpenSelectPart,
  hOpenTextareaPart,
  hOpenUploadPart,
  setClearInput,
  updateState
} from 'src/store/apps/page'
import { deletePart } from 'src/utils/page'

const DefaultItem = ({ order, part }) => {
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

    // 수정 대상 데이터 로드
    dispatch(
      updateState({ key: 'inputLabel', value: part.label ? part.label : '' })
    )
    dispatch(updateState({ key: 'inputKey', value: part.key ? part.key : '' }))
    dispatch(
      updateState({ key: 'inputUseChip', value: part.chip ? part.chip : false })
    )
    dispatch(updateState({ key: 'inputSx', value: part.sx ? part.sx : '{}' }))
    dispatch(
      updateState({ key: 'inputRows', value: part.rows ? part.rows : 1 })
    )
    dispatch(
      updateState({
        key: 'inputAllowFileExt',
        value: part.allowFileExt
          ? part.allowFileExt
          : ['png', 'jpg', 'jpeg', 'gif']
      })
    )
    dispatch(
      updateState({
        key: 'inputMaxFileCount',
        value: part.maxFileCount ? part.maxFileCount : 1
      })
    )
    dispatch(
      updateState({
        key: 'inputMaxFileSizeBytes',
        value: part.maxFileSizeBytes ? part.maxFileSizeBytes : 1024 * 1024 * 10
      })
    )
    dispatch(
      updateState({ key: 'inputSelectList', value: part.list ? part.list : [] })
    )

    const defaultCondition =
      part.type === 'text' ||
      part.type === 'number' ||
      part.type === 'password' ||
      part.type === 'editor' ||
      part.type === 'text' ||
      part.type === 'date'
    const lineCondition = part.type === 'line'
    const selectCondition = part.type === 'select'
    const uploadCondition = part.type === 'upload'
    const textareaCondition = part.type === 'textarea'

    if (defaultCondition) {
      dispatch(hOpenDefaultPart())
    } else if (lineCondition) {
      dispatch(hOpenLinePart())
    } else if (selectCondition) {
      dispatch(hOpenSelectPart())
    } else if (uploadCondition) {
      dispatch(hOpenUploadPart())
    } else if (textareaCondition) {
      dispatch(hOpenTextareaPart())
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

export default DefaultItem
