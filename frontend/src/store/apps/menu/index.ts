// ** Redux Imports
import { createAsyncThunk, createSlice, Dispatch } from '@reduxjs/toolkit'
import produce from 'immer'
import { getMenu } from 'src/apis/menu'

interface ReduxType {
  getState: any
  dispatch: Dispatch<any>
}

export const reloadMenu = createAsyncThunk(
  'appCrud/reloadMenu',
  async (_, { getState, dispatch }: ReduxType) => {
    try {
      const { data: res } = await getMenu()
      if (res.statusCode === 200) {
        const menuList = res.data.data
        const data = menuList.map((item: any) => {
          if (item.type === 'line') {
            return {
              sectionTitle: item.title
            }
          }
          if (item.type === 'menu' && item.route === 'common') {
            return {
              title: item.title,
              icon: item.icon,
              path: `core/?url=${item.path}`
            }
          }

          if (item.type === 'menu' && item.route === 'routing') {
            return {
              title: item.title,
              icon: item.icon,
              path: item.path
            }
          }
        })

        dispatch(hSetMenuList(data))
      }
    } catch (err) {
      ///
    }
  }
)

const init = {
  // dialog
  openAddForm: false,

  // selector
  openPartSelector: false,
  partType: 'add', // add, search, detail

  // part dialog
  openMenuPart: false,
  openSectionTitlePart: false,
  openPagePart: false,
  activeTab: '',
  isLoading: false,

  // core
  url: '',
  pageHeader: {
    title: '',
    subTitle: ''
  },

  menuPartForm: {
    icon: '',
    type: '',
    title: '',
    route: '',
    path: ''
  },
  sectionTitlePartForm: {
    title: '',
    type: ''
  },
  tableHeader: [],
  addForm: [],
  detailForm: [],
  searchForm: [],
  actionList: [],

  menuList: [],

  updateMenuIdList: []
}

export const appPageSlice = createSlice({
  name: 'appPage',
  initialState: { ...init },
  reducers: {
    updateMenuPartForm(state, action) {
      const nextState = produce(state.menuPartForm, (draftState) => {
        draftState[action.payload.key] = action.payload.value
      })
      state.menuPartForm = nextState
    },

    updateSectionTitlePartForm(state, action) {
      const nextState = produce(state.sectionTitlePartForm, (draftState) => {
        draftState[action.payload.key] = action.payload.value
      })
      state.sectionTitlePartForm = nextState
    },

    // 추가 폼 모달
    hOpenAddForm(state) {
      state.openAddForm = true
      state.partType = 'add'
    },
    hCloseAddForm(state) {
      state.openAddForm = false
    },

    // 메뉴 파츠 모달
    hOpenMenuPart(state) {
      state.openMenuPart = true
    },
    hCloseMenuPart(state) {
      state.openMenuPart = false
    },

    hSetActiveTab(state, action) {
      state.activeTab = action.payload
    },

    hSetMenuList(state, action) {
      state.menuList = action.payload
    },

    hUpdateEditMenuContainer(state, action) {
      state.updateMenuIdList = action.payload
    },

    // 섹션 타이틀 파츠 모달
    hOpenSectionTitlePart(state) {
      state.openSectionTitlePart = true
    },
    hCloseSectionTitlePart(state) {
      state.openSectionTitlePart = false
    },

    // 로딩 데이터 변경
    hSetIsLoading(state, action) {
      state.isLoading = action.payload
    },

    // 페이지 파츠 모달
    hOpenPagePart(state) {
      state.openPagePart = true
    },
    hClosePagePart(state) {
      state.openPagePart = false
    },

    // 파츠 셀렉터 모달
    hOpenPartSelector(state) {
      state.openPartSelector = true
    },
    hClosePartSelector(state) {
      state.openPartSelector = false
    },

    // 공통 수정
    updateState(state, action) {
      state[action.payload.key] = action.payload.value
    },

    // 폼 초기화
    setClearForm(state) {
      state.menuPartForm = {
        icon: '',
        type: '',
        title: '',
        route: '',
        path: ''
      }
      state.sectionTitlePartForm = {
        title: '',
        type: ''
      }
    },

    // 데이터 초기화
    setClearData(state) {
      state.url = ''
      state.pageHeader = {
        title: '',
        subTitle: ''
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
      state.tableHeader = action.payload.tableHeader
      state.addForm = action.payload.addForm
      state.detailForm = action.payload.detailForm
      state.searchForm = action.payload.searchForm
      state.actionList = action.payload.actionList
    }
  }
})

export const {
  hOpenMenuPart,
  hCloseMenuPart,
  hOpenAddForm,
  hCloseAddForm,
  hSetActiveTab,
  hSetMenuList,
  updateSectionTitlePartForm,
  hOpenSectionTitlePart,
  hCloseSectionTitlePart,
  hOpenPagePart,
  hClosePagePart,
  hOpenPartSelector,
  hClosePartSelector,
  updateMenuPartForm,
  updateState,
  setClearData,
  hUpdateEditMenuContainer,
  setInitData,
  setClearForm,
  hSetIsLoading
} = appPageSlice.actions

export default appPageSlice.reducer
