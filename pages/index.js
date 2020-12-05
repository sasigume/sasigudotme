import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/libs/api'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {CONST_REPO_URL, CONST_SITE_URL, CONST_SITE_NAME, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL} from '@/libs/constants'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout preview={preview}>
      <Head>
        <title>{CONST_SITE_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href={CONST_SITE_URL}>{CONST_SITE_NAME}</a>
        </h1>

        <p className={styles.description}>
          I'm a student.<br />
          I have a dream: the future where everyone has equal rights to learn anytime, anywhere.
        </p>

        <div className={styles.grid}>
          <a href={CONST_REPO_URL} className={styles.card}>
            <h3>Repository &rarr;</h3>
            <p>You can view the source code.</p>
          </a>

          <a href={CONST_YOUTUBE_URL} className={styles.card}>
            <h3>YouTube &rarr;</h3>
            <p>Watch my videos on YouTube.</p>
          </a>

          <a href={CONST_TWITTER_URL} className={styles.card}>
            <h3>Twitter &rarr;</h3>
            <p>Feel free to follow me on Twitter.</p>
          </a>

          <a href={CONST_LAPRAS_URL} className={styles.card} >
            <h3>LAPRAS &rarr;</h3>
            <p>For more info about me, visit my page onn LAPRAS.</p>
          </a>
        </div>
      </main>

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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
        </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}