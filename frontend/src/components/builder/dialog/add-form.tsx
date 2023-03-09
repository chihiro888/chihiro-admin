import { Dialog, DialogContent } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { closeAddForm } from 'src/store/apps/page'
import FormManager from '../manager/form-manager'

const AddForm = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const openAddForm = page.openAddForm

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" open={openAddForm}>
        <CustomDialogTitle
          title="추가 폼 편집"
          onClose={() => {
            dispatch(closeAddForm())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <FormManager />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddForm
