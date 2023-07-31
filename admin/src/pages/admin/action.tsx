// ** Module
import { useDispatch } from 'react-redux'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'
import Content from 'src/components/admin/action/content'

// ** API
import { getActionList } from 'src/apis/action'

// ** Redux
import {
  setPageHeader,
  setTableHeader,
  setSearchForm,
  setDetailForm,
  setListAPI,
  setDetailAPI,
  setActionList,
  initData
} from 'src/store/apps/crud'
import { useEffect } from 'react'
import { AppDispatch } from 'src/store'
import InfoContainer from 'src/components/core/info-container'

const AdminHistory = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // NOTE 리스트 조회 API 정의
    dispatch(setListAPI(getActionList))

    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: '관리자 액션 이력',
        subTitle: '관리자 액션 이력을 확인할 수 있습니다.'
      })
    )

    // NOTE 테이블 헤더 정의
    dispatch(
      setTableHeader([
        '번호',
        '관리자번호',
        '관리자아이디',
        '관리자명',
        'API명',
        '파라미터',
        '생성일자'
      ])
    )

    // NOTE 상세 폼 설정
    dispatch(setDetailForm([]))

    // NOTE 검색 폼 설정
    dispatch(
      setSearchForm([
        {
          type: 'text',
          label: '관리자번호',
          key: 'adminId',
          value: ''
        },
        {
          type: 'text',
          label: '관리자아이디',
          key: 'adminAccount',
          value: ''
        },
        {
          type: 'text',
          label: '관리자명',
          key: 'adminUsername',
          value: ''
        },
        {
          type: 'text',
          label: 'API명',
          key: 'apiName',
          value: ''
        },
        {
          type: 'date',
          label: '생성일자 (시작)',
          key: 'createdStartAt',
          value: ''
        },
        {
          type: 'date',
          label: '생성일자 (종료)',
          key: 'createdEndAt',
          value: ''
        },
        {
          type: 'number',
          label: '페이지개수',
          key: 'limit',
          value: 10
        }
      ])
    )

    // NOTE 액션 정의
    dispatch(setActionList([]))

    dispatch(initData())
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      {/* 검색 컨테이너 */}
      <SearchContainer />

      {/* 정보 컨테이너 */}
      <InfoContainer />

      {/* 리스트 컨테이너 */}
      <ListContainer>
        <Content />
      </ListContainer>
    </>
  )
}

export default AdminHistory
