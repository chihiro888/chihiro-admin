// ** Module
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'
import Content from 'src/components/core/content'

// ** API
import * as api from 'src/apis/core'

// ** Next Imports
import { useRouter } from 'next/router'

// ** Redux
import {
  setPageHeader,
  setTableHeader,
  setSearchForm,
  setDetailForm,
  setListAPI,
  setActionList,
  initData,
  setCreateAPI,
  setDetailAPI,
  setDeleteAPI,
  setAddForm
} from 'src/store/apps/crud'
import { AppDispatch, RootState } from 'src/store'
import AddContainer from 'src/components/core/add-container'
import { useSelector } from 'react-redux'

const Core = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const { t } = useTranslation()
  const router = useRouter()

  // ** Redux
  const crud = useSelector((state: RootState) => state.crud)
  const { createAPI, searchForm } = crud

  const initPage = async () => {
    try {
      const url = router.query.url

      const params = {
        url: url
      }
      const { data: res } = await api.getPageByUrl(params)
      if (res.statusCode === 200) {
        // NOTE 리스트 조회 API 정의
        dispatch(setListAPI(api[res.data.listApi] ?? null))

        // NOTE 생성 API 정의
        dispatch(setCreateAPI(api[res.data.createApi] ?? null))

        // NOTE 상세 API 정의
        dispatch(setDetailAPI(api[res.data.detailApi] ?? null))

        // NOTE 삭제 API 정의
        dispatch(setDeleteAPI(api[res.data.deleteApi] ?? null))

        // NOTE 페이지 헤더 정의
        dispatch(
          setPageHeader({
            title: res.data.title ?? '',
            subTitle: res.data.subTitle ?? ''
          })
        )

        // NOTE 테이블 헤더 정의
        dispatch(setTableHeader(res.data.tableHeader ?? []))

        // NOTE 추가 폼 설정
        dispatch(setAddForm(res.data.addForm ?? []))

        // NOTE 상세 폼 설정
        dispatch(setDetailForm(res.data.detailForm ?? []))

        // NOTE 검색 폼 설정
        dispatch(setSearchForm(res.data.searchForm ?? []))

        // NOTE 액션 정의
        res.data.actionList.map((item, index) => {
          item.loadAPI = api[item.loadAPI] ?? null
          item.updateAPI = api[item.updateAPI] ?? null
        })
        dispatch(setActionList(res.data.actionList ?? []))

        dispatch(initData())
      }
    } catch (err: any) {
      toast.error(t(err.response.data.message))
    }
  }

  useEffect(() => {
    initPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      {/* 추가 컨테이너 */}
      {createAPI && <AddContainer />}

      {/* 검색 컨테이너 */}
      {searchForm.length > 0 && <SearchContainer />}

      {/* 리스트 컨테이너 */}
      <ListContainer>
        <Content />
      </ListContainer>
    </>
  )
}

export default Core
