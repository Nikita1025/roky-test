import axios from 'axios'

export const apiKey = process.env.API_KEY
const baseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export default baseApi
