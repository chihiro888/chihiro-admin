import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Snackbar,
  Stack,
  TableContainer
} from '@mui/material'
import Paper from '@mui/material/Paper'
import { useEffect, useState, Fragment } from 'react'
import PageHeader from 'src/@core/components/page-header'
import toast from 'react-hot-toast'
import moment from 'moment'
import Chip from '@mui/material/Chip'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import DATE from 'src/common/constants/date'
import { getPaginationCount } from 'src/utils'
import CustomLottie from '../components/custom-lottie'
import { getAdminList } from 'src/apis/admin'

const Admin = () => {
  // ** State
  const [pagination, setPagination] = useState<any>({
    count: 0,
    data: [],
    activePage: 1
  })

  const [open, setOpen] = useState<boolean>(false)
  const [detail, setDetail] = useState<any>()

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
