import { useEffect } from 'react'
import { getPaginationCount, getParamsFromForm } from 'src/utils'
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
import { setIsLoad, setPagination } from 'src/store/apps/crud'
import { RootState } from 'src/store'
import CustomLottie from '../custom/custom-lottie'
import * as load from '../../lottie/load.json'
import { Box } from '@mui/material'

const ListContainer = ({ children }) => {
  // ** Hooks
  const dispatch = useDispatch()
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination
  const tableHeader = crud.tableHeader
  const searchForm = crud.searchForm
  const listAPI = crud.listAPI
  const isLoad = crud.isLoad

  // ** Handler
  const handleChangePage = async (e: any, value: number) => {
    const params = getParamsFromForm(searchForm)
    params['page'] = value
    dispatch(setIsLoad(true))
    const { data: res } = await listAPI(params)
    if (res.statusCode === 200) {
      const data = res.data
      dispatch(
        setPagination({
          activePage: value,
          count: getPaginationCount(data.count, params['limit']),
          data: data.data,
          info: data.info
        })
      )
      dispatch(setIsLoad(false))
    }
  }

  return (
    <>
      {isLoad ? (
        <>
          <Box sx={{ mt: 5 }}>
            <CustomLottie
              data={load}
              width={200}
              height={200}
              text={'데이터를 불러오는 중입니다. 잠시만 기다려주십시오.'}
            />
          </Box>
        </>
      ) : (
        <>
          {pagination?.data.length === 0 ? (
            <>
              <CustomLottie text={'데이터가 존재하지 않습니다.'} />
            </>
          ) : (
            <>
              <Stack sx={{ mt: 5 }}>
                <Card>
                  <CardContent
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '15px',
                      paddingRight: '15px',
                      paddingBottom: '10px !important'
                    }}
                  >
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
      )}
    </>
  )
}

export default ListContainer
