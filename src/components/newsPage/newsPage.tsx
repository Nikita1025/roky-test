import { useAppSelector } from '@/service/store'

import s from './newsPage.module.css'
export const OneNewsPage = (props: any) => {
  console.log(props.data)

  return (
    <div className={s.container}>
      {/*<p className={s.title}>{props.data.webTitle}</p>*/}
      {/*<p className={s.time}>{props.data.webPublicationDate}</p>*/}
      {/*<img src={props.data.fields.thumbnail} />*/}
      {/*<p>{props.data.fields.bodyText}</p>*/}
    </div>
  )
}
