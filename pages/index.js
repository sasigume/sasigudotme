import {Menu, SkillMenu} from '@/components/menu'
import Layout from '@/components/layout'
import Head from 'next/head'
import Container from '@/components/container'
import {CONST_SITE_NAME, CONST_LEVELS} from '@/libs/constants'
import markdownStyles from '@/components/markdown-styles.module.css'
import {getAllLinks, getAllSkills}  from '@/libs/api'

export default function Index({preview, allSkills, allLinks}) {
  return (
    <Layout preview={preview} isHome>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>
      <Container>
        <div className="text-center mb-8">
        <nav className="mt-4 md:mt-6 mb-6 md:mb-8">
        <Menu buttons={allLinks} />
        </nav>
        <div className={(`mb-16 ${markdownStyles['markdown']}`)}>
          <p>学生です。字が綺麗に書けるようになりたい。</p>
        </div>
        <h2 className="text-2xl tracking-tighter leading-tigh pb-4 border-b-2 border-gray-200 mb-4">現在習得しているスキル</h2>
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