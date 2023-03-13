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

const ActionController = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openActionController } = page
  const {
    inputActionIcon,
    inputActionLabel,
    inputActionLoadApi,
    inputActionUpdateApi,
    actionForm,
    actionList
  } = page

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
              value={inputActionIcon}
              onChange={(e) => {
                dispatch(
                  updateState({ key: 'inputActionIcon', value: e.target.value })
                )
              }}
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
              컨텐츠 편집기
            </Button>
          </Box>
          <Box sx={{ mt: 10 }}>
            <Button variant="contained" fullWidth onClick={handleAddAction}>
              추가
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ActionController
