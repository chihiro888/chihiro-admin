import { Box, Button, Dialog, DialogContent, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hCloseDefaultPart,
  hClosePartSelector,
  updateState
} from 'src/store/apps/page'
import { addPart } from 'src/utils/page'

const DefaultPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openDefaultPart, partSubType } = page
  const { inputKey, inputLabel } = page

  // ** Handler
  // 파츠 추가
  const handleAddPart = () => {
    addPart(dispatch, page)
    dispatch(hCloseDefaultPart())
    dispatch(hClosePartSelector())
  }

  return (
    <>
      <Dialog open={openDefaultPart}>
        <CustomDialogTitle
          title="기본 파츠"
          onClose={() => {
            dispatch(hCloseDefaultPart())
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
            <Button variant="contained" fullWidth onClick={handleAddPart}>
              추가
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DefaultPart
