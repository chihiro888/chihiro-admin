import { Dialog, DialogContent } from '@mui/material'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { RootState } from 'src/store'

const ActionList = () => {
  // Redux
  const page = useSelector((state: RootState) => state.page)
  const openActionList = page.openActionList

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" open={openActionList}>
        <CustomDialogTitle
          title="액션 편집"
          // onClose={handleClickCloseActionList}
          onClose={() => {
            //
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}></DialogContent>
      </Dialog>
    </>
  )
}

export default ActionList
