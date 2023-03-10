import { Dialog, DialogContent } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseLinePart } from 'src/store/apps/page'

const LinePart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openLinePart } = page

  return (
    <>
      <Dialog open={openLinePart}>
        <CustomDialogTitle
          title="라인 파츠"
          onClose={() => {
            dispatch(hCloseLinePart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>TODO</DialogContent>
      </Dialog>
    </>
  )
}

export default LinePart
