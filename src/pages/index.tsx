import { CONST_SITE_NAME, CONST_LEVELS } from '../options/constants'
import { PostAnimeRank, SkillApi, Skill, MathApi, Math } from '../services'
import { ReactElement } from 'react'

import { SkillMenu } from '../components/skill-list'
import { MathList } from '../components/math-list'
import Layout from '../components/layout'
import Head from 'next/head'

type HomeProps = {
  preview: boolean,
  allSkills: Skill[],
  allQs: Math[]
}

export default function Home({
  preview,
  allSkills,
  allQs
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

      <hr className="my-12" />

      <h2 className="text-4xl font-bold mb-4">おまけ: 積分コーナー</h2>
      <MathList questions={allQs} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  // Post anime ranking to my blog
  PostAnimeRank()

  // skills and math questions
  const skillApi = new SkillApi()
  const allSkills = (await skillApi.fetchSkillEntries()) ?? []
  const qApi = new MathApi()
  const allQs = (await qApi.fetchMathEntries()) ?? []
  return {
    props: {
      allSkills,
      allQs
    },
  };
}