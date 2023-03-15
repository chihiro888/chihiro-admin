// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

export const appIconSlice = createSlice({
  name: 'appIcon',
  initialState: {
    // 아이콘 셀렉터 모달
    openIconSelector: false,

    // 선택된 아이콘
    selectedIcon: '',

    // 아이콘 목록
    iconList: [],

    // 검색
    iconText: ''
  },
  reducers: {
    hOpenIconSelector(state) {
      state.iconText = ''
      state.iconList = []
      state.openIconSelector = true
    },
    hCloseIconSelector(state) {
      state.openIconSelector = false
    },
    setSelectedIcon(state, action) {
      state.selectedIcon = action.payload
    },
    setIconList(state, action) {
      state.iconList = action.payload
    },
    setIconText(state, action) {
      state.iconText = action.payload
    }
  }
})

export const {
  hOpenIconSelector,
  hCloseIconSelector,
  setSelectedIcon,
  setIconList,
  setIconText
} = appIconSlice.actions

export default appIconSlice.reducer
