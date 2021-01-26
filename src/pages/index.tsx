import { CONST_SITE_NAME, CONST_LEVELS } from '../options/constants'
import { SkillApi, Skill, MathApi, Math } from '../services'
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

// Using Jikan API https://jikan.docs.apiary.io/

function convertAnime(anime, i) {
  return [
    { h2: i+1 + '. ' + anime.title ?? 'タイトル' },
    {
      ul: [
        anime.start_date ?? '2999-1-1',
        anime.members + '人視聴' ?? '9999999',
        'スコア: ' + anime.score ?? '10.0'
      ]
    },
    { p : ''}
  ]
}

export const getStaticProps = async () => {
  const today = new Date().toLocaleDateString('ja')
  const res = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
  const data = await res.json()
  const topAnimes = data.top.map((anime, i) => convertAnime(anime, i)) ?? []
  const json2md = require('json2md')
  const text = json2md(topAnimes)

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'sasigume@gmail.com',
    from: 'sasigume@gmail.com',
    subject: today + '時点の世界アニメ人気ランキングTop50',
    text: text,
  };
  sgMail.send(msg);

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