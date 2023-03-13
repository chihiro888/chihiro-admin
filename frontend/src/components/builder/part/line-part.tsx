import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseLinePart, updateState } from 'src/store/apps/page'
import { addPart } from 'src/utils/page'

const LinePart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openLinePart, partSubType } = page
  const { inputLabel, inputUseChip, inputSx } = page

  // ** Handler
  // 파츠 추가
  const handleAddPart = () => {
    addPart(dispatch, page)
  }

  return (
    <>
      <Dialog open={openLinePart}>
        <CustomDialogTitle
          title="라인 파츠"
          onClose={() => {
            dispatch(hCloseLinePart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <Box sx={{ mb: 3 }}>
            <TextField label="타입" fullWidth value={partSubType} disabled />
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
            <RadioGroup
              row
              value={inputUseChip}
              name="simple-radio"
              onChange={(e) => {
                dispatch(
                  updateState({ key: 'inputUseChip', value: e.target.value })
                )
              }}
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="칩 디자인 적용"
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="칩 디자인 적용 안함"
              />
            </RadioGroup>
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="추가디자인 (sx)"
              fullWidth
              value={inputSx}
              onChange={(e) => {
                dispatch(updateState({ key: 'inputSx', value: e.target.value }))
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

export default LinePart
