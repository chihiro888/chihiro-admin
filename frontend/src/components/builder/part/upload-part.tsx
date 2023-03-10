import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  FormControlLabel,
  FormGroup,
  TextField
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseUploadPart, updateState } from 'src/store/apps/page'

const UploadPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openUploadPart, partSubType } = page
  const { inputKey, inputLabel, inputMaxFileCount, inputMaxFileSizeBytes } =
    page

  return (
    <>
      <Dialog open={openUploadPart}>
        <CustomDialogTitle
          title="업로드 파츠"
          onClose={() => {
            dispatch(hCloseUploadPart())
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
            <FormGroup row>
              <FormControlLabel
                label="png"
                control={<Checkbox defaultChecked />}
              />
              <FormControlLabel
                label="jpg"
                control={<Checkbox defaultChecked />}
              />
              <FormControlLabel
                label="jpeg"
                control={<Checkbox defaultChecked />}
              />
              <FormControlLabel
                label="gif"
                control={<Checkbox defaultChecked />}
              />
            </FormGroup>
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              type="number"
              label="업로드 파일 수"
              fullWidth
              value={inputMaxFileCount}
              onChange={(e) => {
                dispatch(
                  updateState({
                    key: 'inputMaxFileCount',
                    value: e.target.value
                  })
                )
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              type="number"
              label="업로드 파일 최대 용량 (MB)"
              fullWidth
              value={inputMaxFileSizeBytes}
              onChange={(e) => {
                const size = Number(e.target.value) * 1024 * 1024

                dispatch(
                  updateState({
                    key: 'inputMaxFileSizeBytes',
                    value: size
                  })
                )
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Button variant="contained" fullWidth>
              추가
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default UploadPart
