// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Provider } from 'react-redux'

import { ProgressBar } from '@/components/ui/progressBar/progressBar'
import { wrapper } from '@/service/store'
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { AppProps } from 'next/app'

import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const { props, store } = wrapper.useWrappedStore(pageProps)

  return (
    <Provider store={store}>
      <ProgressBar>
        <Component {...props.pageProps} />
      </ProgressBar>
    </Provider>
  )
}
export default App
