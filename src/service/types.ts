import { AppDispatch, AppRootStateType } from './store'

export interface AsyncThunkConfig {
  dispatch: AppDispatch
  extra?: unknown
  fulfilledMeta?: unknown
  pendingMeta?: unknown
  rejectValue: string
  rejectedMeta?: unknown
  serializedErrorType?: unknown
  state: AppRootStateType
}

export type ResponseNews = {
  response: {
    currentPage: number
    orderBy: string
    pageSize: number
    pages: number
    results: News[]
    startIndex: number
    status: string
    total: number
    userTier: string
  }
}
export type News = {
  apiUrl: string
  fields: {
    headline: string
    shortUrl: string
    thumbnail: string
  }
  id: string
  isHosted: boolean
  pillarId: string
  pillarName: string
  sectionId: string
  sectionName: string
  type: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
}
