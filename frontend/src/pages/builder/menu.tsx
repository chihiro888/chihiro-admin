import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import HeaderContainer from 'src/components/core/header-container'
import { AppDispatch } from 'src/store'
import { setPageHeader } from 'src/store/apps/crud'

const Page = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: '메뉴 빌더',
        subTitle: '메뉴를 간단하게 빌딩할 수 있습니다.'
      })
    )
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />
    </>
  )
}

export default Page
