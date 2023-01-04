import { useEffect } from 'react'
import { getAdminList } from 'src/apis/admin'
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

const ListContainer = ({ tableHeader, content, pagination, setPagination }) => {
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
                    {content}
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
