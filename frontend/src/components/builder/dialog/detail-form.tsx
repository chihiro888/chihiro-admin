import { Dialog, DialogContent } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { closeDetailForm } from 'src/store/apps/page'
import FormManager from '../manager/form-manager'

const DetailForm = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const openDetailForm = page.openDetailForm

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" open={openDetailForm}>
        <CustomDialogTitle
          title="상세 폼 편집"
          onClose={() => {
            dispatch(closeDetailForm())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <FormManager />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DetailForm
