import { Dialog, DialogContent } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseSearchForm } from 'src/store/apps/page'
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
      <Dialog open={openSearchForm}>
        <CustomDialogTitle
          title="검색 폼 편집"
          onClose={() => {
            dispatch(hCloseSearchForm())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <FormManager _key="searchForm" list={searchForm} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SearchForm
