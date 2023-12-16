import { newsApi } from '@/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { AsyncThunkConfig, News, ResponseNews } from './types'

interface newsState {
  news?: News[]
}

const initialState: newsState = {
  news: [],
}

const slice = createSlice({
  extraReducers: builder => {
    builder.addCase(getNewsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.news = action.payload.results
      }
    })
  },
  initialState,
  name: 'news',
  reducers: {},
})

export const getNewsTC = createAsyncThunk<any, string, AsyncThunkConfig>(
  'news/getNews',
  async (search, { dispatch }) => {
    try {
      const { response } = await newsApi.news(search)

      return response
    } catch (e) {
      console.log(e)
    }
  }
)
export const newsReducer = slice.reducer
