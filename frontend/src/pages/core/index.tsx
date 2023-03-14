// ** Module
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'
import Content from 'src/components/core/content'

// ** API
import * as api from 'src/apis/core'

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

const Sample = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // NOTE 리스트 조회 API 정의
    dispatch(setListAPI(api['getLoginHistoryList']))

    // NOTE 생성 API 정의
    dispatch(setCreateAPI(null))

    // NOTE 상세 API 정의
    dispatch(setDetailAPI(null))

    // NOTE 삭제 API 정의
    dispatch(setDeleteAPI(null))

    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: '샘플',
        subTitle: '샘플입니다.'
      })
    )

    // NOTE 테이블 헤더 정의
    dispatch(
      setTableHeader([
        '아이디',
        '샘플1',
        '샘플2',
        '샘플3',
        '생성일자',
        '수정일자'
      ])
    )

    // NOTE 추가 폼 설정
    dispatch(setAddForm([]))

    // NOTE 상세 폼 설정
    dispatch(setDetailForm([]))

    // NOTE 검색 폼 설정
    dispatch(setSearchForm([]))

    // NOTE 액션 정의
    dispatch(setActionList([]))

    dispatch(initData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      {/* 검색 컨테이너 */}
      <SearchContainer />

      {/* 리스트 컨테이너 */}
      <ListContainer>
        <Content />
      </ListContainer>
    </>
  )
}

export default Sample
