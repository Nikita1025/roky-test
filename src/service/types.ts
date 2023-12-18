import { AppDispatch, RootState } from './store'

export interface AsyncThunkConfig {
  dispatch: AppDispatch
  extra?: unknown
  fulfilledMeta?: unknown
  pendingMeta?: unknown
  rejectValue: string
  rejectedMeta?: unknown
  serializedErrorType?: unknown
  state: RootState
}

export type ResponseNews = {
  response: DataResponse
}
export type DataResponse = {
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
export type ResponseOneNews = {
  response: {
    content: News
    status: string
    total: number
    userTier: string
  }
}
export type News = {
  apiUrl: string
  fields: {
    bodyText?: string
    byline?: string
    headline: string
    publication?: string
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

export type RequestNews = {
  currentPage: number
  filters?: string
  search?: string
}
