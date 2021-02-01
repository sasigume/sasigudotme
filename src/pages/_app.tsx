import type { AppProps } from 'next/app'

import '../styles/globals.css'

import addIcon from '../options/icon'

function MyApp({ Component, pageProps }: AppProps) {
  addIcon()
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: "<!-- This design is just parody of Destiny2 UI. Original Design Material : https://www.behance.net/gallery/60073341/Destiny-2-UI-Visual-Design -->" }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
