import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Grid,
  Typography
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import { AppDispatch, RootState } from 'src/store'
import {
  hCloseAddForm,
  hOpenMenuPart,
  hOpenSectionTitlePart
} from 'src/store/apps/menu'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

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
              boxShadow: 0,
              '&:hover': {
                boxShadow: '0px 0px 0px 2px rgba(50, 71, 92, 0.1)'
              },
              border: 0,
              color: '#707070',
              backgroundColor: '#f6f6f8',
              mb: 3,
              cursor: 'pointer'
            }}
            onClick={() => dispatch(hOpenMenuPart())}
          >
            <CardContent style={{ padding: '10px' }}>
              <Grid container spacing={3}>
                <Grid item>
                  <Icon icon="bx:add-to-queue" />
                </Grid>
                <Grid item>
                  <Typography>메뉴</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card
            sx={{
              boxShadow: 0,
              '&:hover': {
                boxShadow: '0px 0px 0px 2px rgba(50, 71, 92, 0.1)'
              },
              border: 0,
              color: '#707070',
              backgroundColor: '#f6f6f8',
              mb: 3,
              cursor: 'pointer'
            }}
            onClick={() => dispatch(hOpenSectionTitlePart())}
          >
            <CardContent style={{ padding: '10px' }}>
              <Grid container spacing={3}>
                <Grid item>
                  <Icon icon="material-symbols:bookmark-add-outline" />
                </Grid>
                <Grid item>
                  <Typography>섹션 제목</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* <FormManager _key="addForm" list={addForm} /> */}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddForm
