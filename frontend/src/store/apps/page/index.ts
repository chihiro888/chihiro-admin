// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const init = {
  // dialog
  // openTableHeader: false,
  // openTableContent: false,
  openTableSetting: false, // REVIEW
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

  // table part dialog
  openTableDefaultPart: false,
  openTableImagePart: false,
  openTableChipPart: false,
  openTableModalPart: false,
  openTableSnackbarPart: false,
  openTableActionPart: false,

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

  // table part dialog
  inputHeader: '',
  inputWidth: 0,
  inputHeight: 0,
  inputChipList: [],

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
  // tableHeader: [],
  tableContent: '',
  tableSetting: [], // REVIEW
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
    // // 테이블 헤더 모달
    // hOpenTableHeader(state) {
    //   state.openTableHeader = true
    // },
    // hCloseTableHeader(state) {
    //   state.openTableHeader = false
    // },

    // // 테이블 내용 모달
    // hOpenTableContent(state) {
    //   state.openTableContent = true
    // },
    // hCloseTableContent(state) {
    //   state.openTableContent = false
    // },

    // REVIEW - 테이블 구성 모달
    hOpenTableSetting(state) {
      state.openTableSetting = true
      state.partType = 'table'
      state.editMode = false
      state.deleteMode = false
    },
    hCloseTableSetting(state) {
      state.openTableSetting = false
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

    // SECTION - 테이블 관련 모달
    // 테이블 기본 모달
    hOpenTableDefaultPart(state) {
      state.openTableDefaultPart = true
    },
    hCloseTableDefaultPart(state) {
      state.openTableDefaultPart = false
    },

    // 테이블 이미지 모달
    hOpenTableImagePart(state) {
      state.openTableImagePart = true
    },
    hCloseTableImagePart(state) {
      state.openTableImagePart = false
    },

    // 테이블 칩 모달
    hOpenTableChipPart(state) {
      state.openTableChipPart = true
    },
    hCloseTableChipPart(state) {
      state.openTableChipPart = false
    },

    // 테이블 Modal 모달
    hOpenTableModalPart(state) {
      state.openTableModalPart = true
    },
    hCloseTableModalPart(state) {
      state.openTableModalPart = false
    },

    // 테이블 스낵바 모달
    hOpenTableSnackbarPart(state) {
      state.openTableSnackbarPart = true
    },
    hCloseTableSnackbarPart(state) {
      state.openTableSnackbarPart = false
    },

    // 테이블 스낵바 모달
    hOpenTableActionPart(state) {
      state.openTableActionPart = true
    },
    hCloseTableActionPart(state) {
      state.openTableActionPart = false
    },
    // !SECTION - 테이블 관련 모달

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
      state.inputHeader = ''
      state.inputWidth = 0
      state.inputHeight = 0
      state.inputChipList = []
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
      // state.tableHeader = []
      state.tableSetting = [] //REVIEW -
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
      // state.tableHeader = action.payload.tableHeader
      // state.tableContent = action.payload.tableContent
      state.tableSetting = action.payload.tableSetting //REVIEW -
      state.addForm = action.payload.addForm
      state.detailForm = action.payload.detailForm
      state.searchForm = action.payload.searchForm
      state.actionList = action.payload.actionList
    }
  }
})

export const {
  // hOpenTableHeader,
  // hCloseTableHeader,
  // hOpenTableContent,
  // hCloseTableContent,
  hOpenTableSetting, //REVIEW -
  hCloseTableSetting, //REVIEW -
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
  setInitData,
  hOpenTableDefaultPart,
  hCloseTableDefaultPart,
  hOpenTableImagePart,
  hCloseTableImagePart,
  hOpenTableChipPart,
  hCloseTableChipPart,
  hOpenTableModalPart,
  hCloseTableModalPart,
  hOpenTableSnackbarPart,
  hCloseTableSnackbarPart,
  hOpenTableActionPart,
  hCloseTableActionPart
} = appPageSlice.actions

export default appPageSlice.reducer
