import { newsApi } from '@/api'
import { AsyncThunkConfig, DataResponse, News, RequestNews } from '@/service/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface newsState {
  news: News[]
  status: 'loading' | 'successfully'
}

const initialState: newsState = {
  news: [],
  status: 'successfully',
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
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload
    },
  },
})

export const getNewsTC = createAsyncThunk<DataResponse, RequestNews, AsyncThunkConfig>(
  'news/getNews',
  async ({ currentPage, filters, search }, { dispatch, rejectWithValue }) => {
    dispatch(setStatus('loading'))
    try {
      const { response } = await newsApi.news({ currentPage, filters, search })

      dispatch(setStatus('successfully'))

      return response
    } catch (e: any) {
      dispatch(setStatus('successfully'))

      return rejectWithValue(e)
    }
  }
)

const { setStatus } = slice.actions

export const newsReducer = slice.reducer
