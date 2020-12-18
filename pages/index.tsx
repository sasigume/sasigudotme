import { CONST_SITE_NAME, CONST_LEVELS} from '../services/constants'
import { WorkApi, Work, SkillApi, Skill, ProfileApi, Profile } from '../services'
import { ReactElement } from 'react'
import { publishRss } from '../services/rss'

import { SkillMenu } from '../components/skill-list'
import { ProfileList } from '../components/profile-list'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Image from 'next/image'

type HomeProps = {
  preview: boolean,
  allWorks: Work[],
  allSkills: Skill[],
  allProfiles: Profile[]
}

export default function Home({
  preview, allSkills, allProfiles
}: HomeProps): ReactElement {
  return (
    <Layout preview={preview} isHome>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-4">
          <div>
            <h2 className="text-3xl pb-4">My Skills</h2>
            <SkillMenu buttons={allSkills} />
            <h3 className="mt-6 mb-2">背景色がスキルの熟練度を表しています。</h3>
            <SkillMenu buttons={CONST_LEVELS} />
          </div>
          <div>
            <div className="block mb-8 lg:hidden"></div>
            <h2 className="text-3xl pb-4">Life Events</h2>
            <ProfileList profiles={allProfiles} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const skillApi = new SkillApi()
  const profileApi = new ProfileApi()
  const workApi = new WorkApi();
  const allWorks = (await workApi.fetchWorkEntries()) ?? []
  const allSkills = (await skillApi.fetchSkillEntries()) ?? []
  const allProfiles = (await profileApi.fetchProfileEntries()) ?? []
  publishRss(allWorks,allProfiles);
  return {
    props: {
      allWorks,
      allSkills,
      allProfiles
    },
  };
}