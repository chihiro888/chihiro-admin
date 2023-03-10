import { Box, Button, Dialog, DialogContent, TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseSectionTitlePart } from 'src/store/apps/menu'

const SectionTitlePart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const menu = useSelector((state: RootState) => state.menu)
  const { openSectionTitlePart } = menu

  return (
    <>
      <Dialog open={openSectionTitlePart}>
        <CustomDialogTitle
          title="섹션 제목 파트"
          onClose={() => {
            dispatch(hCloseSectionTitlePart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <Box sx={{ mb: 3 }}>
            <TextField label="섹션 제목" fullWidth />
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

export default SectionTitlePart
