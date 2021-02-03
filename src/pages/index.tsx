import { CONST_CHARACTER_IMAGE } from '../options/constants'
import { SkillApi, Skill } from '../services'
import { ReactElement } from 'react'
import Image from 'next/image'

import { SkillMenu } from '../components/skill-list'
import Layout from '../components/layout'
import Tooltip from '../components/tooltip'

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

  let powerArray: number[] = [100, 100, 100, 100]
  let totalPower: number
  if (sortedSkills.head && sortedSkills.arm && sortedSkills.body && sortedSkills.leg) {
    powerArray = [sortedSkills.head[0].power, sortedSkills.arm[0].power, sortedSkills.body[0].power, sortedSkills.leg[0].power]
    totalPower = powerArray.reduce((a, b) => a + b, 0)
  }

  return (
    <Layout page="index" preview={false}>
      <div className="flex items-center justify-center">
        <div className="mr-6">
          <SkillMenu buttons={sortedSkills.weapon1 ? sortedSkills.weapon1.slice(0, 1) : []} />
          <SkillMenu buttons={sortedSkills.weapon2 ? sortedSkills.weapon2.slice(0, 1) : []} />
          <SkillMenu buttons={sortedSkills.weapon3 ? sortedSkills.weapon3.slice(0, 1) : []} />
          <SkillMenu buttons={sortedSkills.weapon4 ? sortedSkills.weapon4.slice(0, 1) : []} />
        </div>
        <Tooltip label={"skin.png"} description={"適当に作ったスキン"}>
          <div className="w-20 lg:w-64 ml-6">
            <Image layout="responsive" width={250} height={400} src={CONST_CHARACTER_IMAGE} className="" />
          </div>
        </Tooltip>
        <div className="ml-6 relative">
          <Tooltip label={"POWER"} description={"装備しているスキルのパワーの合計"}>
            <div className="text-right absolute top-0 -left-20">
              <div className="-mb-4">POWER</div>
              <div className="text-blue-200 font-bold text-5xl">
                {totalPower}
              </div>
            </div>
          </Tooltip>
          <SkillMenu left buttons={sortedSkills.head ? sortedSkills.head.slice(0, 1) : []} />
          <SkillMenu left buttons={sortedSkills.arm ? sortedSkills.arm.slice(0, 1) : []} />
          <SkillMenu left buttons={sortedSkills.body ? sortedSkills.body.slice(0, 1) : []} />
          <SkillMenu left buttons={sortedSkills.leg ? sortedSkills.leg.slice(0, 1) : []} />
        </div>
      </div>
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