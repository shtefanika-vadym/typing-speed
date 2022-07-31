import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { HttpMethods } from 'common/constant/Constant'

const fetchSomething = createAsyncThunk('app/fetchSomething', async (_, { rejectWithValue }) => {
  try {
    const response = await axios({
      method: HttpMethods.GET,
      baseURL: '',
      url: '',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const ManagerAPI = {
  fetchSomething,
}
