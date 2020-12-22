import { CONST_SITE_NAME, CONST_LEVELS} from '../libs/constants'
import { BookApi, Book, ProfileApi, Profile } from '../services'
import { ReactElement } from 'react'
import { publishRss } from '../services/rss'

import { BookMenu } from '../components/book-list'
import { ProfileList } from '../components/profile-list'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'

type HomeProps = {
  preview: boolean,
  allBooks: Book[],
  allProfiles: Profile[]
}

export default function Home({
  preview, allBooks, allProfiles
}: HomeProps): ReactElement {
  return (
    <Layout>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-4">
          <div>
            <h2 className="text-4xl pb-4">My Books</h2>
            <BookMenu books={allBooks} />
            <p>Books above are only part of my collection.</p>
          </div>
          <div>
            <div className="block mb-8 lg:hidden"></div>
            <h2 className="text-4xl pb-4">About me</h2>
            <ProfileList profiles={allProfiles} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const bookApi = new BookApi()
  const profileApi = new ProfileApi()
  const allBooks = (await bookApi.fetchBookEntries()) ?? []
  const allProfiles = (await profileApi.fetchProfileEntries()) ?? []
  publishRss(allProfiles, allBooks);
  return {
    props: {
      allBooks,
      allProfiles
    },
  };
}