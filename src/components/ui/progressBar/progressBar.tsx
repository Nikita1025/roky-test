import { PropsWithChildren } from 'react'

import { useAppSelector } from '@/service/store'
import { NextPage } from 'next'

import s from './progressBar.module.css'

export const ProgressBar: NextPage<PropsWithChildren> = ({ children }) => {
  const { status } = useAppSelector(state => state.news)

  return (
    <>
      {status === 'loading' && <div className={s.progress_bar}></div>}
      <div className={s.children}>{children}</div>
    </>
  )
}
