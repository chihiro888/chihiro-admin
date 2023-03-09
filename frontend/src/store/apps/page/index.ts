// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const init = {
  // dialog
  openTableHeader: false,
  openSearchForm: false,
  openAddForm: false,
  openDetailForm: false,
  openActionList: false,

  // selector
  openPartSelector: false,

  // core
  url: '',
  pageHeader: {
    title: '',
    subTitle: ''
  },
  listApi: {
    checked: true,
    functionName: ''
  },
  createApi: {
    checked: false,
    functionName: ''
  },
  detailApi: {
    checked: false,
    functionName: ''
  },
  deleteApi: {
    checked: false,
    functionName: ''
  },
  tableHeader: [],
  addForm: [],
  detailForm: [],
  searchForm: [],
  actionList: []
}

export const appPageSlice = createSlice({
  name: 'appPage',
  initialState: { ...init },
  reducers: {
    // 테이블 헤더 모달
    openTableHeader(state) {
      state.openTableHeader = true
    },
    closeTableHeader(state) {
      state.openTableHeader = false
    },

    // 검색 폼 모달
    openSearchForm(state) {
      state.openSearchForm = true
    },
    closeSearchForm(state) {
      state.openSearchForm = false
    },

    // 추가 폼 모달
    openAddForm(state) {
      state.openAddForm = true
    },
    closeAddForm(state) {
      state.openAddForm = false
    },

    // 상세 폼 모달
    openDetailForm(state) {
      state.openDetailForm = true
    },
    closeDetailForm(state) {
      state.openDetailForm = false
    },

    // 액션 리스트 모달
    openActionList(state) {
      state.openActionList = true
    },
    closeActionList(state) {
      state.openActionList = false
    },

    // 파츠 셀렉터 모달
    openPartSelector(state) {
      state.openPartSelector = true
    },
    closePartSelector(state) {
      state.openPartSelector = false
    },

    // 공통 수정
    updateState(state, action) {
      state[action.payload.key] = action.payload.value
    },

    // 초기 데이터 주입
    setInitData(state, action) {
      state.url = action.payload.url
      state.pageHeader = {
        title: action.payload.title,
        subTitle: action.payload.subTitle
      }
      state.listApi = {
        checked: action.payload.useListApi,
        functionName: action.payload.listApi
      }
      state.createApi = {
        checked: action.payload.useCreateApi,
        functionName: action.payload.createApi
      }
      state.detailApi = {
        checked: action.payload.useDetailApi,
        functionName: action.payload.detailApi
      }
      state.deleteApi = {
        checked: action.payload.useDeleteApi,
        functionName: action.payload.deleteApi
      }
      state.tableHeader = action.payload.tableHeader
      state.addForm = action.payload.addForm
      state.detailForm = action.payload.detailForm
      state.searchForm = action.payload.searchForm
      state.actionList = action.payload.actionList
    }
  }
})

export const {
  openTableHeader,
  closeTableHeader,
  openSearchForm,
  closeSearchForm,
  openAddForm,
  closeAddForm,
  openDetailForm,
  closeDetailForm,
  openActionList,
  closeActionList,
  openPartSelector,
  closePartSelector,
  updateState,
  setInitData
} = appPageSlice.actions

export default appPageSlice.reducer
