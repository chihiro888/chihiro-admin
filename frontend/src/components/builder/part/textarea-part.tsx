import { Dialog, DialogContent } from '@mui/material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseTextareaPart } from 'src/store/apps/page'

const TextareaPart = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openTextareaPart } = page

  return (
    <>
      <Dialog open={openTextareaPart}>
        <CustomDialogTitle
          title="텍스트에리어 파츠"
          onClose={() => {
            dispatch(hCloseTextareaPart())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>TODO</DialogContent>
      </Dialog>
    </>
  )
}

export default TextareaPart
