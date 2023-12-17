import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// eslint-disable-next-line import/namespace
import { newsReducer } from '@/service/news-slice'
import { oneNewsReducer } from '@/service/one-news-slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = configureStore({
  reducer: {
    news: newsReducer,
    // oneNews: oneNewsReducer,
  },
})

const makeStoreTS = () =>
  configureStore({
    reducer: {
      news: newsReducer,
      // oneNews: oneNewsReducer,
    },
  })

export type AppDispatch = typeof makeStore.dispatch
export type AppRootStateType = ReturnType<typeof makeStoreTS>
export const useAppDispatch = () => useDispatch<any>()

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export const wrapper = createWrapper<AppRootStateType>(makeStore, { debug: true })
