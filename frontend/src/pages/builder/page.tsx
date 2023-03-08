import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import HeaderContainer from 'src/components/core/header-container'
import { AppDispatch } from 'src/store'
import { setPageHeader as setPageHeaderRedux } from 'src/store/apps/crud'
import Icon from 'src/@core/components/icon'

const Page = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** States
  const [openTableHeader, setOpenTableHeader] = useState<boolean>(false)
  const [openSearchForm, setOpenSearchForm] = useState<boolean>(false)
  const [openAddForm, setOpenAddForm] = useState<boolean>(false)
  const [openDetailForm, setOpenDetailForm] = useState<boolean>(false)
  const [openActionList, setOpenActionList] = useState<boolean>(false)

  // ** Core State
  const [url, setUrl] = useState('')
  const [pageHeader, setPageHeader] = useState({
    title: '',
    subTitle: ''
  })
  const [listApi, setListApi] = useState({
    disable: false,
    functionName: ''
  })
  const [createApi, setCreateApi] = useState({
    disable: false,
    functionName: ''
  })
  const [detailApi, setDetailApi] = useState({
    disable: false,
    functionName: ''
  })
  const [deleteApi, setDeleteApi] = useState({
    disable: false,
    functionName: ''
  })
  const [tableHeader, setTableHeader] = useState('')
  const [addForm, setAddForm] = useState('')
  const [detailForm, setDetailForm] = useState('')
  const [searchForm, setSearchForm] = useState('')
  const [actionList, setActionList] = useState('')

  // ** Handler
  const handleClickOpenTableHeader = () => {
    setOpenTableHeader(true)
  }
  const handleClickCloseTableHeader = () => {
    setOpenTableHeader(false)
  }

  const handleClickOpenSearchForm = () => {
    setOpenSearchForm(true)
  }
  const handleClickCloseSearchForm = () => {
    setOpenSearchForm(false)
  }

  const handleClickOpenAddForm = () => {
    setOpenAddForm(true)
  }
  const handleClickCloseAddForm = () => {
    setOpenAddForm(false)
  }

  const handleClickOpenDetailForm = () => {
    setOpenDetailForm(true)
  }
  const handleClickCloseDetailForm = () => {
    setOpenDetailForm(false)
  }

  const handleClickOpenActionList = () => {
    setOpenActionList(true)
  }
  const handleClickCloseActionList = () => {
    setOpenActionList(false)
  }

  useEffect(() => {
    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeaderRedux({
        title: '페이지 빌더',
        subTitle: '페이지를 간단하게 빌딩할 수 있습니다.'
      })
    )
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      <Box sx={{ mt: 5 }}>
        <Typography variant="subtitle1">URL 설정</Typography>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <TextField id="outlined-basic" label="URL" fullWidth size="small" />
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="subtitle1">페이지 설정</Typography>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <TextField
                  id="outlined-basic"
                  label="페이지 제목"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  id="outlined-basic"
                  label="페이지 설명"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="subtitle1">API 설정</Typography>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} md={3}>
                <FormControlLabel
                  control={<Switch defaultChecked disabled />}
                  label="리스트 API (필수)"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControlLabel
                  control={<Switch color="success" />}
                  label="생성 API"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControlLabel
                  control={<Switch color="warning" />}
                  label="상세 API"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControlLabel
                  control={<Switch color="error" />}
                  label="삭제 API"
                />
              </Grid>
            </Grid>
            <Grid container spacing={5} sx={{ mt: 1 }}>
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="리스트 API 함수명"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="생성 API 함수명"
                  fullWidth
                  size="small"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="상세 API 함수명"
                  fullWidth
                  size="small"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="삭제 API 함수명"
                  fullWidth
                  size="small"
                  disabled
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ mt: 8 }}>
        <Typography variant="subtitle1">구조 설정</Typography>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} md={2}>
                <Button
                  variant="outlined"
                  onClick={handleClickOpenTableHeader}
                  fullWidth
                >
                  <Icon
                    icon="material-symbols:table-chart-outline"
                    style={{ marginRight: '5px' }}
                  ></Icon>
                  테이블 헤더 편집
                </Button>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  variant="outlined"
                  onClick={handleClickOpenSearchForm}
                  fullWidth
                >
                  <Icon
                    icon="material-symbols:search"
                    style={{ marginRight: '5px' }}
                  ></Icon>
                  검색 폼 편집
                </Button>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  variant="outlined"
                  onClick={handleClickOpenAddForm}
                  fullWidth
                >
                  <Icon
                    icon="material-symbols:add-box-outline"
                    style={{ marginRight: '5px' }}
                  ></Icon>
                  추가 폼 편집
                </Button>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  variant="outlined"
                  onClick={handleClickOpenDetailForm}
                  fullWidth
                >
                  <Icon icon="bx:detail" style={{ marginRight: '5px' }}></Icon>
                  상세 폼 편집
                </Button>
              </Grid>

              <Grid item xs={12} md={2}>
                <Button
                  variant="outlined"
                  onClick={handleClickOpenActionList}
                  fullWidth
                >
                  <Icon
                    icon="material-symbols:edit-document-outline-rounded"
                    style={{ marginRight: '5px' }}
                  ></Icon>
                  액션 편집
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Button variant="contained" color="primary" sx={{ mt: 5 }}>
          저장
        </Button>
      </Box>

      {/* 테이블 헤더 편집 */}
      <Dialog
        onClose={handleClickCloseTableHeader}
        aria-labelledby="simple-dialog-title"
        open={openTableHeader}
      >
        <DialogTitle id="simple-dialog-title">테이블 헤더 편집</DialogTitle>
        <DialogContent>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={9}>
              <TextField id="outlined-basic" label="" size="small" fullWidth />
            </Grid>
            <Grid item xs={3}>
              <Button variant="outlined" color="error">
                <Icon icon="material-symbols:delete-forever-outline"></Icon>
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={9}>
              <TextField id="outlined-basic" label="" size="small" fullWidth />
            </Grid>
            <Grid item xs={3}>
              <Button variant="outlined" color="error">
                <Icon icon="material-symbols:delete-forever-outline"></Icon>
              </Button>
            </Grid>
          </Grid>

          <Button variant="outlined" fullWidth sx={{ mt: 3 }}>
            <Icon icon="material-symbols:add"></Icon>
          </Button>
        </DialogContent>
      </Dialog>

      {/* 검색 폼 편집 */}
      <Dialog
        onClose={handleClickCloseSearchForm}
        aria-labelledby="simple-dialog-title"
        open={openSearchForm}
      >
        <DialogTitle id="simple-dialog-title">검색 폼 편집</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>

      {/* 추가 폼 편집 */}
      <Dialog
        onClose={handleClickCloseAddForm}
        aria-labelledby="simple-dialog-title"
        open={openAddForm}
      >
        <DialogTitle id="simple-dialog-title">추가 폼 편집</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>

      {/* 상세 폼 편집 */}
      <Dialog
        onClose={handleClickCloseDetailForm}
        aria-labelledby="simple-dialog-title"
        open={openDetailForm}
      >
        <DialogTitle id="simple-dialog-title">상세 폼 편집</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>

      {/* 액션 편집 */}
      <Dialog
        onClose={handleClickCloseActionList}
        aria-labelledby="simple-dialog-title"
        open={openActionList}
      >
        <DialogTitle id="simple-dialog-title">액션 편집</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </>
  )
}

export default Page
