import { ReactElement } from 'react'
import Head from 'next/head'

import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Work , WorkApi} from '../../services'

import { CONST_SITE_NAME } from '../../services/constants'

import Container from '../../components/container'
import ErrorPage from 'next/error'
import MoreWorks from '../../components/more-works'
import WorkPreview from '../../components/work/work-preview'
import Layout from '../../components/layout'

type AllWorksProps = {
  preview: boolean,
  isHome: boolean,
  allWorks: Work[]
}

export default function AllWorks({
  preview = false,
  isHome = false,
  allWorks,
}: AllWorksProps): ReactElement {
  const heroWork = allWorks[0]
  const moreWorks = allWorks.slice(1)

  const router = useRouter()

  if (!router.isFallback && !allWorks) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout isHome={isHome} preview={preview}>
      <Head>
        <title>Works | {CONST_SITE_NAME}</title>
      </Head>

      <Container>
        <h2 className="text-4xl font-md:text-6xl mb-6">The most recent one</h2>
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
          <>
          <div className="mb-16">
            {heroWork && (
              <WorkPreview
                work={heroWork}
                first={true}
            />
            )}
          </div>
          {moreWorks.length > 0 && <MoreWorks works={moreWorks} />}
          </> )
            }
        
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps  = async () => {
  const api = new WorkApi();
  const allWorks = (await api.fetchWorkEntries()) ?? []
  return {
    props: { allWorks },
  };
}
