import produce from 'immer'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hCloseActionController,
  hOpenActionForm,
  updateState
} from 'src/store/apps/page'
import { hOpenIconSelector } from 'src/store/apps/icon'

const ActionController = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openActionController, partModeAction } = page
  const {
    inputActionOrder,
    inputActionIcon,
    inputActionLabel,
    inputActionLoadApi,
    inputActionUpdateApi,
    actionForm,
    actionList
  } = page
  const icon = useSelector((state: RootState) => state.icon)
  const { selectedIcon } = icon

  // 액션 추가
  const handleAddAction = () => {
    dispatch(
      updateState({
        key: 'actionList',
        value: [
          ...actionList,
          {
            icon: inputActionIcon,
            label: inputActionLabel,
            content: actionForm,
            loadAPI: inputActionLoadApi,
            updateAPI: inputActionUpdateApi
          }
        ]
      })
    )
    dispatch(hCloseActionController())
  }

  // 액션 수정
  const handleUpdateAction = () => {
    const nextState = produce(actionList, (draftState) => {
      draftState.map((action) => {
        if (action.order === inputActionOrder) {
          action.icon = inputActionIcon
          action.label = inputActionLabel
          action.content = actionForm
          action.loadAPI = inputActionLoadApi
          action.updateAPI = inputActionUpdateApi
        }
      })
    })
    dispatch(updateState({ key: 'actionList', value: nextState }))
    dispatch(hCloseActionController())
  }

  return (
    <>
      <Dialog open={openActionController}>
        <CustomDialogTitle
          title="액션 편집"
          onClose={() => {
            dispatch(hCloseActionController())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="아이콘"
              fullWidth
              onClick={() => {
                dispatch(hOpenIconSelector())
              }}
              value={selectedIcon}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="라벨"
              fullWidth
              value={inputActionLabel}
              onChange={(e) => {
                dispatch(
                  updateState({
                    key: 'inputActionLabel',
                    value: e.target.value
                  })
                )
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="loadAPI"
              fullWidth
              value={inputActionLoadApi}
              onChange={(e) => {
                dispatch(
                  updateState({
                    key: 'inputActionLoadApi',
                    value: e.target.value
                  })
                )
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="updateAPI"
              fullWidth
              value={inputActionUpdateApi}
              onChange={(e) => {
                dispatch(
                  updateState({
                    key: 'inputActionUpdateApi',
                    value: e.target.value
                  })
                )
              }}
            />
          </Box>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            컨텐츠 관리
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                dispatch(hOpenActionForm())
              }}
            >
              액션 폼 편집
            </Button>
          </Box>
          <Box sx={{ mt: 10 }}>
            {partModeAction === 'add' && (
              <Box sx={{ mb: 3 }}>
                <Button variant="contained" fullWidth onClick={handleAddAction}>
                  추가
                </Button>
              </Box>
            )}
            {partModeAction === 'edit' && (
              <Box sx={{ mb: 3 }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleUpdateAction}
                >
                  수정
                </Button>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ActionController
