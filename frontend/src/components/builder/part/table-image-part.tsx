import { Box, Button, Dialog, DialogContent, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hCloseTableImagePart,
  hClosePartSelector,
  updateState
} from 'src/store/apps/page'
import { addPart, updatePart } from 'src/utils/page'

const TableImagePart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openTableImagePart, partSubType, partMode } = page
  const { inputKey, inputHeader, inputWidth, inputHeight } = page

  // ** Handler
  // 파츠 추가
  const handleAddPart = () => {
    addPart(dispatch, page)
    dispatch(hCloseTableImagePart())
    dispatch(hClosePartSelector())
  }

  // 파츠 수정
  const handleUpdatePart = () => {
    updatePart(dispatch, page)
    dispatch(hCloseTableImagePart())
    dispatch(hClosePartSelector())
  }

  return (
    <>
      <Dialog open={openTableImagePart}>
        <CustomDialogTitle
          title="테이블 이미지 파츠"
          onClose={() => {
            dispatch(hCloseTableImagePart())
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
              label="헤더"
              fullWidth
              value={inputHeader}
              onChange={(e) => {
                dispatch(
                  updateState({ key: 'inputHeader', value: e.target.value })
                )
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="가로 길이"
              fullWidth
              value={inputWidth}
              onChange={(e) => {
                dispatch(
                  updateState({ key: 'inputWidth', value: e.target.value })
                )
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="세로 길이"
              fullWidth
              value={inputHeight}
              onChange={(e) => {
                dispatch(
                  updateState({ key: 'inputHeight', value: e.target.value })
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

export default TableImagePart
