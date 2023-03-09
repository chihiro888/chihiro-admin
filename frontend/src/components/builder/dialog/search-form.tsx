import { Dialog, DialogContent } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { closeSearchForm } from 'src/store/apps/page'
import FormManager from '../manager/form-manager'

const SearchForm = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openSearchForm, searchForm } = page

  return (
    <>
      {/* 검색 폼 편집 */}
      <Dialog aria-labelledby="simple-dialog-title" open={openSearchForm}>
        <CustomDialogTitle
          title="검색 폼 편집"
          onClose={() => {
            dispatch(closeSearchForm())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <FormManager />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SearchForm
