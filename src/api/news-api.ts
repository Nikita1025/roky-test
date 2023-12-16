import baseApi, { apiKey } from '@/api/base-api'
import { ResponseNews } from '@/service/types'

export const newsApi = {
  async news(search: string) {
    const { data } = await baseApi.get<ResponseNews>(
      `/search?q=${search}&show-fields=starRating,headline,thumbnail,short-url&api-key=${apiKey}`
    )

    return data
  },
}
