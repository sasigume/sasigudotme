import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { Book, BookApi } from '../../services'
import { createClient, EntryCollection } from 'contentful'

import { CONST_SITE_NAME } from '../../libs/constants'

import Container from '../../components/container'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import { Progress, BookData } from '../../components/book-list'


type AllBooksProps = {
  book: Book,
  preview: boolean,
  isHome: boolean,
}

export default function AllBooks({
  book,
  preview = false,
  isHome = false,
}: AllBooksProps): ReactElement {

  const router = useRouter()

  if (!router.isFallback && !book) {
    return <ErrorPage statusCode={404} />
  }

  const subjectList = book.subjects.map((subject) => (
    <div key={subject} className="inline-block mr-2 px-3 py-2 bg-gray-300 rounded-md">{subject}</div>
  ))

  return (
    <Layout isHome={isHome} preview={preview}>
      <Head>
        <title>{book.title} | {CONST_SITE_NAME}</title>
      </Head>

      <Container>
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
            <div className="mt-8">
              <div className="mb-8 tracking-wider">
                <Link href="/books"><a className="hover:underline">Books</a></Link>{" "}&gt;{" "}<span>{book.title}</span>
              </div>
              <h2 className="mb-4 text-4xl">
                {book.title}
              </h2>
              <div className="mb-12">
                <div className="flex flex-nowrap mb-6">{subjectList}</div>
                <div className="font-bold mb-12">
                  <h3 className="mb-4 text-2xl">全体の進捗: {book.percent}%</h3>
                  <Progress number={book.count} />
                </div>
                <div className="font-bold">
                <h3 className="mb-4 text-2xl">章ごとの進捗</h3>
                  <BookData
                    data={book.data} />
                </div>
              </div>
            </div>
          )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const api = new BookApi();
  const allBooks = (await api.fetchBookEntries()) ?? []
  return {
    props: {
      book: allBooks.filter(book => book.slug == params.slug)[0]
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  const entries: EntryCollection<Pick<Book, 'slug'>> = await client.getEntries({
    content_type: 'book',
    select: 'fields.slug',
  })
  return {
    paths: entries.items.map(({ fields }) => `/books/${fields.slug}`) ?? [],
    fallback: false
  }
}
