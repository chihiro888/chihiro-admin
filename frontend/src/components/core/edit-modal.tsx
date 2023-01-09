import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import EditConfirmModal from './edit-confirm-modal'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { updateActionForm } from 'src/store/apps/crud'
import ModalFormContent from './modal-form-content'

const EditModal = ({ openEditModal, setOpenEditModal, title }) => {
  // ** Hooks
  const dispatch = useDispatch()
  const crud = useSelector((state: RootState) => state.crud)
  const actionForm = crud.actionForm

  // ** State
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false)

  // ** Handler
  // 확인 모달 열기
  const handleClickOpenConfirmModal = () => setOpenConfirmModal(true)

  // 확인 모달 닫기
  const handleClickCloseConfirmModal = () => setOpenConfirmModal(false)

  // 폼 데이터 변경
  const handleChangeForm = (key: string, value: string) => {
    dispatch(updateActionForm({ key, value }))
  }

  return (
    <>
      <Dialog
        open={openEditModal}
        onClose={() => {
          setOpenEditModal(false)
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <ModalFormContent formContent={actionForm} handleChangeForm={handleChangeForm} />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setOpenEditModal(false)
            }}
          >
            취소
          </Button>
          <Button variant="contained" onClick={handleClickOpenConfirmModal}>
            수정
          </Button>
        </DialogActions>
      </Dialog>

      <EditConfirmModal
        openConfirmModal={openConfirmModal}
        handleClickCloseConfirmModal={handleClickCloseConfirmModal}
        setOpenEditModal={setOpenEditModal}
      />
    </>
  )
}

export default EditModal
