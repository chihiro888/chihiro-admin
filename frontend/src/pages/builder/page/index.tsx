// ** Module
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'
import Content from 'src/components/builder/page/content'

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
  setAddForm
} from 'src/store/apps/crud'
import { AppDispatch } from 'src/store'
import { getPageList } from 'src/apis/builder'
import { Stack } from '@mui/system'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { nin } from '@ucast/js'

const Page = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  useEffect(() => {
    // NOTE 리스트 조회 API 정의
    dispatch(setListAPI(getPageList))

    // NOTE 생성 API 정의
    dispatch(setCreateAPI(null))

    // NOTE 상세 API 정의
    dispatch(setDetailAPI(null))

    // NOTE 삭제 API 정의
    dispatch(setDeleteAPI(null))

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

      {/* 리스트 컨테이너 */}
      <ListContainer>
        <Content />
      </ListContainer>
    </>
  )
}

export default Page
