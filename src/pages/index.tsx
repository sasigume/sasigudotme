import { CONST_SITE_NAME, CONST_LEVELS } from '../libs/constants'
import { SkillApi, Skill } from '../services'
import { ReactElement } from 'react'

import { SkillMenu } from '../components/skill-list'
import Layout from '../components/layout'
import Head from 'next/head'

type HomeProps = {
  preview: boolean,
  allSkills: Skill[],
}

export default function Home({
  allSkills
}: HomeProps): ReactElement {
  return (
    <Layout preview={false}>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>
      

        <SkillMenu buttons={allSkills} />
        <br />
        <span className="mt-6 mb-2 font-bold">Each color indicates skill level.</span>
        <SkillMenu buttons={CONST_LEVELS} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const skillApi = new SkillApi()
  const allSkills = (await skillApi.fetchSkillEntries()) ?? []
  return {
    props: {
      allSkills,
    },
  };
}