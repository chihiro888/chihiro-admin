import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography
} from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Icon from 'src/@core/components/icon'
import { AppDispatch, RootState } from 'src/store'
import {
  openDetailForm,
  openSearchForm,
  openTableHeader,
  updateState
} from 'src/store/apps/page'

const EditForm = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  // ** Redux
  const page = useSelector((state: RootState) => state.page)
  const { url, pageHeader, listApi, createApi, detailApi, deleteApi } = page

  // ** Handler
  // URL 변경
  const handleChangeUrl = (e) => {
    dispatch(updateState({ key: 'url', value: e.target.value }))
  }

  // 페이지 제목 변경
  const handleChangeTitle = (e) => {
    dispatch(
      updateState({
        key: 'pageHeader',
        value: { ...pageHeader, title: e.target.value }
      })
    )
  }

  // 페이지 설명 변경
  const handleChangeSubTitle = (e) => {
    dispatch(
      updateState({
        key: 'pageHeader',
        value: { ...pageHeader, subTitle: e.target.value }
      })
    )
  }

  // 스위치 변경
  const handleChangeSwitch = (e, state, key) => {
    if (state.checked) {
      dispatch(
        updateState({
          key,
          value: { checked: e.target.checked, functionName: '' }
        })
      )
    } else {
      dispatch(
        updateState({
          key,
          value: { ...state, checked: e.target.checked }
        })
      )
    }
  }

  // API 변경
  const handleChangeApi = (e, state, key) => {
    dispatch(
      updateState({
        key,
        value: { ...state, functionName: e.target.value }
      })
    )
  }

  // 목록
  const handleClickList = () => {
    router.push('/builder/page')
  }

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Typography variant="subtitle1">URL 설정</Typography>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <TextField
              id="outlined-basic"
              label="URL"
              fullWidth
              size="small"
              onChange={handleChangeUrl}
              value={url}
            />
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
                  value={pageHeader.title}
                  onChange={handleChangeTitle}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  id="outlined-basic"
                  label="페이지 설명"
                  fullWidth
                  size="small"
                  value={pageHeader.subTitle}
                  onChange={handleChangeSubTitle}
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
                  control={<Switch disabled checked={listApi.checked} />}
                  label="리스트 API (필수)"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControlLabel
                  control={
                    <Switch
                      color="success"
                      checked={createApi.checked}
                      onChange={(e) => {
                        handleChangeSwitch(e, createApi, 'createApi')
                      }}
                    />
                  }
                  label="생성 API"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControlLabel
                  control={
                    <Switch
                      color="warning"
                      checked={detailApi.checked}
                      onChange={(e) => {
                        handleChangeSwitch(e, detailApi, 'detailApi')
                      }}
                    />
                  }
                  label="상세 API"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControlLabel
                  control={
                    <Switch
                      color="error"
                      checked={deleteApi.checked}
                      onChange={(e) => {
                        handleChangeSwitch(e, deleteApi, 'deleteApi')
                      }}
                    />
                  }
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
                  value={listApi.functionName}
                  onChange={(e) => {
                    handleChangeApi(e, listApi, 'listApi')
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="생성 API 함수명"
                  fullWidth
                  size="small"
                  disabled={createApi.checked ? false : true}
                  value={createApi.functionName}
                  onChange={(e) => {
                    handleChangeApi(e, createApi, 'createApi')
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="상세 API 함수명"
                  fullWidth
                  size="small"
                  disabled={detailApi.checked ? false : true}
                  value={detailApi.functionName}
                  onChange={(e) => {
                    handleChangeApi(e, detailApi, 'detailApi')
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  id="outlined-basic"
                  label="삭제 API 함수명"
                  fullWidth
                  size="small"
                  disabled={deleteApi.checked ? false : true}
                  value={deleteApi.functionName}
                  onChange={(e) => {
                    handleChangeApi(e, deleteApi, 'deleteApi')
                  }}
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
                  onClick={() => {
                    dispatch(openTableHeader())
                  }}
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
                  onClick={() => {
                    dispatch(openTableHeader())
                  }}
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
                  onClick={() => {
                    dispatch(openSearchForm())
                  }}
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
                  onClick={() => {
                    dispatch(openDetailForm())
                  }}
                  fullWidth
                >
                  <Icon icon="bx:detail" style={{ marginRight: '5px' }}></Icon>
                  상세 폼 편집
                </Button>
              </Grid>

              <Grid item xs={12} md={2}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(openDetailForm())
                  }}
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
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 5, mr: 3 }}
          onClick={handleClickList}
        >
          목록
        </Button>
        <Button variant="contained" color="primary" sx={{ mt: 5 }}>
          저장
        </Button>
      </Box>
    </>
  )
}

export default EditForm
