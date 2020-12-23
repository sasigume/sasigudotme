import { CONST_SITE_NAME, CONST_LEVELS} from '../../libs/constants'
import { SkillApi, Skill, ProfileApi, Profile } from '../../services'
import { ReactElement } from 'react'

import { SkillMenu } from '../../components/skill-list'
import { ProfileList } from '../../components/profile-list'
import Layout from '../../components/layout'
import Head from 'next/head'
import Container from '../../components/container'

type HomeProps = {
  preview: boolean,
  allSkills: Skill[],
  allProfiles: Profile[]
}

export default function Home({
  preview, allSkills, allProfiles
}: HomeProps): ReactElement {
  return (
    <Layout preview={false} isBlack={false}>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-4">
          <div>
            <h2 className="text-4xl pb-4">My Skills</h2>
            <SkillMenu buttons={allSkills} />
            <h3 className="mt-6 mb-2 font-bold">Each color indicates skill level.</h3>
            <SkillMenu buttons={CONST_LEVELS} />
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
  const skillApi = new SkillApi()
  const profileApi = new ProfileApi()
  const allSkills = (await skillApi.fetchSkillEntries()) ?? []
  const allProfiles = (await profileApi.fetchProfileEntries()) ?? []
  return {
    props: {
      allSkills,
      allProfiles
    },
  };
}