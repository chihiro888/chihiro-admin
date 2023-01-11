// ** Module
import { useDispatch } from 'react-redux'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'
import Content from 'src/components/admin/history/content'

// ** API
import { getLoginHistoryList, getLoginHistoryDetail, getAdminDetail } from 'src/apis/admin'

// ** Redux
import {
  setPageHeader,
  setTableHeader,
  setSearchForm,
  setDetailForm,
  setListAPI,
  setDetailAPI,
  setActionList
} from 'src/store/apps/crud'
import { useEffect } from 'react'

const AdminHistory = () => {
  // ** Hooks
  const dispatch = useDispatch()

  useEffect(() => {
    // NOTE 리스트 조회 API 정의
    dispatch(setListAPI(getLoginHistoryList))

    // NOTE 상세 API 정의
    dispatch(setDetailAPI(getLoginHistoryDetail))

    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: '로그인 이력',
        subTitle: '로그인 이력을 확인할 수 있습니다.'
      })
    )

    // NOTE 테이블 헤더 정의
    dispatch(
      setTableHeader([
        '아이디',
        '사용자아이디',
        '사용자계정',
        '사용자명',
        '타입',
        '생성일자',
        '수정일자',
        '액션'
      ])
    )

    // NOTE 상세 폼 설정
    dispatch(
      setDetailForm([
        {
          label: '아이디',
          key: 'id',
          value: ''
        },
        {
          label: '사용자 아이디',
          key: 'userId',
          value: ''
        },
        {
          label: '타입',
          key: 'type',
          value: ''
        },
        {
          label: '생성일자',
          key: 'createdAt',
          value: ''
        },
        {
          label: '수정일자',
          key: 'updatedAt',
          value: ''
        },
        ,
        {
          label: '삭제일자',
          key: 'deletedAt',
          value: ''
        }
      ])
    )

    // NOTE 검색 폼 설정
    dispatch(
      setSearchForm([
        {
          type: 'text',
          label: '계정',
          key: 'account',
          value: ''
        },
        {
          type: 'select',
          label: '타입',
          key: 'type',
          value: '',
          list: [
            {
              label: '로그인',
              value: 1
            },
            {
              label: '로그아웃',
              value: 0
            }
          ]
        },
        {
          type: 'date',
          label: '생성일자',
          key: 'createdAt',
          value: ''
        }
      ])
    )

    // NOTE 액션 정의
    dispatch(setActionList([]))
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

export default AdminHistory
