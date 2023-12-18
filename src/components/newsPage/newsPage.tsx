import { VectorLeft } from '@/assets/icon/vectorLeft'
import { News } from '@/service'
import Link from 'next/link'

import s from './newsPage.module.css'
type OneNewsPageType = {
  data: News
}
export const OneNewsPage = ({ data }: OneNewsPageType) => {
  const { fields, webPublicationDate, webTitle, webUrl } = data

  return (
    <div className={s.container}>
      <Link className={s.back} href={'/'}>
        <VectorLeft />
        Back
      </Link>
      <p className={s.title}>{webTitle}</p>
      <div className={s.block}>
        <p className={s.time}>{webPublicationDate}</p>
        <a className={s.link} href={webUrl}>
          Read on Guardian
        </a>
      </div>
      <div className={s.content_block}>
        <img className={s.image} src={fields.thumbnail} />
        <p className={s.start}>Make start</p>
        <p className={s.text}>{fields.bodyText}</p>
      </div>
      <p className={s.text_publish}>
        Publication:{' '}
        <a className={s.link} href={'https://www.theguardian.com/international'}>
          {fields.publication}
        </a>
      </p>
    </div>
  )
}
