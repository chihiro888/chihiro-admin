// ** React Imports
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'
import AddForm from 'src/components/menu/dialog/add-form'
import HeaderContainer from 'src/components/core/header-container'
import { setPageHeader } from 'src/store/apps/crud'
import MenuContainer from 'src/components/builder/menu/menu-container'
import MenuPart from 'src/components/menu/part/menu-part'
import SectionTitlePart from 'src/components/menu/part/section-title-part'

const PageMenu = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: '메뉴 빌더',
        subTitle: '관리자 페이지의 메뉴를 간단하게 빌딩할 수 있습니다.'
      })
    )
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      {/* 메뉴 추가 폼 */}
      <AddForm />

      {/* 섹션 타이틀 파트 */}
      <SectionTitlePart />

      {/* 메뉴 파트 */}
      <MenuPart />

      {/* 메뉴 컨테이너 */}
      <MenuContainer />
    </>
  )
}

export default PageMenu
