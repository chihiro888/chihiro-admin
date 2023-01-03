import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Stack
} from '@mui/material'
import { useEffect, useState, Fragment } from 'react'
import PageHeader from 'src/@core/components/page-header'
// import { getList } from 'src/apis/image'
import toast from 'react-hot-toast'
import moment from 'moment'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import DATE from 'src/common/constants/date'
import { getPaginationCount } from 'src/utils'
import CustomLottie from '../components/custom-lottie'

const Admin = () => {
  // ** State
  const [pagination, setPagination] = useState<any>({
    count: 0,
    data: [],
    activePage: 1
  })

  const [open, setOpen] = useState<boolean>(false)
  const [detail, setDetail] = useState<any>()

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

  const handleClickCopy = (value: number) => {
    if (navigator.clipboard) {
      // (IE는 사용 못하고, 크롬은 66버전 이상일때 사용 가능합니다.)
      navigator.clipboard
        .writeText(pagination.data[value]?.url)
        .then(() => {
          toast.success('클립보드에 복사되었습니다.')
        })
        .catch(() => {
          toast.error('클립보드 복사 중 에러가 발생하였습니다.')
        })
    }
  }

  const handleChangePage = async (e: any, value: number) => {
    // const params = {
    //   page: value
    // }
    // const { data: res } = await getList(params)
    // if (res.statusCode === 200) {
    //   const data = res.data
    //   setPagination({
    //     activePage: value,
    //     count: getPaginationCount(data.count),
    //     data: data.data
    //   })
    // }
  }

  const initData = async () => {
    // const params = {
    //   page: 1
    // }
    // const { data: res } = await getList(params)
    // if (res.statusCode === 200) {
    //   const data = res.data
    //   setPagination({
    //     activePage: 1,
    //     count: getPaginationCount(data.count),
    //     data: data.data
    //   })
    // }
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
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {pagination.data.map((value: any, index: number) => (
              <></>
            ))}
          </Grid>

          <Stack alignItems="center" sx={{ mt: 5 }}>
            <Pagination
              count={pagination.count}
              shape="rounded"
              color="primary"
              page={pagination.activePage}
              onChange={handleChangePage}
            />
          </Stack>
        </>
      )}
    </>
  )
}

export default Admin
