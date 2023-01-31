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
import { getList } from 'src/apis/image'
import toast from 'react-hot-toast'
import moment from 'moment'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import CustomCloseButton from 'src/components/custom-close-button'
import CustomChip from 'src/@core/components/mui/chip'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import DATE from 'src/common/constants/date'
import { getPaginationCount } from 'src/utils'
import CustomLottie from 'src/components/custom-lottie'

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
    const { data: res } = await getList(params)
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
    const { data: res } = await getList(params)
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
        title={<Typography variant="h5">이미지 리스트</Typography>}
        subtitle={
          <Typography variant="body2">
            등록된 이미지를 확인할 수 있습니다.
          </Typography>
        }
      />

      {pagination.data.length === 0 ? (
        <>
          <CustomLottie text={'이미지가 존재하지 않습니다.'} />
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
                      <Stack>
                        <CustomChip
                          rounded
                          label={
                            value?.tableName
                              ? `table : ${value?.tableName}`
                              : 'table : -'
                          }
                          skin="light"
                          color="primary"
                        />
                      </Stack>
                      <Stack>
                        <CustomChip
                          rounded
                          label={
                            value?.tablePk ? `PK : ${value?.tablePk}` : 'PK : -'
                          }
                          skin="light"
                          color="success"
                        />
                      </Stack>
                      <Stack>
                        <CustomChip
                          rounded
                          label={
                            value?.type ? `type : ${value?.type}` : 'type : -'
                          }
                          skin="light"
                          color="secondary"
                        />
                      </Stack>
                    </Box>
                    <Button
                      size="small"
                      onClick={() => handleClickCopy(index)}
                      fullWidth
                      variant="contained"
                    >
                      링크 복사
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          sx={{ '& .MuiPaper-root': { overflow: 'visible' } }}
        >
          <DialogTitle
            id="customized-dialog-title"
            sx={{ position: 'relative' }}
          >
            <Typography variant="h6" component="span">
              이미지 상세 정보
            </Typography>
            <CustomCloseButton
              size="small"
              aria-label="close"
              onClick={handleClose}
            >
              <Icon icon="bx:x" />
            </CustomCloseButton>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2">아이디</Typography>
            <Typography variant="body1">{detail?.id}</Typography>

            <Typography variant="body2">매핑된 테이블 이름</Typography>
            <Typography variant="body1">
              {detail?.tableName ? detail?.tableName : '-'}
            </Typography>

            <Typography variant="body2">매핑된 테이블 ID</Typography>
            <Typography variant="body1">
              {detail?.tablePk ? detail?.tablePk : '-'}
            </Typography>

            <Typography variant="body2">타입</Typography>
            <Typography variant="body1">
              {detail?.type ? detail?.type : '-'}
            </Typography>

            <Typography variant="body2" sx={{ mt: 3 }}>
              메모
            </Typography>
            <Typography variant="body1">
              {detail?.note ? detail?.note : '-'}
            </Typography>

            <Typography variant="body2" sx={{ mt: 3 }}>
              파일명
            </Typography>
            <Typography variant="body1">{detail?.rawName}</Typography>

            <Typography variant="body2" sx={{ mt: 3 }}>
              변환된 파일명
            </Typography>
            <Typography variant="body1">{detail?.encName}</Typography>

            <Typography variant="body2" sx={{ mt: 3 }}>
              확장자
            </Typography>
            <Typography variant="body1">{detail?.extension}</Typography>

            <Typography variant="body2" sx={{ mt: 3 }}>
              사이즈
            </Typography>
            <Typography variant="body1">{detail?.size}</Typography>

            <Typography variant="body2" sx={{ mt: 3 }}>
              사이즈 (단위)
            </Typography>
            <Typography variant="body1">{detail?.hSize}</Typography>

            <Typography variant="body2" sx={{ mt: 3 }}>
              절대경로
            </Typography>
            <Typography variant="body1">{detail?.absPath}</Typography>

            <Typography variant="body2" sx={{ mt: 3 }}>
              생성일자
            </Typography>
            <Typography variant="body1">
              {detail?.createdAt
                ? moment(detail?.createdAt).format(DATE.DATETIME)
                : '-'}
            </Typography>

            <Typography variant="body2" sx={{ mt: 3 }}>
              주소
            </Typography>
            <Typography variant="body1">{detail?.url}</Typography>

            {/* <Typography variant='body2' sx={{ mt: 3 }}>
              수정일자
            </Typography>
            <Typography variant='body1'>
              {detail?.updatedAt ? moment(detail?.updatedAt).format(DATE.DATETIME) : '-'}
            </Typography> */}

            {/* <Typography variant='body2' sx={{ mt: 3 }}>
              삭제일자
            </Typography>
            <Typography variant='body1'>
              {detail?.deletedAt ? moment(detail?.deletedAt).format(DATE.DATETIME) : '-'}
            </Typography> */}
          </DialogContent>
        </Dialog>
      </Fragment>
    </>
  )
}

export default List
