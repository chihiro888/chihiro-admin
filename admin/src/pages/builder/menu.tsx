// ** React Imports
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'
import HeaderContainer from 'src/components/core/header-container'
import { setPageHeader, setSearchForm } from 'src/store/apps/crud'
import MenuContainer from 'src/components/builder/menu/menu-container'

const PageMenu = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: '메뉴 빌더',
        subTitle:
          '관리자 페이지의 메뉴를 Drag & Drop 으로 간단하게 빌딩할 수 있습니다.'
      })
    )

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
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      {/* 메뉴 컨테이너 */}
      <MenuContainer />
    </>
  )
}

export default PageMenu
