import { apiKey } from '@/api/base-api'
import { ResponseOneNews } from '@/service/types'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const baseApiSSR = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: () => ({}),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  reducerPath: 'baseApi',
})

export const oneNewsApi = baseApiSSR.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<ResponseOneNews, string>({
      query: id => ({
        method: 'GET',
        url: `${id}?show-fields=all&api-key=${apiKey}`,
      }),
    }),
  }),
})

export const {
  useGetProfileQuery,
  util: { getRunningQueriesThunk },
} = oneNewsApi

export const { getProfile } = oneNewsApi.endpoints
