import moment from 'moment'
import { useEffect, useState } from 'react'
import { getAdminList } from 'src/apis/admin'
import { getPaginationCount } from 'src/utils'
import DATE from 'src/common/constants/date'
import CustomLottie from 'src/components/custom-lottie'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Pagination from '@mui/material/Pagination'
import Snackbar from '@mui/material/Snackbar'
import ActionContainer from 'src/components/core/action-container'

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

export default ListContainer
