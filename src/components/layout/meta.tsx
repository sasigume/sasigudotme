import Head from 'next/head'
import {CONST_SITE_META, CONST_OG_IMAGE_URL, CONST_SITE_URL, } from '../../services/constants'


export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ff6600" />
      <link rel="alternate" type="application/atom+xml" title="Atom1.0" href={`${CONST_SITE_URL}/rss.xml`} />
      <meta name="theme-color" content="#ffffff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={CONST_SITE_META} />     
      <meta property="og:image" content={CONST_OG_IMAGE_URL} />
    </Head>
  )
}
