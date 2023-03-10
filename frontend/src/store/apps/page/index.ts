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
  partType: 'add', // add, search, detail
  partSubType: '', // text, select, date, number, textarea, password, upload, editor, line

  // part dialog
  openDefaultPart: false,
  openLinePart: false,
  openSelectPart: false,
  openUploadPart: false,
  openTextareaPart: false,

  // part input
  inputLabel: '',
  inputKey: '',
  inputUseChip: false,
  inputSx: '{}',
  inputRows: 1,
  inputAllowFileExt: ['png', 'jpg', 'jpeg', 'gif'],
  inputMaxFileCount: 1,
  inputMaxFileSizeBytes: 10 * 1024 * 1024,
  inputSelectList: [],

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
    hOpenTableHeader(state) {
      state.openTableHeader = true
    },
    hCloseTableHeader(state) {
      state.openTableHeader = false
    },

    // 검색 폼 모달
    hOpenSearchForm(state) {
      state.openSearchForm = true
      state.partType = 'search'
    },
    hCloseSearchForm(state) {
      state.openSearchForm = false
    },

    // 추가 폼 모달
    hOpenAddForm(state) {
      state.openAddForm = true
      state.partType = 'add'
    },
    hCloseAddForm(state) {
      state.openAddForm = false
    },

    // 상세 폼 모달
    hOpenDetailForm(state) {
      state.openDetailForm = true
      state.partType = 'detail'
    },
    hCloseDetailForm(state) {
      state.openDetailForm = false
    },

    // 액션 리스트 모달
    hOpenActionList(state) {
      state.openActionList = true
    },
    hCloseActionList(state) {
      state.openActionList = false
    },

    // 파츠 셀렉터 모달
    hOpenPartSelector(state) {
      state.openPartSelector = true
    },
    hClosePartSelector(state) {
      state.openPartSelector = false
    },

    // 기본 파츠 모달
    hOpenDefaultPart(state) {
      state.openDefaultPart = true
    },
    hCloseDefaultPart(state) {
      state.openDefaultPart = false
    },

    // 라인 파츠 모달
    hOpenLinePart(state) {
      state.openLinePart = true
    },
    hCloseLinePart(state) {
      state.openLinePart = false
    },

    // 선택 파츠 모달
    hOpenSelectPart(state) {
      state.openSelectPart = true
    },
    hCloseSelectPart(state) {
      state.openSelectPart = false
    },

    // 업로드 파츠 모달
    hOpenUploadPart(state) {
      state.openUploadPart = true
    },
    hCloseUploadPart(state) {
      state.openUploadPart = false
    },

    // 텍스트 에리어 파츠 모달
    hOpenTextareaPart(state) {
      state.openTextareaPart = true
    },
    hCloseTextareaPart(state) {
      state.openTextareaPart = false
    },

    // 공통 수정
    updateState(state, action) {
      state[action.payload.key] = action.payload.value
    },

    // 입력 초기화
    setClearInput(state) {
      state.inputLabel = ''
      state.inputKey = ''
      state.inputUseChip = false
      state.inputSx = '{}'
      state.inputRows = 1
      state.inputAllowFileExt = ['png', 'jpg', 'jpeg', 'gif']
      state.inputMaxFileCount = 1
      state.inputMaxFileSizeBytes = 10 * 1024 * 1024
      state.inputSelectList = []
    },

    // 데이터 초기화
    setClearData(state) {
      state.url = ''
      state.pageHeader = {
        title: '',
        subTitle: ''
      }
      state.listApi = {
        checked: true,
        functionName: ''
      }
      state.createApi = {
        checked: false,
        functionName: ''
      }
      state.detailApi = {
        checked: false,
        functionName: ''
      }
      state.deleteApi = {
        checked: false,
        functionName: ''
      }
      state.tableHeader = []
      state.addForm = []
      state.detailForm = []
      state.searchForm = []
      state.actionList = []
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
  hOpenTableHeader,
  hCloseTableHeader,
  hOpenSearchForm,
  hCloseSearchForm,
  hOpenAddForm,
  hCloseAddForm,
  hOpenDetailForm,
  hCloseDetailForm,
  hOpenActionList,
  hCloseActionList,
  hOpenPartSelector,
  hClosePartSelector,
  hOpenDefaultPart,
  hCloseDefaultPart,
  hOpenLinePart,
  hCloseLinePart,
  hOpenSelectPart,
  hCloseSelectPart,
  hOpenUploadPart,
  hCloseUploadPart,
  hOpenTextareaPart,
  hCloseTextareaPart,
  updateState,
  setClearInput,
  setClearData,
  setInitData
} = appPageSlice.actions

export default appPageSlice.reducer
