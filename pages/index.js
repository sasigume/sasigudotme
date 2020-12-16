import {Menu, SkillMenu} from '@/components/menu'
import Layout from '@/components/layout'
import Head from 'next/head'
import Container from '@/components/container'
import SectionSeparator from '@/components/section-separator'
import {CONST_SITE_NAME, CONST_LEVELS} from '@/libs/constants'
import {getAllLinks, getAllSkills}  from '@/libs/api'

export default function Index({preview, allSkills, allLinks}) {
  return (
    <Layout preview={preview} isHome>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>
      <Container>
        <div className="text-center mb-8">
        <div className="my-16">
          学生です。字が綺麗に書けるようになりたい。
        </div>
        <h2 className="text-2xl tracking-tighter leading-tigh pb-4 mb-4">SNS</h2>
        <Menu buttons={allLinks} />
        <SectionSeparator m={['10','12']} />
        <h2 className="text-2xl tracking-tighter leading-tigh pb-4 mb-4">現在習得しているスキル</h2>
        <SkillMenu buttons={allSkills} />
        <h3 className="mt-4">背景色がスキルの熟練度を表しています。</h3>
        <SkillMenu buttons={CONST_LEVELS} />
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const allSkills = (await getAllSkills(preview)) ?? []
  const allLinks = (await getAllLinks(preview)) ?? []
  return {
    props: { allSkills, allLinks },
  };
}