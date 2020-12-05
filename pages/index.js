import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {CONST_REPO_URL, CONST_SITE_URL, CONST_SITE_NAME, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL} from '../lib/constants'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{CONST_SITE_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </div>
  )
}
