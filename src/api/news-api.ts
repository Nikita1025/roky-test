import baseApi, { apiKey } from '@/api/base-api'
import { RequestNews, ResponseNews } from '@/service/types'

export const newsApi = {
  async news({ currentPage, filters, search }: RequestNews) {
    const { data } = await baseApi.get<ResponseNews>(
      `/search?q=${search}&page-size=${currentPage}&from-date=2010-01-01&show-fields=starRating,headline,thumbnail,short-url&order-by=${
        filters || 'relevance'
      }&api-key=${apiKey}`
    )

    return data
  },
}
