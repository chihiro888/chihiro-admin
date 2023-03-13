import { Dialog, DialogContent } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseActionForm } from 'src/store/apps/page'
import FormManager from '../manager/form-manager'

const ActionForm = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openActionForm, actionForm } = page

  return (
    <>
      {/* 액션 폼 편집 */}
      <Dialog open={openActionForm}>
        <CustomDialogTitle
          title="액션 폼 편집"
          onClose={() => {
            dispatch(hCloseActionForm())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <FormManager _key="actionForm" list={actionForm} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ActionForm
