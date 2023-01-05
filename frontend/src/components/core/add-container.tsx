import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import AddModal from 'src/components/core/add-modal'
import { initAddForm } from 'src/store/apps/crud'

const AddContainer = () => {
  // ** Hooks
  const dispatch = useDispatch()

  // 추가 모달
  const [openModal, setOpenModal] = useState<boolean>(false)

  // 추가 모달 열기
  const handleClickOpenModal = () => {
    dispatch(initAddForm())
    setOpenModal(true)
  }

  // 추가 모달 닫기
  const handleClickCloseModal = () => setOpenModal(false)

  return (
    <>
      <Stack sx={{ mt: 5 }}>
        <div style={{ textAlign: 'right' }}>
          <Button variant="contained" onClick={handleClickOpenModal}>
            추가
          </Button>
        </div>
      </Stack>

      <AddModal
        openModal={openModal}
        handleClickCloseModal={handleClickCloseModal}
      />
    </>
  )
}

export default AddContainer
