import { useState } from 'react'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import AddContainer from 'src/components/core/add-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'

const Admin = () => {
  const header = {
    title: '관리자 관리',
    subTitle: '관리자를 관리할 수 있습니다.'
  }

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

  return (
    <>
      <HeaderContainer header={header} />
      <AddContainer addForm={addForm} setAddForm={setAddForm} />
      <SearchContainer />
      <ListContainer />
    </>
  )
}

export default Admin
