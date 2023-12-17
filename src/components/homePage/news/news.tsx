import React from 'react'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
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
      <img alt={'ar'} className={s.image} height={250} src={image} width={325} />
      <div className={s.content_block}>
        <div>
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
