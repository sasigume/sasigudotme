import { useRouter } from 'next/router'
import Container from '../../components/container'
import ErrorPage from 'next/error'
import MoreStories from '../../components/more-stories'
import WorkPreview from '../../components/work-preview'
import Layout from '../../components/layout'
import { ReactElement } from 'react'
import { Work , WorkApi} from '../../services'
import Head from 'next/head'
import Link from 'next/link'
import { CONST_SITE_NAME } from '../../libs/constants'
import { GetStaticProps } from 'next'

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
        <h2 className="text-4xl font-md:text-6xl mb-6 mt-14">
        <Link href="/">
            <a className="hover:underline">Works</a>
        </Link>
        </h2>
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
          <>
          <div className="mb-16 md:mb-24">
            {heroWork && (
              <WorkPreview
                work={heroWork}
                first={true}
            />
            )}
          </div>
          {moreWorks.length > 0 && <MoreStories works={moreWorks} />}
          </> )
            }
        
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps  = async () => {
  const api = new WorkApi();
  const allWorks = await api.fetchWorkEntries();
  return {
    props: { allWorks },
  };
}
