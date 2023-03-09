// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import chat from 'src/store/apps/chat'
import user from 'src/store/apps/user'
import email from 'src/store/apps/email'
import invoice from 'src/store/apps/invoice'
import calendar from 'src/store/apps/calendar'
import permissions from 'src/store/apps/permissions'

// ** Custom Store
import crud from 'src/store/apps/crud'
import app from 'src/store/apps/app'
import page from 'src/store/apps/page'

export const store = configureStore({
  reducer: {
    user,
    chat,
    email,
    invoice,
    calendar,
    permissions,
    crud,
    app,
    page
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
