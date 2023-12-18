'use client'
import { getProfile, getRunningQueriesThunk, useGetProfileQuery } from '@/api/baseApiSSR'
import { OneNewsPage } from '@/components/newsPage/newsPage'
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

const Page = () => {
  const router = useRouter()

  const { data } = useGetProfileQuery(router.query.id!.toString())

  return <OneNewsPage data={data?.response.content!} />
}

export default Page
