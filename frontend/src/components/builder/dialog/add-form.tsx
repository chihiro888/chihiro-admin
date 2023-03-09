import { Dialog, DialogContent } from '@mui/material'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { RootState } from 'src/store'

const AddForm = () => {
  // Redux
  const page = useSelector((state: RootState) => state.page)
  const openAddForm = page.openAddForm

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" open={openAddForm}>
        <CustomDialogTitle
          title="추가 폼 편집"
          // onClose={handleClickCloseAddForm}
          onClose={() => {
            //
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}></DialogContent>
      </Dialog>
    </>
  )
}

export default AddForm
