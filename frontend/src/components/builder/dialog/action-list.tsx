import { Dialog, DialogContent } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { closeActionList } from 'src/store/apps/page'
import ActionManager from '../manager/action-manager'

const ActionList = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const openActionList = page.openActionList

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" open={openActionList}>
        <CustomDialogTitle
          title="액션 편집"
          onClose={() => {
            dispatch(closeActionList())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <ActionManager />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ActionList
