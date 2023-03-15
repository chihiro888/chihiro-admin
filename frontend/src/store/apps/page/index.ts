// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const init = {
  // dialog
  openTableHeader: false,
  openTableContent: false,
  openSearchForm: false,
  openAddForm: false,
  openDetailForm: false,
  openActionList: false,
  openActionForm: false,

  // selector
  openPartSelector: false,

  // controller
  openActionController: false,

  // part dialog
  openDefaultPart: false,
  openLinePart: false,
  openSelectPart: false,
  openUploadPart: false,
  openTextareaPart: false,

  // part type
  partType: 'add', // add, search, detail
  partSubType: '', // text, select, date, number, textarea, password, upload, editor, line

  // 페이지 아이디
  pageId: 0,

  // part input
  inputOrder: 0,
  inputLabel: '',
  inputKey: '',
  inputUseChip: false,
  inputSx: '{}',
  inputRows: 1,
  inputAllowFileExt: ['png', 'jpg', 'jpeg', 'gif'],
  inputMaxFileCount: 1,
  inputMaxFileSizeBytes: 10 * 1024 * 1024,
  inputSelectList: [],

  // action input
  inputActionOrder: 0,
  inputActionIcon: '',
  inputActionLabel: '',
  inputActionLoadApi: '',
  inputActionUpdateApi: '',

  // mode
  editMode: false,
  deleteMode: false,

  // mode (action)
  editModeAction: false,
  deleteModeAction: false,

  // part mode
  partMode: 'add', // add, edit
  partModeAction: 'add', // add, edit

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
  tableContent: '',
  addForm: [],
  detailForm: [],
  searchForm: [],
  actionList: [],
  actionForm: []
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

    // 테이블 내용 모달
    hOpenTableContent(state) {
      state.openTableContent = true
    },
    hCloseTableContent(state) {
      state.openTableContent = false
    },

    // 검색 폼 모달
    hOpenSearchForm(state) {
      state.openSearchForm = true
      state.partType = 'search'
      state.editMode = false
      state.deleteMode = false
    },
    hCloseSearchForm(state) {
      state.openSearchForm = false
    },

    // 추가 폼 모달
    hOpenAddForm(state) {
      state.openAddForm = true
      state.partType = 'add'
      state.editMode = false
      state.deleteMode = false
    },
    hCloseAddForm(state) {
      state.openAddForm = false
    },

    // 상세 폼 모달
    hOpenDetailForm(state) {
      state.openDetailForm = true
      state.partType = 'detail'
      state.editMode = false
      state.deleteMode = false
    },
    hCloseDetailForm(state) {
      state.openDetailForm = false
    },

    // 액션 폼 모달
    hOpenActionForm(state) {
      state.openActionForm = true
      state.partType = 'action'
      state.editMode = false
      state.deleteMode = false
    },
    hCloseActionForm(state) {
      state.openActionForm = false
    },

    // 액션 리스트 모달
    hOpenActionList(state) {
      state.openActionList = true
      state.editModeAction = false
      state.deleteModeAction = false
    },
    hCloseActionList(state) {
      state.openActionList = false
    },

    // 액션 컨트롤러 모달
    hOpenActionController(state) {
      state.openActionController = true
    },
    hCloseActionController(state) {
      state.openActionController = false
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

    // 액션 입력 초기화
    setClearActionInput(state) {
      state.inputActionIcon = ''
      state.inputActionLabel = ''
      state.inputActionLoadApi = ''
      state.inputActionUpdateApi = ''
      state.actionForm = []
    },

    // 데이터 초기화
    setClearData(state) {
      state.pageId = 0
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
      state.editMode = false
      state.deleteMode = false
    },

    // 초기 데이터 주입
    setInitData(state, action) {
      state.pageId = action.payload.id
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
      state.tableContent = action.payload.tableContent
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
  hOpenTableContent,
  hCloseTableContent,
  hOpenSearchForm,
  hCloseSearchForm,
  hOpenAddForm,
  hCloseAddForm,
  hOpenDetailForm,
  hCloseDetailForm,
  hOpenActionList,
  hCloseActionList,
  hOpenActionForm,
  hCloseActionForm,
  hOpenActionController,
  hCloseActionController,
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
  setClearActionInput,
  setClearData,
  setInitData
} = appPageSlice.actions

export default appPageSlice.reducer
