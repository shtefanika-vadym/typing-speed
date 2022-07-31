import { createSlice } from '@reduxjs/toolkit'

import { IAppSlice } from 'store/models/IAppSlice'
import { ManagerAPI } from 'store/actions/ActionCreators'

const initialState: IAppSlice = {
  title: 'template',
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    SAY_HELLO_WORD() {
      console.log('Hello word')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ManagerAPI.fetchSomething.fulfilled, (state, action: any) => {
      console.log(action.payload)
    })
  },
})

export default appSlice.reducer

export const { SAY_HELLO_WORD } = appSlice.actions
