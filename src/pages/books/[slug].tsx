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
import { BookData } from '../../components/book-list'


type AllBooksProps = {
  bookNow: Book,
  preview: boolean,
  isHome: boolean,
  allBooks: Book[]
}

export default function AllBooks({
  bookNow,
  preview = false,
  isHome = false,
  allBooks,
}: AllBooksProps): ReactElement {
  const heroBook = bookNow

  const router = useRouter()

  if (!router.isFallback && !allBooks) {
    return <ErrorPage statusCode={404} />
  }

  const subjectList = heroBook.subjects.map((subject) => (
    <div className="inline-block mr-2 px-3 py-1 bg-gray-300 rounded-md">{subject}</div>
  ))

  return (
    <Layout isHome={isHome} preview={preview}>
      <Head>
        <title>{heroBook.title} | {CONST_SITE_NAME}</title>
      </Head>

      <Container>
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
            <div className="mt-8">
              <div className="mb-8 tracking-wider">
                <Link href="/books"><a className="hover:underline">Books</a></Link>{" "}&gt;{" "}<span>{heroBook.title}</span>
              </div>
              <h2 className="mb-4 text-4xl">
                <Link href={`/books/${heroBook.slug}`}><a>{heroBook.title}</a></Link>
              </h2>
              <div className="mb-12">
                <div className="flex flex-nowrap my-4">{subjectList}</div>
                <BookData
                  data={heroBook.data} />
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
      allBooks,
      bookNow: allBooks.filter(book => book.slug == params.slug)[0]
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
