import { Dialog, DialogContent } from '@mui/material'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { RootState } from 'src/store'

const SearchForm = () => {
  // Redux
  const page = useSelector((state: RootState) => state.page)
  const openSearchForm = page.openSearchForm

  return (
    <>
      {/* 검색 폼 편집 */}
      <Dialog aria-labelledby="simple-dialog-title" open={openSearchForm}>
        <CustomDialogTitle
          title="검색 폼 편집"
          // onClose={handleClickCloseSearchForm}
          onClose={() => {
            //
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}></DialogContent>
      </Dialog>
    </>
  )
}

export default SearchForm
