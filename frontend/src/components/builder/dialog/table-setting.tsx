import { Dialog, DialogContent } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import { hCloseTableSetting } from 'src/store/apps/page'
import TableManager from '../manager/table-manager'

const TableSetting = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { openTableSetting, tableSetting } = page

  return (
    <>
      {/* 검색 폼 편집 */}
      <Dialog open={openTableSetting}>
        <CustomDialogTitle
          title="테이블 구성 편집"
          onClose={() => {
            dispatch(hCloseTableSetting())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <TableManager list={tableSetting} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TableSetting
