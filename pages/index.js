import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroWork from '@/components/hero-work'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllWorksForHome } from '@/libs/api'
import Head from 'next/head'
import {CONST_SITE_NAME} from '@/libs/constants'

export default function Index({ preview, allWorks }) {
  const heroWork = allWorks[0]
  const moreWorks = allWorks.slice(1)
  return (
    <Layout preview={preview}>
      <Head>
        <title>{CONST_SITE_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
      <Intro />      
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
          {moreWorks.length > 0 && <MoreStories works={moreWorks} />}
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