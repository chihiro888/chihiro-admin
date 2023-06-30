// ** Module
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Icon from 'src/@core/components/icon'
import ActionContainer from 'src/components/core/action-container'
import CustomLottie from 'src/components/custom/custom-lottie'
import * as cat from 'src/lottie/cat.json'

// ** Core
import HeaderContainer from 'src/components/core/header-container'

// ** API
import { getQueryList, create, deleteExcel, downloadFile } from 'src/apis/excel'

// ** Redux
import { setPageHeader, initData } from 'src/store/apps/crud'
import { AppDispatch } from 'src/store'
import { Stack } from '@mui/system'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  TextField,
  Card,
  CardContent,
  Grid,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material'
import { useRouter } from 'next/router'

const Page = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  // ** State
  const [dialog, setDialog] = useState<boolean>(false)
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)
  const [menuOpenIndex, setMenuOpenIndex] = useState(-1)
  const [pagination, setPagination] = useState<any>({
    count: 0,
    data: [],
    activePage: 1
  })
  const [title, setTitle] = useState<string>('')
  const [query, setQuery] = useState<string>('')
  const [titleError, setTitleError] = useState('')
  const [queryError, setQueryError] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [dialogType, setDialogType] = useState<number>(0)

  const createSql = async () => {
    if (title === '') {
      setTitleError('제목을 입력하세요')
    }

    if (query === '') {
      setQueryError('SQL를 입력하세요')
    }
    if (title === '' || query === '') return
    if (title.includes(' ') || title.includes('　')) {
      setTitleError('공백 문자는 사용할 수 없습니다.')
      return
    }
    const params = {
      title,
      query
    }
    await create(params)
    await fetchData()
    setDialog(false)
    setTitle('')
    setQuery('')
  }

  const handleRowOptionsClick = (event, index) => {
    setMenuAnchorEl(event.currentTarget)
    setMenuOpenIndex(index)
  }
  const handleRowOptionsClose = () => {
    setMenuAnchorEl(null)
    setMenuOpenIndex(-1)
  }
  const handleClickDelete = async (id) => {
    const params = {
      id
    }
    await deleteExcel(params)
    setMenuAnchorEl(null)
    setMenuOpenIndex(-1)
    await fetchData()
  }
  const handleDownloadExcel = async (id) => {
    const params = {
      id
    }
    await downloadFile(params)
  }

  const fetchData = async () => {
    const params = {
      page: pagination.activePage
    }
    const { data: res2 } = await getQueryList(params)
    if (res2.statusCode === 200) {
      const data = res2.data
      setPagination({
        activePage: pagination.activePage,
        count: getPaginationCount(data.count),
        data: data.data
      })
    }
  }
  const getPaginationCount = (count: number) => {
    return parseInt(String(count / 30)) + 1
  }

  const initPageState = async () => {
    const params = {
      page: 1
    }
    const { data: res } = await getQueryList(params)
    if (res.statusCode === 200) {
      const data = res.data
      setPagination({
        activePage: 1,
        count: getPaginationCount(data.count),
        data: data.data
      })
    }
  }

  const changeTitle = (e) => {
    setTitle(e.target.value)
    if (e.target.value) {
      setTitleError('')
    } else {
      setTitleError('제목을 입력하세요')
      setIsDisabled(true)
    }
    if (e.target.value && query) {
      setIsDisabled(false)
    }
  }

  const changeQuery = (e) => {
    setQuery(e.target.value)
    if (e.target.value) {
      setQueryError('')
    } else {
      setQueryError('SQL를 입력하세요')
      setIsDisabled(true)
    }
    if (e.target.value && title) {
      setIsDisabled(false)
    }
  }

  const reset = () => {
    setIsDisabled(true)
    setTitle('')
    setQuery('')
    setQueryError('')
    setTitleError('')
  }

  const closeDialog = () => {
    setMenuAnchorEl(null)
    setMenuOpenIndex(-1)
    setDialogType(0)
    setDialog(false)
  }

  const createDialog = () => {
    setDialogType(1)
    setDialog(true)
  }

  const readDialog = () => {
    setDialogType(0)
    setDialog(true)
  }

  useEffect(() => {
    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: 'Excel 빌더',
        subTitle: '데이터를 엑셀로 출력하는 버튼을 만들 수 있습니다.'
      })
    )

    initPageState()
    dispatch(initData)
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />
      {/* 추가 컨태이너 커스텀 */}
      <Stack sx={{ mt: 5 }}>
        <div style={{ textAlign: 'right' }}>
          <Button variant="contained" onClick={createDialog}>
            추가
          </Button>
        </div>
      </Stack>
      {pagination.data.length === 0 ? (
        <>
          <CustomLottie text={'데이터가 존재하지 않습니다.'} data={cat} />
        </>
      ) : (
        <>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {pagination.data.map((value: any, index: number) => (
              <Grid item key={index}>
                <Card>
                  <CardContent>
                    <Button
                      disabled={value.stock !== 1}
                      startIcon={<Icon icon="bxs:download" />}
                      variant="contained"
                      onClick={() => handleDownloadExcel(value.id)}
                      style={{ textTransform: 'none' }}
                      sx={{
                        mr: 3
                      }}
                    >
                      {value.title}
                    </Button>
                    <IconButton
                      size="small"
                      onClick={(event) => handleRowOptionsClick(event, index)}
                    >
                      <Icon icon="bx:dots-vertical-rounded" />
                    </IconButton>
                    <Menu
                      keepMounted
                      anchorEl={menuAnchorEl}
                      open={menuOpenIndex === index}
                      onClose={handleRowOptionsClose}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                      PaperProps={{ style: { minWidth: '8rem' } }}
                    >
                      <MenuItem
                        onClick={readDialog}
                        sx={{ '& svg': { mr: 2 } }}
                      >
                        <Icon icon="mdi:sql-query" fontSize={20} />
                        SQL 상세
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClickDelete(value.id)
                        }}
                        sx={{ '& svg': { mr: 2 } }}
                        style={{ color: '#FF9999' }}
                      >
                        <Icon icon="bx:trash-alt" fontSize={20} />
                        삭제
                      </MenuItem>
                    </Menu>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Dialog open={dialog} maxWidth="md" scroll="body" onClose={closeDialog}>
        <DialogContent
          sx={{
            pb: 8,
            px: { xs: 8, sm: 15 },
            pt: { xs: 8, sm: 12.5 },
            position: 'relative'
          }}
        >
          <TextField
            required
            disabled={dialogType === 0}
            label="TITLE"
            type="textarea"
            multiline
            sx={{
              pb: 2,
              px: { xs: 1, sm: 1 },
              pt: { xs: 1, sm: 2.5 }
            }}
            fullWidth
            value={
              dialogType === 1 ? title : pagination.data[menuOpenIndex]?.title
            }
            onChange={(e) => {
              changeTitle(e)
            }}
            error={titleError !== ''}
            helperText={titleError}
          />
          <TextField
            disabled={dialogType === 0}
            required
            label="SQL"
            type="textarea"
            multiline
            sx={{
              pb: 2,
              px: { xs: 1, sm: 1 },
              pt: { xs: 1, sm: 2.5 }
            }}
            fullWidth
            rows={10}
            value={
              dialogType === 1 ? query : pagination.data[menuOpenIndex]?.query
            }
            onChange={(e) => {
              changeQuery(e)
            }}
            error={queryError !== ''}
            helperText={queryError}
          />
          <Box sx={{ textAlign: 'right' }}>
            <Button variant="outlined" onClick={closeDialog}>
              close
            </Button>

            {dialogType === 1 ? (
              <>
                <Button
                  sx={{
                    ml: 2
                  }}
                  variant="outlined"
                  onClick={reset}
                >
                  reset
                </Button>
                <Button
                  disabled={isDisabled}
                  sx={{
                    ml: 2
                  }}
                  variant="contained"
                  onClick={() => {
                    createSql()
                  }}
                >
                  save
                </Button>
              </>
            ) : (
              ''
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Page
