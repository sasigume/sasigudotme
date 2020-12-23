import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { Book, BookApi } from '../../services'
import { createClient, EntryCollection } from 'contentful'
import ReactMarkdown from 'react-markdown'
import markdownStyles from '../../components/markdown-styles.module.css'

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

function Ul(props) {
  return <ul className="ml-4 my-2 list-disc">{props.children}</ul>
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
    <div key={subject} className="font-bold inline-block mr-2 px-3 py-2 bg-gray-300 rounded-md">{subject}</div>
  ))

  const parsedContent = (
    <ReactMarkdown children={book.md} renderers={{ list: Ul }} />
  )

  return (
    <Layout isHome={isHome} preview={preview}>
      <Head>
        <title>{book.title} | {CONST_SITE_NAME}</title>
        <meta name="description" content={book.md} />
      </Head>

      <Container>
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
            <div className="mt-8">
              <div className="mb-8 tracking-wider">
                <Link href="/books"><a className="hover:underline">Books</a></Link>{" "}&gt;{" "}<span>{book.title}</span>
              </div>
              <h2 className="mb-4 font-bold text-5xl border-b border-gray-400">
                {book.title}
              </h2>
              <div className="mb-12">
                <div className="flex flex-nowrap mb-6">{subjectList}</div>
                <div className={(`mb-8 ${markdownStyles.markdown}`)}>{book.dateGet}に{book.bought ? "買った" : "借りた"}本。<br />{parsedContent}</div>
                <div className="mb-12">
                  <h3 className="mb-4 text-3xl">全体の進捗: {book.percent}%</h3>
                  <Progress number={book.count} />
                </div>
                <div className="">
                  <h3 className="mb-4 text-3xl">章ごとの進捗</h3>
                  <BookData
                    chapters={book.chapters} />
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
  const book = (await api.fetchBookEntryBySlug(params.slug)) ?? null
  console.log("本の個別データを取得しました:",book)
  return {
    props: {
      book
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
