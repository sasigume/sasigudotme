import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { Work, WorkApi } from '../../services'
import { createClient, EntryCollection } from 'contentful'

import { CONST_SITE_NAME } from '../../services/constants'

import Container from '../../components/container'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import WorkBody from '../../components/work/work-body'
import Avatar from '../../components/work/avatar'
import DateComponent from '../../components/work/date'
import CoverImage from '../../components/work/cover-image'


type AllWorksProps = {
  workNow: Work,
  preview: boolean,
  isHome: boolean,
  allWorks: Work[]
}

export default function AllWorks({
  workNow,
  preview = false,
  isHome = false,
  allWorks,
}: AllWorksProps): ReactElement {
  const heroWork = workNow

  const router = useRouter()

  if (!router.isFallback && !allWorks) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout isHome={isHome} preview={preview}>
      <Head>
        <title>{heroWork.title} | {CONST_SITE_NAME}</title>
        <meta name="description" content={heroWork.excerpt} />
        <meta property="og:image" content={heroWork.coverImage.imageUrl} />
      </Head>

      <Container>
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
            <div className="mt-8">
              <div className="mb-8 tracking-wider">
                <Link href="/works"><a className="hover:underline">Works</a></Link>{" "}&gt;{" "}<span>{heroWork.title}</span>
              </div>
              <div className="mb-8">
                <CoverImage fixHeight={false} work={heroWork} />
              </div>
              <h2 className="mb-4 text-4xl">
                <Link href={`/works/${heroWork.slug}`}><a>{heroWork.title}</a></Link>
              </h2>
              <div className="mb-8 text-lg">
                <DateComponent dateString={heroWork.date} />
              </div>
              <div className="mb-12 text-lg">
                {heroWork.creator && <Avatar creator={heroWork.creator} />}
              </div>
              <div className="mb-12">
                <WorkBody work={heroWork} />
              </div>
              <div className="mb-12">
                <Link href={heroWork.url} passHref>
                  <a target="_blank" className="my-4 py-8 flex text-xl shadow-lg hover:shadow-xl bg-yellow-600 hover:bg-white hover:text-yellow-600 border border-yellow-600 text-white justify-center duration-200 transition-colors">
                    VIEW THIS WORK &rarr;</a>
                </Link>
              </div>
            </div>
          )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const api = new WorkApi();
  const allWorks = (await api.fetchWorkEntries()) ?? []
  return {
    props: {
      allWorks,
      workNow: allWorks.filter(work => work.slug == params.slug)[0]
    }
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  const entries: EntryCollection<Pick<Work, 'slug'>> = await client.getEntries({
    content_type: 'work',
    select: 'fields.slug',
  })
  return {
    paths: entries.items.map(({ fields }) => `/works/${fields.slug}`) ?? [],
    fallback: false
  }
}
