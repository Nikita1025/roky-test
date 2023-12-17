import { apiKey, newsApi } from '@/api'
import baseApi from '@/api/base-api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

interface newsState {
  oneNews?: any
}

const initialState: newsState = {
  oneNews: {},
}

const slice = createSlice({
  initialState,
  name: 'oneNews',
  reducers: {
    setOneNews: (state, action) => {
      state.oneNews = action.payload
    },
  },
})

export const { setOneNews } = slice.actions
export const oneNewsReducer = slice.reducer
