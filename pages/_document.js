import Document, { Html, Head, Main, NextScript } from 'next/document'
import {CONST_LOCALE} from '@/libs/constants'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONST_LOCALE == 'ja-JP'
      ? "ja"
      : "en"
      }>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
