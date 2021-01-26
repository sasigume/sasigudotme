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
    { h2: i+1 + '. ' + anime.title + ' (' + anime.members + '人視聴)' ?? 'アニメタイトル' },
    {
      ul: [
        'スコア: ' + anime.score ?? '10.0',
        '放送開始時期: ' + anime.start_date ?? '2999-1-1',
      ]
    },
    { p : ''}
  ]
}

export const getStaticProps = async () => {
  // Post anime ranking to my blog
  const today = new Date().toLocaleDateString('ja')
  const now = Date.now()
  const firstText = `このランキングは、MyAnimeListの非公式API「Jikan」を使用し、毎日自動で生成しています。詳しくは以下のソースコードをご覧ください。\n\n[https://github.com/and0ry0/andoryocom/ :embed:cite]\n\nなお、デプロイにVercelを、送信にSendGridを使っているので、それぞれに何らかの障害が発生した場合は投稿されません。\n\n`

  const res = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
  const data = await res.json()
  const topAnimes = data.top.map((anime, i) => convertAnime(anime, i)) ?? []
  const firstAnime = {
    title: data.top[0].title,
    member: data.top[0].members
  }
  const json2md = require('json2md')
  const text = json2md(topAnimes)

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.HATENABLOG_POST_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: today + 'の世界アニメ人気ランキングTop50。1位は' + firstAnime.title + '(' + firstAnime.member + '人視聴) 生成:' + now,
    text: firstText + text,
  };
  sgMail.send(msg);
  console.log('Mail sended!')

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