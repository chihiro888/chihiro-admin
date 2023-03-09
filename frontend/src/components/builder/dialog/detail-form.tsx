import { Dialog, DialogContent } from '@mui/material'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { RootState } from 'src/store'

const DetailForm = () => {
  // Redux
  const page = useSelector((state: RootState) => state.page)
  const openDetailForm = page.openDetailForm

  return (
    <>
      <Dialog aria-labelledby="simple-dialog-title" open={openDetailForm}>
        <CustomDialogTitle
          title="상세 폼 편집"
          // onClose={handleClickCloseDetailForm}
          onClose={() => {
            //
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}></DialogContent>
      </Dialog>
    </>
  )
}

export default DetailForm
