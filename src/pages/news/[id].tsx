'use client'
import baseApi, { apiKey } from '@/api/base-api'
import { OneNewsPage } from '@/components/newsPage/newsPage'
// eslint-disable-next-line import/namespace
import { getOneNews, getOneNewsTC } from '@/service/news-slice'
import { wrapper } from '@/service/store'
import { useRouter } from 'next/dist/client/router'

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  const id = context.query?.id as string

  await store.dispatch(getOneNewsTC(id))
  console.log(context)

  return {
    props: {},
  }
})

const Id = () => {
  return <OneNewsPage />
}

export default Id
