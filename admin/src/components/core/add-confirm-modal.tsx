import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { getPaginationCount, getParamsFromForm } from 'src/utils'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { setPagination } from 'src/store/apps/crud'

const AddConfirmModal = ({
  openConfirmModal,
  handleClickCloseModal,
  handleClickCloseConfirmModal
}) => {
  // ** Hooks
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const crud = useSelector((state: RootState) => state.crud)
  const addForm = crud.addForm
  const searchForm = crud.searchForm
  const listAPI = crud.listAPI
  const createAPI = crud.createAPI

  // 추가 버튼 클릭 시
  const handleClickAdd = async () => {
    try {
      const params = getParamsFromForm(addForm)
      const { data: res } = await createAPI(params)
      if (res.statusCode === 200) {
        toast.success(t(res.message))
        handleClickCloseConfirmModal()
        handleClickCloseModal()
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
          count: getPaginationCount(data.count, params['limit']),
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
        <DialogTitle id="alert-dialog-title">추가 (확인)</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            데이터를 추가하시겠습니까?
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
          <Button variant="contained" onClick={handleClickAdd}>
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddConfirmModal
