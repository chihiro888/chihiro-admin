import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Snackbar,
  Stack,
  TableContainer,
  useTheme
} from '@mui/material'
import Paper from '@mui/material/Paper'
import { useEffect, useState, Fragment } from 'react'
import PageHeader from 'src/@core/components/page-header'
import toast from 'react-hot-toast'
import moment from 'moment'
import Chip from '@mui/material/Chip'

// ** MUI Imports
import Menu from '@mui/material/Menu'
import CustomInput from 'src/pages/components/PickersCustomInput'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import DATE from 'src/common/constants/date'
import { getPaginationCount } from 'src/utils'
import CustomLottie from '../components/custom-lottie'
import { getAdminList } from 'src/apis/admin'

const RowOptions = ({ id }: { id: number | string }) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size="small" onClick={handleRowOptionsClick}>
        <Icon icon="bx:dots-vertical-rounded" />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
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
          component="a"
          sx={{ '& svg': { mr: 2 } }}
          onClick={handleRowOptionsClose}
        >
          <Icon icon="bx:show" fontSize={20} />
          상세
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon="bx:pencil" fontSize={20} />
          수정
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon="bx:trash-alt" fontSize={20} />
          삭제
        </MenuItem>
      </Menu>
    </>
  )
}

const Admin = () => {
  // ** State
  const [pagination, setPagination] = useState<any>({
    count: 0,
    data: [],
    activePage: 1
  })

  const [open, setOpen] = useState<boolean>(false)
  const [detail, setDetail] = useState<any>()

  const theme = useTheme()
  const { direction } = theme
  const [date, setDate] = useState(new Date())
  const popperPlacement: ReactDatePickerProps['popperPlacement'] =
    direction === 'ltr' ? 'bottom-start' : 'bottom-end'

  const [collapse, setCollapse] = useState<boolean>(false)

  const [state, setState] = useState({
    openSnack: false,
    content: ''
  })
  const { openSnack, content } = state

  const handleClickCollapse = () => {
    setCollapse(!collapse)
  }

  const handleClickSnack = (password: string) => {
    setState({
      openSnack: true,
      content: password
    })
  }

  const handleCloseSnack = () => {
    setState({ ...state, openSnack: false })
  }

  // ** Handler
  const handleClickOpen = (id: number) => {
    const item = pagination.data.filter((item: any) => {
      if (item.id == id) {
        return true
      }
    })
    if (item.length === 1) {
      setDetail(item[0])
      setOpen(true)
    }
  }
  const handleClose = () => setOpen(false)

  const handleChangePage = async (e: any, value: number) => {
    const params = {
      page: value
    }
    const { data: res } = await getAdminList(params)
    if (res.statusCode === 200) {
      const data = res.data
      setPagination({
        activePage: value,
        count: getPaginationCount(data.count),
        data: data.data
      })
    }
  }

  const initData = async () => {
    const params = {
      page: 1
    }
    const { data: res } = await getAdminList(params)
    if (res.statusCode === 200) {
      const data = res.data
      setPagination({
        activePage: 1,
        count: getPaginationCount(data.count),
        data: data.data
      })
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <PageHeader
        title={<Typography variant="h5">관리자 관리</Typography>}
        subtitle={
          <Typography variant="body2">관리자를 관리할 수 있습니다.</Typography>
        }
      />

      <Stack sx={{ mt: 5 }}>
        <div style={{ textAlign: 'right' }}>
          <Button variant="contained">추가</Button>
        </div>
      </Stack>

      <Card sx={{ mt: 5 }} style={{ overflow: 'unset' }}>
        <CardContent style={{ padding: '0px' }}>
          <CardActions className="card-action-dense">
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button onClick={handleClickCollapse}>검색필터</Button>
              <IconButton size="small" onClick={handleClickCollapse}>
                <Icon
                  fontSize="1.875rem"
                  icon={collapse ? 'bx:chevron-up' : 'bx:chevron-down'}
                />
              </IconButton>
            </Box>
          </CardActions>
          <Collapse in={collapse}>
            <Divider sx={{ m: '0 !important' }} />
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={3}>
                  <FormControl style={{ width: '100%' }}>
                    <TextField id="outlined-basic" label="계정" />
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <FormControl style={{ width: '100%' }}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      권한
                    </InputLabel>
                    <Select
                      label="level"
                      defaultValue=""
                      id="demo-simple-select-outlined"
                      labelId="demo-simple-select-outlined-label"
                      style={{ width: '100%' }}
                    >
                      <MenuItem value="">
                        <em>전체</em>
                      </MenuItem>
                      <MenuItem value={10}>시스템관리자</MenuItem>
                      <MenuItem value={20}>관리자</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <FormControl style={{ width: '100%' }}>
                    <DatePickerWrapper>
                      <DatePicker
                        selected={date}
                        id="basic-input"
                        popperPlacement={popperPlacement}
                        onChange={(date: Date) => setDate(date)}
                        customInput={<CustomInput label="생성일자" />}
                        dateFormat="yyyy-MM-dd"
                      />
                    </DatePickerWrapper>
                  </FormControl>
                </Grid>
              </Grid>
              <Stack sx={{ mt: 5 }}>
                <div style={{ textAlign: 'right' }}>
                  <Button variant="outlined" color="secondary" sx={{ mr: 3 }}>
                    초기화
                  </Button>
                  <Button variant="contained">검색</Button>
                </div>
              </Stack>
            </CardContent>
          </Collapse>
        </CardContent>
      </Card>

      {pagination.data.length === 0 ? (
        <>
          <CustomLottie text={'데이터가 존재하지 않습니다.'} />
        </>
      ) : (
        <>
          <Stack sx={{ mt: 5 }}>
            <Card>
              <CardContent>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>아이디</TableCell>
                        <TableCell>계정</TableCell>
                        <TableCell>비밀번호</TableCell>
                        <TableCell>사용자명</TableCell>
                        <TableCell>권한</TableCell>
                        <TableCell>생성일자</TableCell>
                        <TableCell>수정일자</TableCell>
                        <TableCell>액션</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pagination.data.map((row: any, idx: number) => (
                        <TableRow key={idx}>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.account}</TableCell>
                          <TableCell>
                            <Button
                              variant="text"
                              onClick={() => handleClickSnack(row.password)}
                            >
                              비밀번호
                            </Button>
                          </TableCell>
                          <TableCell>{row.username}</TableCell>
                          <TableCell>
                            {Number(row.level) === 1 ? (
                              <>
                                <Chip
                                  label="시스템관리자"
                                  color="primary"
                                  variant="outlined"
                                />
                              </>
                            ) : (
                              <>
                                <Chip
                                  label="관리자"
                                  color="secondary"
                                  variant="outlined"
                                />
                              </>
                            )}
                          </TableCell>
                          <TableCell>
                            {row?.createdAt
                              ? moment(row?.createdAt).format(DATE.DATETIME)
                              : '-'}
                          </TableCell>
                          <TableCell>
                            {row?.updatedAt
                              ? moment(row?.updatedAt).format(DATE.DATETIME)
                              : '-'}
                          </TableCell>
                          <TableCell>
                            <RowOptions />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Stack>

          <Stack alignItems="center" sx={{ mt: 5 }}>
            <Pagination
              count={pagination.count}
              shape="rounded"
              color="primary"
              page={pagination.activePage}
              onChange={handleChangePage}
            />
          </Stack>

          <Snackbar
            open={openSnack}
            onClose={handleCloseSnack}
            message={content}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          />
        </>
      )}
    </>
  )
}

export default Admin
