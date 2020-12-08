import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/libs/api'
import Head from 'next/head'
import {CONST_LOCALE, CONST_SITE_NAME, CONST_SITE_NAME_JA} from '@/libs/constants'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout preview={preview}>
      <Head>
        <title>{CONST_LOCALE == 'ja-JP'
        ? CONST_SITE_NAME_JA
        : CONST_SITE_NAME
        }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
      <Intro />      
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
    </Layout>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  };
}