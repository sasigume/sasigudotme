import { CONST_LEVELS } from '../options/constants'
import { SkillApi, Skill } from '../services'
import { ReactElement } from 'react'

import { CONST_SITE_NAME } from '../options/constants'

import Head from 'next/head'

import { SkillMenu } from '../components/skill-list'
import Layout from '../components/layout'

type HomeProps = {
  preview: boolean,
  allSkills: Skill[],
}

export default function Home({
  preview,
  allSkills,
}: HomeProps): ReactElement {
  return (
    <Layout page="index" preview={false}>
      <div dangerouslySetInnerHTML={{ __html: "<!-- This design is just parody of Destiny2 UI. Original Design Material : https://www.behance.net/gallery/60073341/Destiny-2-UI-Visual-Design -->" }} />
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>
      <SkillMenu direction="bottom" buttons={allSkills} />
      <br />
      <div className="text-right mt-6 mb-2 font-bold">Each color indicates skill level.</div>
      <SkillMenu direction="top" buttons={CONST_LEVELS} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  // skills and math questions
  const skillApi = new SkillApi()
  const allSkills = (await skillApi.fetchSkillEntries()) ?? []
  return {
    props: {
      allSkills,
    },
  };
}