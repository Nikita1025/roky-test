import React from 'react'

import { NoImage } from '@/assets/icon/noImage'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

import s from './news.module.css'
type NewsType = {
  id: string
  image: string
  time: string
  title: string
}

export const News = ({ id, image, time, title }: NewsType) => {
  const router = useRouter()

  const handleClick = () => {
    const encodedId = encodeURIComponent(id)

    router.push(`/news/${encodedId}`)
  }

  return (
    <div className={s.container}>
      <div className={s.image_block}>
        {image ? <img className={s.image} src={image} /> : <NoImage className={s.image} />}
      </div>
      <div className={s.content_block}>
        <div className={s.text_block}>
          <p className={s.time}>{time}</p>
          <p className={s.title}>{title}</p>
        </div>
        <Button onClick={handleClick} variant={'text'}>
          details
        </Button>
      </div>
    </div>
  )
}
