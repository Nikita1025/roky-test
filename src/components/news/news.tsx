import React from 'react'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

import s from './news.module.css'
type NewsType = {
  image: string
  time: string
  title: string
}

export const News = ({ image, time, title }: NewsType) => {
  return (
    <div className={s.container}>
      <Image alt={'ar'} className={s.image} height={250} src={image} width={325} />
      <div className={s.content_block}>
        <div>
          <p className={s.time}>{time}</p>
          <p className={s.title}>{title}</p>
        </div>
        <Button variant={'text'}>details</Button>
      </div>
    </div>
  )
}
