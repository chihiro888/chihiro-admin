import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Stack
} from '@mui/material'
import { useEffect, useState, Fragment } from 'react'
import PageHeader from 'src/@core/components/page-header'
import { getImageList } from 'src/apis/image'
import toast from 'react-hot-toast'
import moment from 'moment'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import DialogContent from '@mui/material/DialogContent'

// ** Icon Imports
import DATE from 'src/common/constants/date'
import { getPaginationCount } from 'src/utils'
import CustomLottie from 'src/components/custom/custom-lottie'
import * as cat from 'src/lottie/cat.json'
import CustomDialogTitle from 'src/components/custom/custom-dialog-title'
import CustomChip from 'src/components/custom/custom-chip'

const List = () => {
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
    const params = {
      page: value
    }
    const { data: res } = await getImageList(params)
    if (res.statusCode === 200) {
      const data = res.data
      setPagination({
        activePage: value,
        count: getPaginationCount(data.count, 12),
        data: data.data
      })
    }
  }

  const initData = async () => {
    const params = {
      page: 1
    }
    const { data: res } = await getImageList(params)
    if (res.statusCode === 200) {
      const data = res.data
      setPagination({
        activePage: 1,
        count: getPaginationCount(data.count, 12),
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
        title={<Typography variant="h5">이미지 리스트</Typography>}
        subtitle={
          <Typography variant="body2">
            등록된 이미지를 확인할 수 있습니다.
          </Typography>
        }
      />

      {pagination.data.length === 0 ? (
        <>
          <CustomLottie text={'데이터가 존재하지 않습니다.'} data={cat} />
        </>
      ) : (
        <>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {pagination.data.map((value: any, index: number) => (
              <Grid item key={index} {...{ xs: 6, sm: 4, md: 3, lg: 2 }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={value.url}
                    alt={value.note}
                    onClick={() => handleClickOpen(value.id)}
                  />
                  <CardContent>
                    <Box sx={{ mb: 5 }}>
                      <Typography variant="body2">파일명</Typography>
                      <Typography>{value.rawName}</Typography>
                      <Typography variant="body2" sx={{ mt: 2 }}>
                        파일크기
                      </Typography>
                      <Typography>{value.hSize}</Typography>
                    </Box>
                    <Button
                      size="small"
                      onClick={() => handleClickCopy(index)}
                      fullWidth
                      variant="outlined"
                    >
                      이미지 주소 복사
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
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

      <Fragment>
        <Dialog open={open} onClose={handleClose}>
          <CustomDialogTitle title="이미지 상세 정보" onClose={handleClose} />
          <DialogContent>
            <Typography variant="body2">아이디</Typography>
            <Typography variant="body1">{detail?.id}</Typography>

            <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
              주소
            </Typography>
            <CustomChip label={detail?.url} color="purple" />

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
                  매핑된 테이블 이름
                </Typography>
                <CustomChip
                  label={detail?.tableName ? detail?.tableName : '-'}
                  color="orange"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
                  매핑된 테이블 ID
                </Typography>
                <CustomChip
                  label={detail?.tablePk ? detail?.tablePk : '-'}
                  color="orange"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
                  타입
                </Typography>
                <CustomChip
                  label={detail?.type ? detail?.type : '-'}
                  color="orange"
                />
              </Grid>
            </Grid>

            <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
              메모
            </Typography>
            <CustomChip label={detail?.note ? detail?.note : '-'} color="red" />

            <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
              파일명
            </Typography>
            <CustomChip label={detail?.rawName} color="blue" />

            <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
              변환된 파일명
            </Typography>
            <CustomChip label={detail?.encName} color="blue" />

            <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
              확장자
            </Typography>
            <CustomChip label={detail?.extension} color="blue" />

            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
                  사이즈
                </Typography>
                <CustomChip label={detail?.size} color="green" />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ mt: 5, mb: 3 }}>
                  사이즈 (단위)
                </Typography>
                <CustomChip label={detail?.hSize} color="green" />
              </Grid>
            </Grid>

            <Typography variant="body2" sx={{ mt: 5 }}>
              절대경로
            </Typography>
            <Typography variant="body1">{detail?.absPath}</Typography>

            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">생성일자</Typography>
                <Typography variant="body1">
                  {detail?.createdAt
                    ? moment(detail?.createdAt).format(DATE.DATETIME)
                    : '-'}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body2">수정일자</Typography>
                <Typography variant="body1">
                  {detail?.updatedAt
                    ? moment(detail?.updatedAt).format(DATE.DATETIME)
                    : '-'}
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Fragment>
    </>
  )
}

export default List
