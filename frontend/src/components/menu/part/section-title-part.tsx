import { Box, Button, Dialog, DialogContent, TextField } from '@mui/material'
import { t } from 'i18next'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createMenu } from 'src/apis/menu'
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { initData } from 'src/store/apps/crud'
import {
  hCloseAddForm,
  hCloseSectionTitlePart,
  setClearForm,
  updateSectionTitlePartForm
} from 'src/store/apps/menu'

const SectionTitlePart = (props: any) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const menu = useSelector((state: RootState) => state.menu)
  const { openSectionTitlePart, sectionTitlePartForm } = menu

  dispatch(updateSectionTitlePartForm({ key: 'type', value: 'line' }))

  // 폼 데이터 변경
  const handleChangeForm = (key: string, value: string) => {
    dispatch(updateSectionTitlePartForm({ key, value }))
  }

  // 메뉴 파트 추가
  const handleAddSectionTitlePart = async () => {
    try {
      const params = sectionTitlePartForm

      const { data: res } = await createMenu(params)
      if (res.statusCode === 200) {
        dispatch(initData())
        dispatch(hCloseSectionTitlePart())
        dispatch(hCloseAddForm())
        props.handleLoadData()
        dispatch(setClearForm())
      }
    } catch (err) {
      console.log('err', err)
      ///
    }
  }

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
            <TextField
              label="섹션 제목"
              value={sectionTitlePartForm.title}
              fullWidth
              onChange={(e) => {
                handleChangeForm('title', e.target.value)
              }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={handleAddSectionTitlePart}
            >
              추가
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SectionTitlePart
