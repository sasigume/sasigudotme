import { useRouter } from 'next/router'
import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroWork from '@/components/hero-work'
import Layout from '@/components/layout'
import { getAllWorksForHome } from '@/libs/api'
import Head from 'next/head'
import Link from 'next/link'
import {CONST_MYNAME,CONST_SITE_NAME} from '@/libs/constants'

export default function AllWorks({ preview, allWorks }) {
  const heroWork = allWorks[0]
  const moreWorks = allWorks.slice(1)

  const router = useRouter()

  if (!router.isFallback && !allWorks) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Head>
        <title>Works | {CONST_SITE_NAME}</title>
      </Head>

      <Container>
        <h2 className="text-4xl font-md:text-6xl mb-20 mt-8">
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
                <HeroWork
              title={heroWork.title}
              coverImage={heroWork.coverImage}
              date={heroWork.date}
              creator={heroWork.creator}
              slug={heroWork.slug}
              excerpt={heroWork.excerpt}
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

export const getStaticProps = async ({ preview = false }) => {
  const allWorks = (await getAllWorksForHome(preview)) ?? []
  return {
    props: { preview, allWorks },
  };
}
