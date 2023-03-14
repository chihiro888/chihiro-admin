// ** Module
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import SearchContainer from 'src/components/core/search-container'

// ** API

// ** Redux
import {
  setPageHeader,
  setTableHeader,
  setSearchForm,
  setDetailForm,
  setListAPI,
  setActionList,
  initData,
  setCreateAPI,
  setDetailAPI,
  setDeleteAPI,
  setAddForm,
  setPagination
} from 'src/store/apps/crud'
import { AppDispatch, RootState } from 'src/store'
import { deletePage, getPageList } from 'src/apis/builder'
import { Stack } from '@mui/system'
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Pagination,
  Typography
} from '@mui/material'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { getPaginationCount, getParamsFromForm } from 'src/utils'
import CustomChip from 'src/components/custom-chip'
import ModalCodeViewerContainer from 'src/components/core/modal-code-viewer-container'
import moment from 'moment'
import DATE from 'src/common/constants/date'
import ActionContainer from 'src/components/core/action-container'

const Page = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  // ** Hooks
  const crud = useSelector((state: RootState) => state.crud)
  const pagination = crud.pagination
  const tableHeader = crud.tableHeader
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

  useEffect(() => {
    // NOTE 리스트 조회 API 정의
    dispatch(setListAPI(getPageList))

    // NOTE 생성 API 정의
    dispatch(setCreateAPI(null))

    // NOTE 상세 API 정의
    dispatch(setDetailAPI(null))

    // NOTE 삭제 API 정의
    dispatch(setDeleteAPI(deletePage))

    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: '페이지 빌더',
        subTitle: '페이지를 간단하게 빌딩할 수 있습니다.'
      })
    )

    // NOTE 테이블 헤더 정의
    dispatch(
      setTableHeader([
        '아이디',
        '주소',
        '제목',
        '설명',
        '리스트 API 사용유무',
        '리스트 API 함수명',
        '생성 API 사용유무',
        '생성 API 함수명',
        '상세 API 사용유무',
        '상세 API 함수명',
        '삭제 API 사용유무',
        '삭제 API 함수명',
        '테이블헤더',
        '추가 폼',
        '상세 폼',
        '검색 폼',
        '액션리스트',
        '생성일시',
        '수정일시',
        '액션'
      ])
    )

    // NOTE 추가 폼 설정
    dispatch(setAddForm([]))

    // NOTE 상세 폼 설정
    dispatch(setDetailForm([]))

    // NOTE 검색 폼 설정
    dispatch(
      setSearchForm([
        {
          type: 'text',
          label: '주소',
          key: 'url',
          value: ''
        }
      ])
    )

    // NOTE 액션 정의
    dispatch(
      setActionList([
        {
          type: 'redirect',
          icon: 'bx:pencil',
          label: '페이지 수정',
          url: '/builder/page/edit'
        }
      ])
    )

    dispatch(initData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      {/* 추가 컨태이너 커스텀 */}
      <Stack sx={{ mt: 5 }}>
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="contained"
            onClick={() => {
              router.push('/builder/page/edit')
            }}
          >
            추가
          </Button>
        </div>
      </Stack>

      {/* 검색 컨테이너 */}
      <SearchContainer />

      {/* 리스트 */}
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          {pagination.data.map((row: any, idx: number) => {
            return (
              <Grid item xs={12} md={6} lg={6} xl={4} key={idx}>
                <Card>
                  <CardContent>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <CustomChip label={row.url} color="purple" />
                      </Grid>
                      <Grid item>
                        <ActionContainer
                          id={row.id}
                          detailAction={false}
                          deleteAction={true}
                        />
                      </Grid>
                    </Grid>
                    <Typography variant="subtitle1" sx={{ mt: 4 }}>
                      {row.title}
                    </Typography>
                    <Typography variant="subtitle2">{row.subTitle}</Typography>
                    <Typography variant="body1" sx={{ mt: 4, mb: 2 }}>
                      API
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box
                          style={{
                            backgroundColor: '#f5f5f7b3',
                            borderRadius: '12px',
                            padding: '12px'
                          }}
                        >
                          <Typography variant="body2">listAPI</Typography>
                          <Typography>
                            {row.listApi ? row.listApi : '-'}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          style={{
                            backgroundColor: '#f5f5f7b3',
                            borderRadius: '12px',
                            padding: '12px'
                          }}
                        >
                          <Typography variant="body2">createAPI</Typography>
                          <Typography>
                            {row.createApi ? row.createApi : '-'}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid item xs={6}>
                        <Box
                          style={{
                            backgroundColor: '#f5f5f7b3',
                            borderRadius: '12px',
                            padding: '12px'
                          }}
                        >
                          <Typography variant="body2">detailAPI</Typography>
                          <Typography>
                            {row.detailApi ? row.detailApi : '-'}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          style={{
                            backgroundColor: '#f5f5f7b3',
                            borderRadius: '12px',
                            padding: '12px'
                          }}
                        >
                          <Typography variant="body2">deleteAPI</Typography>
                          <Typography>
                            {row.deleteApi ? row.deleteApi : '-'}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box sx={{ mt: 3 }}>
                      <ModalCodeViewerContainer
                        title="#테이블헤더"
                        content={row.tableHeader}
                        pretty
                      />
                      <ModalCodeViewerContainer
                        title="#추가폼"
                        content={row.addForm}
                        pretty
                      />
                      <ModalCodeViewerContainer
                        title="#상세폼"
                        content={row.detailForm}
                        pretty
                      />
                      <ModalCodeViewerContainer
                        title="#검색폼"
                        content={row.searchForm}
                        pretty
                      />
                      <ModalCodeViewerContainer
                        title="#액션리스트"
                        content={row.actionList}
                        pretty
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>

      {/* 페이지네이션 */}
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
  )
}

export default Page
