import {Menu, SkillMenu} from '../components/menu'
import {ProfileList} from '../components/profile-list'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import SectionSeparator from '../components/section-separator'
import {CONST_SITE_NAME, CONST_LEVELS} from '../libs/constants'
import {LinkApi, Link, SkillApi, Skill, ProfileApi, Profile }  from '../services'
import { ReactElement } from 'react'

type HomeProps = {
  preview: boolean,
  allSkills: Skill[],
  allLinks: Link[],
  allProfiles: Profile[]
}

export default function Home({
  preview, allSkills, allLinks, allProfiles
}: HomeProps): ReactElement {
  return (
    <Layout preview={preview} isHome>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-14 mt-10">
        <div>
          <h2 className="text-2xl tracking-tighter leading-tigh pb-4 mb-4">About me</h2>
          <ProfileList profiles={allProfiles} />
          <SectionSeparator />
          <h2 className="text-2xl tracking-tighter leading-tigh pb-4 mb-4">SNS</h2>
          <Menu buttons={allLinks} />
          <div className="block lg:hidden"><SectionSeparator /></div>
        </div>
        <div>
        <h2 className="text-2xl tracking-tighter leading-tigh pb-4 mb-4">現在習得しているスキル</h2>
        <SkillMenu buttons={allSkills} />
        <h3 className="mt-4">背景色がスキルの熟練度を表しています。</h3>
        <SkillMenu buttons={CONST_LEVELS} />
        </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const skillApi = new SkillApi()
  const linkApi = new LinkApi()
  const profileApi = new ProfileApi()
  const allSkills = (await skillApi.fetchSkillEntries()) ?? []
  const allLinks = (await linkApi.fetchLinkEntries()) ?? []
  const allProfiles = (await profileApi.fetchProfileEntries()) ?? []
  return {
    props: {
      allSkills,
      allLinks,
      allProfiles
    },
  };
}