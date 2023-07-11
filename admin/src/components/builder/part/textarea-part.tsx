import { Box, Button, Dialog, DialogContent, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hCloseDefaultPart,
  hClosePartSelector,
  hCloseTextareaPart,
  updateState
} from 'src/store/apps/page'
import { addPart, updatePart } from 'src/utils/page'

const TextareaPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openTextareaPart, partSubType, partMode } = page
  const { inputKey, inputLabel, inputRows } = page

  // ** Handler
  // 파츠 추가
  const handleAddPart = () => {
    addPart(dispatch, page)
    dispatch(hCloseTextareaPart())
    dispatch(hClosePartSelector())
  }

  // 파츠 수정
  const handleUpdatePart = () => {
    updatePart(dispatch, page)
    dispatch(hCloseTextareaPart())
    dispatch(hClosePartSelector())
  }

  return (
    <>
      <Dialog open={openTextareaPart}>
        <CustomDialogTitle
          title="텍스트에리어 파츠"
          onClose={() => {
            dispatch(hCloseTextareaPart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <Box sx={{ mb: 3 }}>
            <TextField label="타입" fullWidth value={partSubType} disabled />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="키"
              fullWidth
              value={inputKey}
              onChange={(e) => {
                dispatch(
                  updateState({ key: 'inputKey', value: e.target.value })
                )
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="라벨"
              fullWidth
              value={inputLabel}
              onChange={(e) => {
                dispatch(
                  updateState({ key: 'inputLabel', value: e.target.value })
                )
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              type="number"
              label="행 수"
              fullWidth
              value={inputRows}
              onChange={(e) => {
                dispatch(
                  updateState({ key: 'inputRows', value: e.target.value })
                )
              }}
            />
          </Box>
          {partMode === 'add' && (
            <Box sx={{ mb: 3 }}>
              <Button variant="contained" fullWidth onClick={handleAddPart}>
                추가
              </Button>
            </Box>
          )}
          {partMode === 'edit' && (
            <Box sx={{ mb: 3 }}>
              <Button variant="contained" fullWidth onClick={handleUpdatePart}>
                수정
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TextareaPart
