import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { setPagination } from 'src/store/apps/crud'
import { getPaginationCount } from 'src/utils'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'

const DeleteConfirmModal = ({
  openDeleteConfirmModal,
  setOpenDeleteConfirmModal
}) => {
  // ** Hooks
  const { t } = useTranslation()
  const crud = useSelector((state: RootState) => state.crud)
  const dispatch = useDispatch()
  const actionId = crud.actionId
  const deleteAPI = crud.deleteAPI
  const listAPI = crud.listAPI

  const handleClickDelete = async () => {
    try {
      // 삭제 API 호출
      const params = {
        userId: actionId
      }
      const { data: res } = await deleteAPI(params)
      if (res.statusCode === 200) {
        toast.success(t(res.message))

        // 삭제 확인 모달 닫기
        setOpenDeleteConfirmModal(false)

        // 데이터 리로드
        reloadData()
      }
    } catch (err) {
      toast.error(t(err.response.data.message))
    }
  }

  // 데이터 리로드
  const reloadData = async () => {
    const params = {
      page: 1
    }
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
        open={openDeleteConfirmModal}
        onClose={() => {
          setOpenDeleteConfirmModal(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">삭제 (확인)</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            삭제하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setOpenDeleteConfirmModal(false)
            }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleClickDelete()
            }}
          >
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteConfirmModal
