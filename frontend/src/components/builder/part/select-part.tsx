import { Dialog, DialogContent } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseSelectPart } from 'src/store/apps/page'

const SelectPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openSelectPart } = page

  return (
    <>
      <Dialog open={openSelectPart}>
        <CustomDialogTitle
          title="선택 파츠"
          onClose={() => {
            dispatch(hCloseSelectPart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>TODO</DialogContent>
      </Dialog>
    </>
  )
}

export default SelectPart
