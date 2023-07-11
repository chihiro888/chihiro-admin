import {
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Icon from 'src/@core/components/icon'
import { AppDispatch, RootState } from 'src/store'
import {
  hOpenActionController,
  setClearActionInput,
  updateState
} from 'src/store/apps/page'

const ActionItem = ({ order, action }) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { editModeAction, deleteModeAction, actionList } = page

  // 액션 수정
  const handleUpdateAction = () => {
    // 입력 데이터 초기화
    dispatch(setClearActionInput())

    // 파츠 모드 수정
    dispatch(
      updateState({
        key: 'partModeAction',
        value: 'edit'
      })
    )

    // 수정 데이터 설정
    dispatch(updateState({ key: 'inputActionOrder', value: action.order }))
    dispatch(updateState({ key: 'inputActionIcon', value: action.icon }))
    dispatch(updateState({ key: 'inputActionLabel', value: action.label }))
    dispatch(updateState({ key: 'inputActionLoadApi', value: action.loadAPI }))
    dispatch(
      updateState({ key: 'inputActionUpdateApi', value: action.updateAPI })
    )
    dispatch(updateState({ key: 'actionForm', value: action.content }))

    // 수정 모달 열기
    dispatch(hOpenActionController())
  }

  // 액션 삭제
  const handleDeleteAction = () => {
    const newState = actionList
      .filter((item) => {
        if (item.order === order) return false
        else return true
      })
      .map((item, idx) => {
        const copyItem = { ...item }
        copyItem.order = idx

        return copyItem
      })

    dispatch(updateState({ key: 'actionList', value: newState }))
  }

  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item>
                  <Icon icon={action.icon} />
                </Grid>
                <Grid item>
                  <Typography>{action.label}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Chip label="loadAPI" color="primary" variant="outlined" />
                </Grid>
                <Grid item xs={9}>
                  {action.loadAPI}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Chip label="updateAPI" color="primary" variant="outlined" />
                </Grid>
                <Grid item xs={9}>
                  {action.updateAPI}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 3 }} spacing={2}>
            {editModeAction && (
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleUpdateAction}
                >
                  수정
                </Button>
              </Grid>
            )}
            {deleteModeAction && (
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="error"
                  onClick={handleDeleteAction}
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

export default ActionItem
