import { Button, Dialog, DialogContent, Grid, TextField } from '@mui/material'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import Icon from 'src/@core/components/icon'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { useDispatch } from 'react-redux'
import { hCloseTableContent, updateState } from 'src/store/apps/page'
import { toast } from 'react-hot-toast'
import CustomLottie from 'src/components/custom-lottie'
import * as block from 'src/lottie/block.json'

const TableContent = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openTableContent, tableContent } = page

  // ** Handler
  // 입력 수정
  const handleChangeInput = (value: string) => {
    dispatch(updateState({ key: 'tableContent', value: value }))
  }

  // 저정
  const handleClickSave = () => {
    // 모달 닫기
    dispatch(hCloseTableContent())

    // 알림
    toast.success('테이블 내용이 수정되었습니다.')
  }

  return (
    <>
      {/* 테이블 내용 편집 */}
      <Dialog open={openTableContent}>
        <CustomDialogTitle
          title="테이블 내용 편집"
          onClose={() => {
            dispatch(hCloseTableContent())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          {/* {tableContent && (
            <CustomLottie
              text={'테이블 내용이 존재하지 않습니다'}
              data={block}
            />
          )} */}
          <TextField
            multiline
            rows={15}
            fullWidth
            label="태이블 내용"
            value={tableContent}
            onChange={(e: any) => handleChangeInput(e.target.value)}
          />

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

export default TableContent
