import { getPaginationCount, getParamsFromForm } from 'src/utils'
import CustomLottie from 'src/components/custom/custom-lottie'
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
import * as cat from 'src/lottie/cat.json'

const ListContainer = ({ children }) => {
  // ** Hooks
  const dispatch = useDispatch()
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination
  const tableSetting = crud.tableSetting
  const searchForm = crud.searchForm
  const listAPI = crud.listAPI

  // ** Handler
  const handleChangePage = async (e: any, value: number) => {
    const params = getParamsFromForm(searchForm)
    params['page'] = value
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

  return (
    <>
      {pagination?.data.length === 0 ? (
        <>
          <CustomLottie text={'데이터가 존재하지 않습니다.'} data={cat} />
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
                        {tableSetting.map((item, idx) => {
                          return (
                            <>
                              <TableCell key={idx}>{item.header}</TableCell>
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
