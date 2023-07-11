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
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hCloseDefaultPart,
  hClosePartSelector,
  hCloseUploadPart,
  updateState
} from 'src/store/apps/page'
import { addPart, updatePart } from 'src/utils/page'

const UploadPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openUploadPart, partSubType, partMode } = page
  const {
    inputKey,
    inputLabel,
    inputMaxFileCount,
    inputMaxFileSizeBytes,
    inputAllowFileExt
  } = page

  // ** Handler
  const handleChangeCheck = (e, extType) => {
    if (e.target.checked && !inputAllowFileExt.includes(extType)) {
      dispatch(
        updateState({
          key: 'inputAllowFileExt',
          value: [...inputAllowFileExt, extType]
        })
      )
    } else {
      dispatch(
        updateState({
          key: 'inputAllowFileExt',
          value: inputAllowFileExt.filter((ext) => ext !== extType)
        })
      )
    }
  }

  // 파츠 추가
  const handleAddPart = () => {
    addPart(dispatch, page)
    dispatch(hCloseUploadPart())
    dispatch(hClosePartSelector())
  }

  // 파츠 수정
  const handleUpdatePart = () => {
    updatePart(dispatch, page)
    dispatch(hCloseUploadPart())
    dispatch(hClosePartSelector())
  }

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
                control={
                  <Checkbox
                    checked={inputAllowFileExt.includes('png')}
                    onChange={(e) => {
                      handleChangeCheck(e, 'png')
                    }}
                  />
                }
              />
              <FormControlLabel
                label="jpg"
                control={
                  <Checkbox
                    checked={inputAllowFileExt.includes('jpg')}
                    onChange={(e) => {
                      handleChangeCheck(e, 'jpg')
                    }}
                  />
                }
              />
              <FormControlLabel
                label="jpeg"
                control={
                  <Checkbox
                    checked={inputAllowFileExt.includes('jpeg')}
                    onChange={(e) => {
                      handleChangeCheck(e, 'jpeg')
                    }}
                  />
                }
              />
              <FormControlLabel
                label="gif"
                control={
                  <Checkbox
                    checked={inputAllowFileExt.includes('gif')}
                    onChange={(e) => {
                      handleChangeCheck(e, 'gif')
                    }}
                  />
                }
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
              value={inputMaxFileSizeBytes / 1024 / 1024}
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

export default UploadPart
