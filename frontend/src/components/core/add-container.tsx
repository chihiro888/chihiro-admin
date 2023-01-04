import produce from 'immer'
import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import AddModal from 'src/components/core/add-modal'

const AddContainer = ({ addForm, setAddForm }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleClickOpenModal = () => {
    const nextState = produce(addForm, (draftState) => {
      draftState.map((item) => {
        item.value = ''
      })
    })
    setAddForm(nextState)
    setOpenModal(true)
  }
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
        addForm={addForm}
        setAddForm={setAddForm}
      />
    </>
  )
}

export default AddContainer
