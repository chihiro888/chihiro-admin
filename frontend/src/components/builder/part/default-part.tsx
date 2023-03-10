import { Dialog, DialogContent } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseDefaultPart } from 'src/store/apps/page'

const DefaultPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openDefaultPart } = page

  return (
    <>
      <Dialog open={openDefaultPart}>
        <CustomDialogTitle
          title="기본 파츠"
          onClose={() => {
            dispatch(hCloseDefaultPart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>TODO</DialogContent>
      </Dialog>
    </>
  )
}

export default DefaultPart
