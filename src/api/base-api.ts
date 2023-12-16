import axios from 'axios'

export const apiKey = 'fed07acb-0836-4989-8409-a4d23f912df2'
const baseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export default baseApi
