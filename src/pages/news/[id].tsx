'use client'

// eslint-disable-next-line no-duplicate-imports

import { getProfile, getRunningQueriesThunk, useGetProfileQuery } from '@/api/baseApi'
import { OneNewsPage } from '@/components/newsPage/newsPage'
// eslint-disable-next-line import/namespace

import { wrapper } from '@/service/store'
import { useRouter } from 'next/dist/client/router'

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  const id = context.query?.id as string

  store.dispatch(getProfile.initiate(id))
  await Promise.all(store.dispatch(getRunningQueriesThunk()))

  return {
    props: {},
  }
})

const Id = () => {
  const router = useRouter()

  const { data } = useGetProfileQuery(router.query.id)

  return <OneNewsPage data={data} />
}

export default Id
