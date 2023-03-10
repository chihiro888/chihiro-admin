import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import HeaderContainer from 'src/components/core/header-container'
import { AppDispatch } from 'src/store'
import { setPageHeader as setPageHeaderRedux } from 'src/store/apps/crud'
import { useRouter } from 'next/router'
import { getPage } from 'src/apis/builder'
import EditForm from 'src/components/builder/edit-form'
import TableHeader from 'src/components/builder/dialog/table-header'
import SearchForm from 'src/components/builder/dialog/search-form'
import AddForm from 'src/components/builder/dialog/add-form'
import DetailForm from 'src/components/builder/dialog/detail-form'
import ActionList from 'src/components/builder/dialog/action-list'
import { setClearData, setInitData } from 'src/store/apps/page'
import PartSelector from 'src/components/builder/selector/part-selector'
import DefaultPart from 'src/components/builder/part/default-part'
import LinePart from 'src/components/builder/part/line-part'
import SelectPart from 'src/components/builder/part/select-part'
import TextareaPart from 'src/components/builder/part/textarea-part'
import UploadPart from 'src/components/builder/part/upload-part'

const Page = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const id = router.query.id

  // init data
  const initData = async (id) => {
    try {
      const params = {
        id
      }
      const { data: res } = await getPage(params)
      if (res.statusCode === 200) {
        const data = res.data
        dispatch(setInitData(data))
      }
    } catch (err) {
      //
    }
  }

  useEffect(() => {
    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeaderRedux({
        title: '페이지 빌더',
        subTitle: '페이지를 간단하게 빌딩할 수 있습니다.'
      })
    )

    dispatch(setClearData())

    if (id) {
      initData(id)
    }
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      {/* 편집 폼 */}
      <EditForm />

      {/* 테이블 헤더 편집 */}
      <TableHeader />

      {/* 검색 폼 편집 */}
      <SearchForm />

      {/* 추가 폼 편집 */}
      <AddForm />

      {/* 상세 폼 편집 */}
      <DetailForm />

      {/* 액션 편집 */}
      <ActionList />

      {/* 파츠 셀릭터 */}
      <PartSelector />

      {/* 기본 파츠 */}
      <DefaultPart />

      {/* 라인 파츠 */}
      <LinePart />

      {/* 선택 파츠 */}
      <SelectPart />

      {/* 텍스트 에리어 파츠 */}
      <TextareaPart />

      {/* 업로드 파츠 */}
      <UploadPart />
    </>
  )
}

export default Page
