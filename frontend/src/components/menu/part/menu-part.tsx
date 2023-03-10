import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseMenuPart } from 'src/store/apps/menu'

const MenuPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const menu = useSelector((state: RootState) => state.menu)
  const { openMenuPart } = menu

  return (
    <>
      <Dialog open={openMenuPart}>
        <CustomDialogTitle
          title="메뉴 파츠"
          onClose={() => {
            dispatch(hCloseMenuPart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <Box sx={{ mb: 3 }}>
            <TextField label="타이틀" fullWidth />
          </Box>
          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel>라우팅 방식</InputLabel>
              <Select
                label="라우팅 방식"
                defaultValue="common"
                id="demo-simple-select-outlined"
                labelId="demo-simple-select-outlined-label"
              >
                <MenuItem value="common">공통</MenuItem>
                <MenuItem value="routing">Next.js 라우팅</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Age</InputLabel>
              <Select
                label="Age"
                defaultValue=""
                id="demo-simple-select-outlined"
                labelId="demo-simple-select-outlined-label"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
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

export default MenuPart
