import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '@/components/container'
import WorkBody from '@/components/work-body'
import MoreStories from '@/components/more-stories'
import Header from '@/components/header'
import WorkHeader from '@/components/work-header'
import SectionSeparator from '@/components/section-separator'
import Layout from '@/components/layout'
import { getAllWorksWithSlug, getWorkAndMoreWorks } from '@/libs/api'
import WorkTitle from '@/components/work-title'
import {CONST_SITE_NAME} from '@/libs/constants'

export default function Work({ work, moreWorks, preview }) {
  const router = useRouter()

  if (!router.isFallback && !work) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <WorkTitle>Loading…</WorkTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {work.title} | {CONST_SITE_NAME}
                </title>
                <meta property="og:image" content={work.coverImage.url} />
                <meta name="description" content={work.excerpt} />
              </Head>
              <WorkHeader
                title={work.title}
                coverImage={work.coverImage}
                date={work.date}
                url={work.url}
                creator={work.creator}
              />
              <WorkBody content={work.content} />
            </article>
            <SectionSeparator />
            {moreWorks && moreWorks.length > 0 && (
              <MoreStories works={moreWorks} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getWorkAndMoreWorks(params.slug, preview)

  return {
    props: {
      preview,
      work: data?.work ?? null,
      moreWorks: data?.moreWorks ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allWorks = await getAllWorksWithSlug()
  return {
    paths: allWorks?.map(({ slug }) => `/works/${slug}`) ?? [],
    fallback: true,
  }
}
