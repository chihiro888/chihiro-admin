import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import HeaderContainer from 'src/components/core/header-container'
import { AppDispatch } from 'src/store'
import { setPageHeader as setPageHeaderRedux } from 'src/store/apps/crud'
import { useRouter } from 'next/router'
import { getPage } from 'src/apis/builder'
import EditForm from 'src/components/builder/edit-form'
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
import ActionController from 'src/components/builder/controller/action-controller'
import ActionForm from 'src/components/builder/dialog/action-form'
import TableSetting from 'src/components/builder/dialog/table-setting'
import TableDefaultPart from 'src/components/builder/part/table-default-part'
import TableImagePart from 'src/components/builder/part/table-image-part'
import TableChipPart from 'src/components/builder/part/table-chip-part'
import TableModalPart from 'src/components/builder/part/table-modal-part'
import TableSnackbarPart from 'src/components/builder/part/table-snackbar-part'
import TableActionPart from 'src/components/builder/part/table-action-part'

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

      {/* 테이블 구성 편집 */}
      <TableSetting />

      {/* 검색 폼 편집 */}
      <SearchForm />

      {/* 추가 폼 편집 */}
      <AddForm />

      {/* 상세 폼 편집 */}
      <DetailForm />

      {/* 액션 편집 */}
      <ActionList />

      {/* 액션 폼 편집 */}
      <ActionForm />

      {/* 액션 편집 */}
      <ActionController />

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

      {/* 테이블 기본 파츠 */}
      <TableDefaultPart />

      {/* 테이블 이미지 파츠 */}
      <TableImagePart />

      {/* 테이블 CHIP 파츠 */}
      <TableChipPart />

      {/* 테이블 모달 파츠 */}
      <TableModalPart />

      {/* 테이블 스낵바 파츠 */}
      <TableSnackbarPart />

      {/* 테이블 액션 파츠 */}
      <TableActionPart />
    </>
  )
}

export default Page
