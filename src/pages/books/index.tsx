import { CONST_SITE_NAME} from '../../libs/constants'
import { Book, BookApi } from '../../services'
import { ReactElement } from 'react'

import { BookMenu } from '../../components/book-list'
import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/container'

type HomeProps = {
  preview: boolean,
  allBooks: Book[]
}

export default function BookIndex({
  preview, allBooks
}: HomeProps): ReactElement {
  return (
    <Layout preview={false} isHome={false}>
      <Head>
        <title>Books | {CONST_SITE_NAME}</title>
        <meta name="description" content="本の一覧。"/>
      </Head>
      <Container>
        <div className="">
          <div>
            <h2 className="text-4xl pb-4">My Books</h2>
            <BookMenu books={allBooks} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const bookApi = new BookApi()
  const allBooks = (await bookApi.fetchBookEntries()) ?? []
  return {
    props: {
      allBooks
    },
  };
}