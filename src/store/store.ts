import { combineReducers, configureStore } from '@reduxjs/toolkit'

import appReducer from 'store/reducers/AppSlice'

const mainReducer = combineReducers({
  appReducer,
})

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
