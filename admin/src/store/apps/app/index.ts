// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

export const appAppSlice = createSlice({
  name: 'appApp',
  initialState: {
    // app logo
    appLogo: '',

    // app name
    appName: '',

    // app desc
    appDesc: ''
  },
  reducers: {
    setAppInfo(state, action) {
      state.appLogo = action.payload.appLogo
      state.appName = action.payload.appName
      state.appDesc = action.payload.appDesc
    }
  }
})

export const { setAppInfo } = appAppSlice.actions

export default appAppSlice.reducer
