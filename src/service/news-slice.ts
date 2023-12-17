import { apiKey, newsApi } from '@/api'
import baseApi from '@/api/base-api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { AsyncThunkConfig, News, RequestNews, ResponseNews } from './types'

interface newsState {
  news?: News[]
  oneNews: any
}

const initialState: newsState = {
  news: [],
  oneNews: {},
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

export const getNewsTC = createAsyncThunk<any, RequestNews, AsyncThunkConfig>(
  'news/getNews',
  async ({ currentPage, filters, search }, { dispatch }) => {
    try {
      const { response } = await newsApi.news({ currentPage, filters, search })

      return response
    } catch (e) {
      console.log(e)
    }
  }
)

export const newsReducer = slice.reducer
