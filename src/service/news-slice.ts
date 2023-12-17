import { apiKey, newsApi } from '@/api'
import baseApi from '@/api/base-api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { AsyncThunkConfig, News, RequestNews, ResponseNews } from './types'

interface newsState {
  news?: News[]
  oneNews?: any
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
    builder.addCase(getOneNewsTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.oneNews = action.payload
      }
    })
  },
  initialState,
  name: 'news',
  reducers: {
    getOneNews: (state, action) => {
      state.oneNews = action.payload
    },
  },
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
export const getOneNewsTC = createAsyncThunk<any, string, AsyncThunkConfig>(
  'news/getOneNews',
  async (id, { dispatch }) => {
    try {
      const { response } = await newsApi.oneNews(id)

      return response
    } catch (e) {
      console.log(e)
    }
  }
)

export const { getOneNews } = slice.actions
export const newsReducer = slice.reducer
