// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
import produce from 'immer'

export const appCrudSlice = createSlice({
  name: 'appCrud',
  initialState: {
    // pagination
    pagination: {
      count: 0,
      data: [],
      activePage: 1
    },

    // page header
    pageHeader: {
      title: '',
      subTitle: ''
    },

    // table header
    tableHeader: [],

    // add form
    addForm: [],

    // search form
    searchForm: [],

    // detail form
    detailForm: [],

    // action
    actionForm: [],

    // listAPI
    listAPI: null
  },
  reducers: {
    setPagination(state, action) {
      state.pagination = action.payload
    },
    setPageHeader(state, action) {
      state.pageHeader = action.payload
    },
    setTableHeader(state, action) {
      state.tableHeader = action.payload
    },
    setAddForm(state, action) {
      state.addForm = action.payload
    },
    setSearchForm(state, action) {
      state.searchForm = action.payload
    },
    setDetailForm(state, action) {
      state.detailForm = action.payload
    },
    setActionForm(state, action) {
      state.actionForm = action.payload
    },
    initAddForm(state) {
      const nextState = produce(state.addForm, (draftState) => {
        draftState.map((item) => {
          item.value = ''
        })
      })
      state.addForm = nextState
    },
    updateAddForm(state, action) {
      const nextState = produce(state.addForm, (draftState) => {
        draftState.map((item) => {
          if (item.key === action.payload.key) {
            item.value = action.payload.value
          }
        })
      })
      state.addForm = nextState
    },
    initSearchForm(state) {
      const nextState = produce(state.searchForm, (draftState) => {
        draftState.map((item) => {
          item.value = ''
        })
      })
      state.searchForm = nextState
    },
    updateSearchForm(state, action) {
      const nextState = produce(state.searchForm, (draftState) => {
        draftState.map((item) => {
          if (item.key === action.payload.key) {
            item.value = action.payload.value
          }
        })
      })
      state.searchForm = nextState
    },
    setListAPI(state, action) {
      state.listAPI = action.payload
    }
  }
})

export const {
  setPagination,
  setTableHeader,
  setPageHeader,
  setAddForm,
  setSearchForm,
  setDetailForm,
  setActionForm,
  initAddForm,
  updateAddForm,
  initSearchForm,
  updateSearchForm,
  setListAPI
} = appCrudSlice.actions

export default appCrudSlice.reducer
