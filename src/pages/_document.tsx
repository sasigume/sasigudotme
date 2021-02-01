import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <div dangerouslySetInnerHTML={{__html: "<!-- This design is just parody of Destiny2 UI. Original Design Material : https://www.behance.net/gallery/60073341/Destiny-2-UI-Visual-Design -->"}} />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
