import produce from 'immer'
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
import DialogActions from '@mui/material/DialogActions'
// import CustomCloseButton from 'src/components/custom-close-button'
import DialogContentText from '@mui/material/DialogContentText'
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

const HeaderContainer = ({ header }) => {
  return (
    <>
      <PageHeader
        title={<Typography variant="h5">{header.title}</Typography>}
        subtitle={<Typography variant="body2">{header.subTitle}</Typography>}
      />
    </>
  )
}

const AddConfirmModal = ({
  openConfirmModal,
  handleClickCloseConfirmModal
}) => {
  return (
    <>
      <Dialog
        open={openConfirmModal}
        onClose={handleClickCloseConfirmModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">추가 (확인)</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            데이터를 추가하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickCloseConfirmModal}
          >
            취소
          </Button>
          <Button variant="contained" onClick={() => {}}>
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const AddModal = ({
  openModal,
  handleClickCloseModal,
  addForm,
  setAddForm
}) => {
  const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false)
  const handleClickOpenConfirmModal = () => setOpenConfirmModal(true)
  const handleClickCloseConfirmModal = () => setOpenConfirmModal(false)
  const handleChangeForm = (key: string, value: string) => {
    const nextState = produce(addForm, (draftState) => {
      draftState.map((item) => {
        if (item.key === key) {
          item.value = value
        }
      })
    })
    setAddForm(nextState)
  }

  return (
    <>
      <Dialog
        open={openModal}
        onClose={handleClickCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">추가</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {addForm.map((item, idx) => {
              return (
                <>
                  <Stack key={idx} sx={{ mb: 3 }}>
                    <div>
                      {item.type === 'text' ? (
                        <>
                          <TextField
                            id="outlined-basic"
                            label={item.label}
                            value={item.value}
                            onChange={(e) =>
                              handleChangeForm(item.key, e.target.value)
                            }
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      {item.type === 'password' ? (
                        <>
                          <TextField
                            id="outlined-basic"
                            type="password"
                            label={item.label}
                            value={item.value}
                            onChange={(e) =>
                              handleChangeForm(item.key, e.target.value)
                            }
                          />
                        </>
                      ) : (
                        <></>
                      )}
                      {item.type === 'select' ? (
                        <>
                          <FormControl style={{ width: '100%' }}>
                            <InputLabel id={item.label}>
                              {item.label}
                            </InputLabel>
                            <Select
                              label={item.label}
                              defaultValue=""
                              id={item.label}
                              labelId={item.label}
                              style={{ width: '100%' }}
                              onChange={(e) =>
                                handleChangeForm(item.key, e.target.value)
                              }
                            >
                              {item.list.map((item, idx) => {
                                return (
                                  <MenuItem key={idx} value={item.value}>
                                    {item.label}
                                  </MenuItem>
                                )
                              })}
                            </Select>
                          </FormControl>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Stack>
                </>
              )
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickCloseModal}
          >
            취소
          </Button>
          <Button variant="contained" onClick={handleClickOpenConfirmModal}>
            추가
          </Button>
        </DialogActions>
      </Dialog>

      <AddConfirmModal
        openConfirmModal={openConfirmModal}
        handleClickCloseConfirmModal={handleClickCloseConfirmModal}
      />
    </>
  )
}

const AddContainer = ({ addForm, setAddForm }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const handleClickOpenModal = () => {
    const nextState = produce(addForm, (draftState) => {
      draftState.map((item) => {
        item.value = ''
      })
    })
    setAddForm(nextState)
    setOpenModal(true)
  }
  const handleClickCloseModal = () => setOpenModal(false)

  return (
    <>
      <Stack sx={{ mt: 5 }}>
        <div style={{ textAlign: 'right' }}>
          <Button variant="contained" onClick={handleClickOpenModal}>
            추가
          </Button>
        </div>
      </Stack>

      <AddModal
        openModal={openModal}
        handleClickCloseModal={handleClickCloseModal}
        addForm={addForm}
        setAddForm={setAddForm}
      />
    </>
  )
}

const SearchContainer = () => {
  const theme = useTheme()

  const { direction } = theme

  const [collapse, setCollapse] = useState<boolean>(false)

  const [date, setDate] = useState(new Date())

  const handleClickCollapse = () => {
    setCollapse(!collapse)
  }

  return (
    <>
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
                        popperPlacement={
                          direction === 'ltr' ? 'bottom-start' : 'bottom-end'
                        }
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
    </>
  )
}

const ListContainer = () => {
  const [pagination, setPagination] = useState<any>({
    count: 0,
    data: [],
    activePage: 1
  })

  const [state, setState] = useState({
    openSnack: false,
    content: ''
  })
  const { openSnack, content } = state

  const handleClickSnack = (password: string) => {
    setState({
      openSnack: true,
      content: password
    })
  }

  const handleCloseSnack = () => {
    setState({ ...state, openSnack: false })
  }

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

  return (
    <>
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
                            <ActionContainer id={''} />
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

const ViewModal = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClickOpen = () => setOpen(true)
  const handleCloseClose = () => setOpen(false)

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">저장</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            현재 내용으로 저장하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseClose}
          >
            취소
          </Button>
          <Button variant="contained" onClick={handleCloseClose}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const EditModal = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClickOpen = () => setOpen(true)
  const handleCloseClose = () => setOpen(false)

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">저장</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            현재 내용으로 저장하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseClose}
          >
            취소
          </Button>
          <Button variant="contained" onClick={handleCloseClose}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const EditConfirmModal = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClickOpen = () => setOpen(true)
  const handleCloseClose = () => setOpen(false)

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">저장</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            현재 내용으로 저장하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseClose}
          >
            취소
          </Button>
          <Button variant="contained" onClick={handleCloseClose}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const DeleteModal = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClickOpen = () => setOpen(true)
  const handleCloseClose = () => setOpen(false)

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">저장</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            현재 내용으로 저장하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseClose}
          >
            취소
          </Button>
          <Button variant="contained" onClick={handleCloseClose}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const DeleteConfirmModal = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClickOpen = () => setOpen(true)
  const handleCloseClose = () => setOpen(false)

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">저장</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            현재 내용으로 저장하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseClose}
          >
            취소
          </Button>
          <Button variant="contained" onClick={handleCloseClose}>
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const ActionContainer = ({ id }: { id: number | string }) => {
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

  const [openSave, setOpenSave] = useState<boolean>(false)
  const handleClickSave = () => setOpenSave(true)
  const handleCloseSave = () => setOpenSave(false)

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

  // ANCHOR 설계
  const header = {
    title: '관리자 관리',
    subTitle: '관리자를 관리할 수 있습니다.'
  }

  const [addForm, setAddForm] = useState([
    {
      type: 'text',
      label: '계정',
      key: 'account',
      value: ''
    },
    {
      type: 'password',
      label: '비밀번호',
      key: 'password',
      value: ''
    },
    {
      type: 'text',
      label: '사용자명',
      key: 'username',
      value: ''
    },
    {
      type: 'select',
      label: '시스템관리자',
      key: 'isSystemAdmin',
      value: '',
      list: [
        {
          label: '활성화',
          value: 1
        },
        {
          label: '비활성화',
          value: 0
        }
      ]
    },
    {
      type: 'select',
      label: '관리자',
      key: 'isAdmin',
      value: '',
      list: [
        {
          label: '활성화',
          value: 1
        },
        {
          label: '비활성화',
          value: 0
        }
      ]
    }
  ])

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <HeaderContainer header={header} />
      <AddContainer addForm={addForm} setAddForm={setAddForm} />
      <SearchContainer />
      <ListContainer />
    </>
  )
}

export default Admin
