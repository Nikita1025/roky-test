import { apiKey } from '@/api/base-api'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: () => ({}),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  reducerPath: 'baseApi',
})

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProfile: builder.query<any, any>({
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
} = profileApi

export const { getProfile } = profileApi.endpoints
