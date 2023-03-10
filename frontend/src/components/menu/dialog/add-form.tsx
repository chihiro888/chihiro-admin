import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Typography
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import FormManager from 'src/components/builder/menu/manager/form-manager'
import CustomDialogTitle from 'src/components/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hCloseAddForm,
  hOpenMenuPart,
  hOpenSectionTitlePart
} from 'src/store/apps/menu'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
// import FormManager from '../manager/form-manager'

const AddForm = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Redux
  const menu = useSelector((state: RootState) => state.menu)
  const { openAddForm, addForm } = menu

  return (
    <>
      <Dialog open={openAddForm}>
        <CustomDialogTitle
          title="메뉴 생성"
          onClose={() => {
            dispatch(hCloseAddForm())
          }}
        />
        <DialogContent style={{ minWidth: '350px' }}>
          <Card
            sx={{
              border: 0,
              boxShadow: 0,
              color: 'common.white',
              backgroundColor: 'primary.main',
              mb: 5,
              cursor: 'pointer'
            }}
            onClick={() => dispatch(hOpenMenuPart())}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'common.white',
                  '& svg': { mr: 2.5 }
                }}
              >
                <Icon icon="bx:add-to-queue" />
                메뉴
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              border: 0,
              boxShadow: 0,
              color: 'common.white',
              backgroundColor: 'primary.main',
              mb: 5,
              cursor: 'pointer'
            }}
            onClick={() => dispatch(hOpenSectionTitlePart())}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'common.white',
                  '& svg': { mr: 2.5 }
                }}
              >
                <Icon icon="material-symbols:bookmark-add-outline" />
                섹션 제목
              </Typography>
            </CardContent>
          </Card>
          {/* <FormManager _key="addForm" list={addForm} /> */}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddForm
