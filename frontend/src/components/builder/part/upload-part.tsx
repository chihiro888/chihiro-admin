import { Dialog, DialogContent } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseUploadPart } from 'src/store/apps/page'

const UploadPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openUploadPart } = page

  return (
    <>
      <Dialog open={openUploadPart}>
        <CustomDialogTitle
          title="업로드 파츠"
          onClose={() => {
            dispatch(hCloseUploadPart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>TODO</DialogContent>
      </Dialog>
    </>
  )
}

export default UploadPart
