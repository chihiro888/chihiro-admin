import { Button, Dialog, DialogContent, Grid, TextField } from '@mui/material'
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import Icon from 'src/@core/components/icon'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { useDispatch } from 'react-redux'
import { hCloseTableHeader, updateState } from 'src/store/apps/page'
import { toast } from 'react-hot-toast'
import CustomLottie from 'src/components/custom/custom-lottie'
import * as block from 'src/lottie/block.json'

const TableHeader = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openTableHeader, tableHeader } = page

  // ** Handler
  // 요소 수정
  const handleChangeInput = (e, idx) => {
    const copyArr = [...tableHeader]
    copyArr[idx] = e.target.value
    dispatch(updateState({ key: 'tableHeader', value: copyArr }))
  }

  // 요소 삭제
  const handleClickRemove = (idx) => {
    const copyArr = [...tableHeader]

    // 요소 삭제
    copyArr.splice(idx, 1)

    dispatch(updateState({ key: 'tableHeader', value: copyArr }))
  }

  // 요소 추가
  const handleClickAdd = () => {
    dispatch(updateState({ key: 'tableHeader', value: [...tableHeader, ''] }))
  }

  // 요소 저정
  const handleClickSave = () => {
    // 유효성
    for (let i = 0; i < tableHeader.length; i++) {
      const item = tableHeader[i]
      if (item === '') {
        // 알림
        toast.error('테이블 헤더는 빈 값이 될 수 없습니다.')

        return false
      }
    }

    // 모달 닫기
    dispatch(hCloseTableHeader())

    // 알림
    toast.success('테이블 헤더가 수정되었습니다.')
  }

  return (
    <>
      {/* 테이블 헤더 편집 */}
      <Dialog open={openTableHeader}>
        <CustomDialogTitle
          title="테이블 헤더 편집"
          onClose={() => {
            dispatch(hCloseTableHeader())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          {tableHeader.length === 0 && (
            <CustomLottie
              text={'테이블 헤더가 존재하지 않습니다'}
              data={block}
            />
          )}
          {tableHeader.map((item, idx) => {
            return (
              <Grid container spacing={1} sx={{ mb: 2 }} key={idx}>
                <Grid item xs={9}>
                  <TextField
                    id="outlined-basic"
                    label=""
                    size="small"
                    fullWidth
                    value={item}
                    onChange={(e) => {
                      handleChangeInput(e, idx)
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleClickRemove(idx)}
                    sx={{ width: '100%', height: '100%' }}
                  >
                    <Icon icon="material-symbols:delete-forever-outline"></Icon>
                  </Button>
                </Grid>
              </Grid>
            )
          })}

          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleClickAdd}
          >
            <Icon icon="material-symbols:add"></Icon>
          </Button>

          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 3 }}
            onClick={handleClickSave}
          >
            수정
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TableHeader
