'use client'
import React, { ChangeEvent, useState } from 'react'

import { News } from '@/components/news/news'
import { Button } from '@/components/ui/button'
import { getNewsTC } from '@/service/news-slice'
import { useAppDispatch, useAppSelector } from '@/service/store'

import s from './homePage.module.css'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const news = useAppSelector(state => state.news.news)
  const [search, setSearch] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  const onClickFind = () => {
    dispatch(getNewsTC(search))
  }

  return (
    <div className={s.container}>
      <div className={s.search_block}>
        <input className={s.input} onChange={onChangeHandler} placeholder={'Найти по слову'} />
        <Button onClick={onClickFind} variant={'default'}>
          Find
        </Button>
        <div>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <select>
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
      </div>

      <div className={s.news_block}>
        {news?.map(el => (
          <News
            image={el.fields?.thumbnail}
            key={el.id}
            time={el.webPublicationDate}
            title={el.webTitle}
          />
        ))}
      </div>
    </div>
  )
}
