import { useState } from 'react'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import AddContainer from 'src/components/core/add-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'
import Content from 'src/components/admin/content'

// ** API
import { getAdminList as listAPI } from 'src/apis/admin'
import { getAdminList as detailAPI } from 'src/apis/admin'
import { getAdminList as createAPI } from 'src/apis/admin'
import { getAdminList as updateAPI } from 'src/apis/admin'
import { getAdminList as deleteAPI } from 'src/apis/admin'

const Admin = () => {
  // NOTE 헤더 설정
  const header = {
    title: '관리자 관리',
    subTitle: '관리자를 관리할 수 있습니다.'
  }

  // NOTE 추가 폼 설정
  const [addForm, setAddForm] = useState([
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
      label: '시스템관리자',
      key: 'isSystemAdmin',
      value: '',
      list: [
        {
          label: '활성화',
          value: 1
        },
        {
          label: '비활성화',
          value: 0
        }
      ]
    },
    {
      type: 'select',
      label: '관리자',
      key: 'isAdmin',
      value: '',
      list: [
        {
          label: '활성화',
          value: 1
        },
        {
          label: '비활성화',
          value: 0
        }
      ]
    }
  ])

  // NOTE 상세 폼 설정
  const [detailForm, setDetailForm] = useState([
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

  // NOTE 검색 폼 설정
  const [searchForm, setSearchForm] = useState([
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

  // NOTE 테이블 헤더 정의
  const tableHeader = [
    '아이디',
    '계정',
    '비밀번호',
    '사용자명',
    '권한',
    '생성일자',
    '수정일자',
    '액션'
  ]

  // NOTE 페이지네이션 정의
  const [pagination, setPagination] = useState<any>({
    count: 0,
    data: [],
    activePage: 1
  })

  // NOTE 액션 정의
  const action = [
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
          key: 'newConfirmPassword',
          value: ''
        }
      ],
      load: () => detailAPI([]),
      update: () => updateAPI([])
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
      load: () => detailAPI([]),
      update: () => updateAPI([])
    },
    {
      icon: 'bx:pencil',
      label: '권한 변경',
      content: [
        {
          type: 'select',
          label: '시스템관리자',
          key: 'isSystemAdmin',
          value: '',
          list: [
            {
              label: '활성화',
              value: 1
            },
            {
              label: '비활성화',
              value: 0
            }
          ]
        },
        {
          type: 'select',
          label: '관리자',
          key: 'isAdmin',
          value: '',
          list: [
            {
              label: '활성화',
              value: 1
            },
            {
              label: '비활성화',
              value: 0
            }
          ]
        }
      ],
      load: () => detailAPI([]),
      update: (s) => alert(s)
    }
  ]

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer header={header} />

      {/* 추가 컨테이너 */}
      <AddContainer
        addForm={addForm}
        setAddForm={setAddForm}
        createAPI={createAPI}
      />

      {/* 검색 컨테이너 */}
      <SearchContainer
        searchForm={searchForm}
        setSearchForm={setSearchForm}
        setPagination={setPagination}
        listAPI={listAPI}
      />

      {/* 리스트 컨테이너 */}
      <ListContainer
        tableHeader={tableHeader}
        pagination={pagination}
        setPagination={setPagination}
        listAPI={listAPI}
      >
        <Content
          pagination={pagination}
          detailForm={detailForm}
          detailAPI={detailAPI}
          deleteAPI={deleteAPI}
          action={action}
        />
      </ListContainer>
    </>
  )
}

export default Admin
