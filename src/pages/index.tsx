import { CONST_LEVELS, CONST_CHARACTER_IMAGE} from '../options/constants'
import { SkillApi, Skill } from '../services'
import { ReactElement } from 'react'
import Image from 'next/image'

import { SkillMenu } from '../components/skill-list'
import Layout from '../components/layout'

type HomeProps = {
  preview: boolean,
  allSkills: Skill[],
  sortedSkills: {
    [key: string]: Skill[]
  }
}

export default function Home({
  preview,
  allSkills,
  sortedSkills
}: HomeProps): ReactElement {

  return (
    <Layout page="index" preview={false}>
      <div className="flex items-center justify-around">
        <div className="">
          <SkillMenu direction="bottom" buttons={sortedSkills.weapon1 ? sortedSkills.weapon1.slice(0, 1) : []} />
          <SkillMenu direction="bottom" buttons={sortedSkills.weapon2 ? sortedSkills.weapon2.slice(0, 1) : []} />
          <SkillMenu direction="bottom" buttons={sortedSkills.weapon3 ? sortedSkills.weapon3.slice(0, 1) : []} />
          <SkillMenu direction="bottom" buttons={sortedSkills.weapon4 ? sortedSkills.weapon4.slice(0, 1) : []} />
        </div>
        <div className="w-64">
          <Image layout="responsive" width={500} height={800} src={CONST_CHARACTER_IMAGE} className="" />
        </div>
      </div>
      <br />
      <div className="my-6 mb-2 font-bold">Each color indicates skill level.</div>
      <SkillMenu direction="bottom" buttons={CONST_LEVELS} />
    </Layout>
  )
}

export const getStaticProps = async () => {

  // skills and math questions
  const skillApi = new SkillApi()
  const allSkills = (await skillApi.fetchSkillEntries()) ?? []

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

  // group by slots
  const sortedSkills = groupBy(allSkills, 'slot')

  return {
    props: {
      allSkills,
      sortedSkills
    },
  };
}