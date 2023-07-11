import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { getPaginationCount, getParamsFromForm } from 'src/utils'
import toast from 'react-hot-toast'
import { setPagination } from 'src/store/apps/crud'

const EditConfirmModal = ({
  openConfirmModal,
  handleClickCloseConfirmModal,
  setOpenEditModal
}) => {
  // ** Hooks
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const crud = useSelector((state: RootState) => state.crud)
  const actionId = crud.actionId
  const searchForm = crud.searchForm
  const actionForm = crud.actionForm
  const listAPI = crud.listAPI
  const updateAPI = crud.updateAPI

  // 수정 버튼 클릭 시
  const handleClickEdit = async () => {
    try {
      const params = getParamsFromForm(actionForm)
      params['id'] = actionId
      const { data: res } = await updateAPI(params)
      if (res.statusCode === 200) {
        toast.success(t(res.message))

        // 수정 확인 모달 닫기
        handleClickCloseConfirmModal()

        // 수정 모달 닫기
        setOpenEditModal(false)

        // 데이터 리로드
        reloadData()
      }
    } catch (err) {
      toast.error(t(err.response.data.message))
    }
  }

  const reloadData = async () => {
    const params = getParamsFromForm(searchForm)
    params['page'] = 1
    const { data: res } = await listAPI(params)
    if (res.statusCode === 200) {
      const data = res.data
      dispatch(
        setPagination({
          activePage: 1,
          count: getPaginationCount(data.count),
          data: data.data
        })
      )
    }
  }

  return (
    <>
      <Dialog
        open={openConfirmModal}
        onClose={handleClickCloseConfirmModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">수정 (확인)</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            수정하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickCloseConfirmModal}
          >
            취소
          </Button>
          <Button variant="contained" onClick={handleClickEdit}>
            수정
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default EditConfirmModal
