import type { AppProps } from 'next/app'

import '../styles/globals.css'

import addIcon from '../libs/icon'

function MyApp({ Component, pageProps }: AppProps) {
  addIcon()
  return <Component {...pageProps} />
}

export default MyApp
