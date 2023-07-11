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
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hClosePartSelector,
  updateState,
  hCloseTableChipPart
} from 'src/store/apps/page'
import { addPart, updatePart } from 'src/utils/page'
import produce from 'immer'
import Icon from 'src/@core/components/icon'

const TableChipPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openTableChipPart, partSubType, partMode } = page
  const { inputKey, inputHeader, inputChipList } = page

  // ** Handler
  // chip 아이템 추가
  const handleAddItem = () => {
    dispatch(
      updateState({
        key: 'inputChipList',
        value: [...inputChipList, { key: '', label: '' }]
      })
    )
  }

  // chip 아이템 삭제
  const handleRemoveItem = (idx: number) => {
    const nextState = produce(inputChipList, (draftState) => {
      draftState.splice(idx, 1)
    })

    dispatch(updateState({ key: 'inputChipList', value: nextState }))
  }

  // chip 아이템 값 수정
  const handleChangeItem = (idx: number, key: string, value: string) => {
    const nextState = produce(inputChipList, (draftState) => {
      draftState[idx][key] = value
    })

    dispatch(updateState({ key: 'inputChipList', value: nextState }))
  }

  // 파츠 추가
  const handleAddPart = () => {
    addPart(dispatch, page)
    dispatch(hCloseTableChipPart())
    dispatch(hClosePartSelector())
  }

  // 파츠 수정
  const handleUpdatePart = () => {
    updatePart(dispatch, page)
    dispatch(hCloseTableChipPart())
    dispatch(hClosePartSelector())
  }

  return (
    <>
      <Dialog open={openTableChipPart}>
        <CustomDialogTitle
          title="테이블 CHIP 파츠"
          onClose={() => {
            dispatch(hCloseTableChipPart())
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
              label="헤더"
              fullWidth
              value={inputHeader}
              onChange={(e) => {
                dispatch(
                  updateState({ key: 'inputHeader', value: e.target.value })
                )
              }}
            />
          </Box>

          <Typography sx={{ mb: 2 }}>리스트</Typography>
          {inputChipList.map((item, idx) => {
            return (
              <Grid container sx={{ mb: 1, p: 0 }} key={idx} xs={12}>
                <Grid item xs sx={{ p: 1 }}>
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
                {/* FIXME - */}
                <Grid item xs sx={{ p: 1 }}>
                  <TextField
                    label="대체단어"
                    fullWidth
                    size="small"
                    value={item.alt}
                    onChange={(e) => {
                      handleChangeItem(idx, 'alt', e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs sx={{ p: 1 }}>
                  <TextField
                    label="색상"
                    fullWidth
                    size="small"
                    value={item.key}
                    onChange={(e) => {
                      handleChangeItem(idx, 'key', e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs="auto" sx={{ p: 1 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    fullWidth
                    sx={{ m: 0 }}
                    onClick={() => {
                      handleRemoveItem(idx)
                    }}
                  >
                    <Typography color="error" sx={{ p: 0 }}>
                      삭제
                    </Typography>
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

export default TableChipPart
