import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@mui/material'
import { t } from 'i18next'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createMenu } from 'src/apis/menu'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { initData } from 'src/store/apps/crud'
import {
  hCloseAddForm,
  hCloseMenuPart,
  hOpenPagePart,
  updateMenuPartForm
} from 'src/store/apps/menu'

const MenuPart = (props: any) => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const menu = useSelector((state: RootState) => state.menu)
  const { openMenuPart, menuPartForm } = menu

  dispatch(updateMenuPartForm({ key: 'type', value: 'menu' }))

  // 폼 데이터 변경
  const handleChangeForm = (key: string, value: string) => {
    dispatch(updateMenuPartForm({ key, value }))
  }

  // 메뉴 파트 추가
  const handleAddMenuPart = async () => {
    try {
      const { page, ...params } = menuPartForm

      const { data: res } = await createMenu(params)
      if (res.statusCode === 200) {
        dispatch(initData())
        dispatch(hCloseMenuPart())
        dispatch(hCloseAddForm())
        props.handleLoadData()
        toast.success(res.message)
      }
    } catch (err) {
      toast.error(t(err.response.data.message))
    }
  }

  return (
    <>
      <Dialog open={openMenuPart}>
        <CustomDialogTitle
          title="메뉴 파트"
          onClose={() => {
            dispatch(hCloseMenuPart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="아이콘"
              fullWidth
              onChange={(e) => {
                handleChangeForm('icon', e.target.value)
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="타이틀"
              fullWidth
              onChange={(e) => {
                handleChangeForm('title', e.target.value)
              }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              label="페이지 선택"
              value={menuPartForm.page}
              onClick={() => {
                dispatch(hOpenPagePart())
              }}
              onChange={(e) => {
                handleChangeForm('page', e.target.value)
              }}
              fullWidth
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography>라우팅 방식</Typography>
            <RadioGroup
              row
              aria-label="controlled"
              name="controlled"
              value={menuPartForm.route}
              onChange={(e) => {
                handleChangeForm('route', e.target.value)
              }}
            >
              <FormControlLabel
                value="routing"
                control={<Radio />}
                label="next.js 라우팅"
              />
              <FormControlLabel
                value="common"
                control={<Radio />}
                label="공통"
              />
            </RadioGroup>
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              label="path"
              value={menuPartForm.path}
              onChange={(e) => {
                handleChangeForm('path', e.target.value)
              }}
              fullWidth
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Button variant="contained" fullWidth onClick={handleAddMenuPart}>
              추가
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MenuPart
