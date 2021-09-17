import type { AppProps } from 'next/app'
import GlobalCss from '../styles/global'
import ResetCss from '../styles/reset'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ResetCss />
    <GlobalCss />
    <Component {...pageProps} />
  </>
}
export default MyApp
