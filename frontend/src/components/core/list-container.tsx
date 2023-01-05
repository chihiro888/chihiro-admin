import { useEffect } from 'react'
import { getPaginationCount } from 'src/utils'
import CustomLottie from 'src/components/custom-lottie'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Pagination from '@mui/material/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { setPagination } from 'src/store/apps/crud'
import { RootState } from 'src/store'

const ListContainer = ({ children }) => {
  // ** Hooks
  const dispatch = useDispatch()
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination
  const tableHeader = crud.tableHeader
  const listAPI = crud.listAPI

  // ** Handler
  const handleChangePage = async (e: any, value: number) => {
    const params = {
      // TODO 검색 폼 데이터
      page: value
    }
    const { data: res } = await listAPI(params)
    if (res.statusCode === 200) {
      const data = res.data
      dispatch(
        setPagination({
          activePage: value,
          count: getPaginationCount(data.count),
          data: data.data
        })
      )
    }
  }

  const initData = async () => {
    const params = {
      page: 1
    }
    const { data: res } = await listAPI(params)
    if (res.statusCode === 200) {
      const data = res.data
      dispatch(
        setPagination({
          activePage: 1,
          count: getPaginationCount(data.count),
          data: data.data
        })
      )
    }
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      {pagination?.data.length === 0 ? (
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
                        {tableHeader.map((item, idx) => {
                          return (
                            <>
                              <TableCell key={idx}>{item}</TableCell>
                            </>
                          )
                        })}
                      </TableRow>
                    </TableHead>
                    {children}
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Stack>

          <Stack alignItems="center" sx={{ mt: 5 }}>
            <Pagination
              count={pagination?.count}
              shape="rounded"
              color="primary"
              page={pagination?.activePage}
              onChange={handleChangePage}
            />
          </Stack>
        </>
      )}
    </>
  )
}

export default ListContainer
