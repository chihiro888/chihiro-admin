import { Dialog, DialogContent } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseAddForm } from 'src/store/apps/page'
import FormManager from '../manager/form-manager'

const AddForm = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openAddForm, addForm } = page

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" open={openAddForm}>
        <CustomDialogTitle
          title="추가 폼 편집"
          onClose={() => {
            dispatch(hCloseAddForm())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <FormManager _key="addForm" list={addForm} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddForm
