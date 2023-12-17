import { Provider } from 'react-redux'

import { wrapper } from '@/service/store'
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { AppProps } from 'next/app'

import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default wrapper.withRedux(App)
