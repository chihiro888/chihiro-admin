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
import { hCloseSelectPart, updateState } from 'src/store/apps/page'
import Icon from 'src/@core/components/icon'
import produce from 'immer'
import updateForm from 'src/utils/page'

const SelectPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openSelectPart, partSubType } = page
  const { inputKey, inputLabel, inputSelectList } = page

  // ** Handler
  // select box 아이템 추가
  const handleAddItem = () => {
    dispatch(
      updateState({
        key: 'inputSelectList',
        value: [...inputSelectList, { key: '', label: '' }]
      })
    )
  }

  // select box 아이템 삭제
  const handleRemoveItem = (idx: number) => {
    const nextState = produce(inputSelectList, (draftState) => {
      draftState.splice(idx, 1)
    })

    dispatch(updateState({ key: 'inputSelectList', value: nextState }))
  }

  // select box 아이템 값 수정
  const handleChangeItem = (idx: number, key: string, value: string) => {
    const nextState = produce(inputSelectList, (draftState) => {
      draftState[idx][key] = value
    })

    dispatch(updateState({ key: 'inputSelectList', value: nextState }))
  }

  // 파츠 추가
  const handleAddPart = () => {
    updateForm(dispatch, page)
  }

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
          <Typography sx={{ mb: 2 }}>리스트</Typography>

          {inputSelectList.map((item, idx) => {
            return (
              <Grid container spacing={2} sx={{ mb: 3 }} key={idx}>
                <Grid item>
                  <TextField
                    label="라벨"
                    fullWidth
                    size="small"
                    value={item.label}
                    onChange={(e) => {
                      handleChangeItem(idx, 'label', e.target.value)
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="값"
                    fullWidth
                    size="small"
                    value={item.value}
                    onChange={(e) => {
                      handleChangeItem(idx, 'value', e.target.value)
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="error"
                    fullWidth
                    onClick={() => {
                      handleRemoveItem(idx)
                    }}
                  >
                    삭제 {idx}
                  </Button>
                </Grid>
              </Grid>
            )
          })}
          <Box sx={{ mb: 3 }}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleAddItem}
            >
              <Icon icon="material-symbols:add"></Icon>
            </Button>
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

export default SelectPart
