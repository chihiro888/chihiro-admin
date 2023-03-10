import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseSelectPart } from 'src/store/apps/page'
import Icon from 'src/@core/components/icon'

const SelectPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openSelectPart } = page

  return (
    <>
      <Dialog open={openSelectPart}>
        <CustomDialogTitle
          title="선택 파츠"
          onClose={() => {
            dispatch(hCloseSelectPart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <Box sx={{ mb: 3 }}>
            <TextField label="타입" fullWidth />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField label="키" fullWidth />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField label="라벨" fullWidth />
          </Box>
          <Typography sx={{ mb: 2 }}>리스트</Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item>
              <TextField label="라벨" fullWidth size="small" />
            </Grid>
            <Grid item>
              <TextField label="값" fullWidth size="small" />
            </Grid>
            <Grid item>
              <Button variant="outlined" color="error" fullWidth>
                삭제
              </Button>
            </Grid>
          </Grid>
          <Box sx={{ mb: 3 }}>
            <Button variant="outlined" color="secondary" fullWidth>
              <Icon icon="material-symbols:add"></Icon>
            </Button>
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

export default SelectPart
