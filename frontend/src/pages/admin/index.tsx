// ** Module
import { useDispatch } from 'react-redux'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import AddContainer from 'src/components/core/add-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'
import Content from 'src/components/admin/content'

// ** API
import {
  getAdminList,
  createAdmin,
  getAdminDetail,
  deleteAdmin,
  updateAdminPassword,
  updateAdminUsername,
  updateAdminLevel
} from 'src/apis/admin'

// ** Redux
import {
  setPageHeader,
  setTableHeader,
  setAddForm,
  setSearchForm,
  setDetailForm,
  setListAPI,
  setCreateAPI,
  setDetailAPI,
  setDeleteAPI,
  setActionList
} from 'src/store/apps/crud'

const Admin = () => {
  // ** Hooks
  const dispatch = useDispatch()

  // NOTE 리스트 조회 API 정의
  dispatch(setListAPI(getAdminList))

  // NOTE 생성 API 정의
  dispatch(setCreateAPI(createAdmin))

  // NOTE 상세 API 정의
  dispatch(setDetailAPI(getAdminDetail))

  // NOTE 삭제 API 정의
  dispatch(setDeleteAPI(deleteAdmin))

  // NOTE 페이지 헤더 정의
  dispatch(
    setPageHeader({
      title: '관리자 관리',
      subTitle: '관리자를 관리할 수 있습니다.'
    })
  )

  // NOTE 테이블 헤더 정의
  dispatch(
    setTableHeader([
      '아이디',
      '계정',
      '비밀번호',
      '사용자명',
      '권한',
      '생성일자',
      '수정일자',
      '액션'
    ])
  )

  // NOTE 추가 폼 설정
  dispatch(
    setAddForm([
      {
        type: 'text',
        label: '계정',
        key: 'account',
        value: ''
      },
      {
        type: 'password',
        label: '비밀번호',
        key: 'password',
        value: ''
      },
      {
        type: 'password',
        label: '비밀번호 확인',
        key: 'confirmPassword',
        value: ''
      },
      {
        type: 'text',
        label: '사용자명',
        key: 'username',
        value: ''
      },
      {
        type: 'select',
        label: '권한',
        key: 'level',
        value: '',
        list: [
          {
            label: '시스템 관리자',
            value: 'SA'
          },
          {
            label: '관리자',
            value: 'A'
          }
        ]
      }
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
        label: '계정',
        key: 'account',
        value: ''
      },
      {
        label: '비밀번호',
        key: 'password',
        value: ''
      },
      {
        label: '사용자명',
        key: 'username',
        value: ''
      },
      {
        label: '시스템관리자',
        key: 'isSystemAdmin',
        value: ''
      },
      {
        label: '관리자',
        key: 'isAdmin',
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
        label: '권한',
        key: 'level',
        value: '',
        list: [
          {
            label: '시스템관리자',
            value: 'SA'
          },
          {
            label: '관리자',
            value: 'A'
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
  dispatch(
    setActionList([
      {
        icon: 'bx:pencil',
        label: '비밀번호 변경',
        content: [
          {
            type: 'password',
            label: '기존 비밀번호',
            key: 'oldPassword',
            value: ''
          },
          {
            type: 'password',
            label: '새로운 비밀번호',
            key: 'newPassword',
            value: ''
          },
          {
            type: 'password',
            label: '새로운 비밀번호 확인',
            key: 'confirmNewPassword',
            value: ''
          }
        ],
        updateAPI: updateAdminPassword
      },
      {
        icon: 'bx:pencil',
        label: '사용자명 변경',
        content: [
          {
            type: 'text',
            label: '사용자명',
            key: 'username',
            value: ''
          }
        ],
        updateAPI: updateAdminUsername
      },
      {
        icon: 'bx:pencil',
        label: '권한 변경',
        content: [
          {
            type: 'select',
            label: '권한',
            key: 'level',
            value: '',
            list: [
              {
                label: '시스템 관리자',
                value: 'SA'
              },
              {
                label: '관리자',
                value: 'A'
              }
            ]
          }
        ],
        updateAPI: updateAdminLevel
      }
    ])
  )

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      {/* 추가 컨테이너 */}
      <AddContainer />

      {/* 검색 컨테이너 */}
      <SearchContainer />

      {/* 리스트 컨테이너 */}
      <ListContainer>
        <Content />
      </ListContainer>
    </>
  )
}

export default Admin
