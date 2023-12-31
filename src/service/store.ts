import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { baseApiSSR } from '@/api'
import { newsReducer } from '@/service'
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([baseApiSSR.middleware]),
  reducer: {
    [baseApiSSR.reducerPath]: baseApiSSR.reducer,
    news: newsReducer,
  },
})

export const makeStore = () => store

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true })
