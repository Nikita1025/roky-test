'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'

import { News } from '@/components/homePage/news'
import { Button } from '@/components/ui/button'
import { SelectBox } from '@/components/ui/selectBox'
import { getNewsTC, useAppDispatch, useAppSelector } from '@/service'

import s from './homePage.module.css'
const options = [
  { id: '1', value: '10' },
  { id: '2', value: '20' },
  { id: '3', value: '30' },
]
const optionFilters = [
  { id: '1', value: 'newest' },
  { id: '2', value: 'oldest' },
]

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const news = useAppSelector(state => state.news.news)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState('')
  const [currentPage, setCurrentPage] = useState(10)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
    setCurrentPage(10)
  }
  const onClickFind = () => {
    dispatch(getNewsTC({ currentPage, filters, search }))
  }

  useEffect(() => {
    dispatch(getNewsTC({ currentPage, filters, search }))
  }, [currentPage])

  const changeFilterHandler = (value: number | string) => {
    setFilters(String(value))
  }
  const changeCurrentPageHandler = (value: number | string) => {
    setCurrentPage(+value)
  }

  useEffect(() => {
    const handleScroll = () => {
      const { clientHeight, scrollHeight, scrollTop } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight) {
        setCurrentPage(prevPage => prevPage + 10)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={s.container}>
      <div className={s.search_block}>
        <input className={s.input} onChange={onChangeHandler} placeholder={'Search by word'} />
        <Button onClick={onClickFind} variant={'default'}>
          Find
        </Button>
        <div className={s.select_block}>
          <SelectBox
            onValueChange={changeCurrentPageHandler}
            options={options}
            placeholder={currentPage.toString()}
          />
          <SelectBox
            onValueChange={changeFilterHandler}
            options={optionFilters}
            placeholder={'Date'}
          />
        </div>
      </div>

      <div className={s.news_block}>
        {news?.map(el => (
          <News
            id={el.id}
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
