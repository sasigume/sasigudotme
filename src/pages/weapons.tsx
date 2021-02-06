import { CONST_CHARACTER_IMAGE } from '../options/constants'
import { SkillApi, Skill } from '../services'
import { ReactElement } from 'react'
import Image from 'next/image'

import { SkillMenu } from '../components/skill-list'
import Layout from '../components/layout'
import Tooltip from '../components/tooltip'

type WeaponsProps = {
  preview: boolean,
  allSkills: Skill[],
  sortedSkills: {
    [key: string]: Skill[]
  }
}

export default function Weapons({
  preview,
  sortedSkills
}: WeaponsProps): ReactElement {

  let powerArray: number[]
  let totalPower = 800
  let displayPower = 100

  // スロットは8種類だが未分類のnullも含めて9個
  if (Object.keys(sortedSkills).length == 9) {
    powerArray = [
      sortedSkills.head[0].power,
      sortedSkills.arm[0].power,
      sortedSkills.body[0].power,
      sortedSkills.leg[0].power,
      sortedSkills.weapon1[0].power,
      sortedSkills.weapon2[0].power,
      sortedSkills.weapon3[0].power,
      sortedSkills.weapon4[0].power,
    ]
    totalPower = powerArray.reduce((a, b) => a + b, 0)
    displayPower = Math.round(totalPower / 8)
  }

  return (
    <Layout page="weapons" preview={false}>
      <div className="flex items-center justify-center">
        <div className="mr-6">
          <SkillMenu buttons={sortedSkills.weapon1 ? sortedSkills.weapon1.slice(0, 1) : []} />
          <SkillMenu buttons={sortedSkills.weapon2 ? sortedSkills.weapon2.slice(0, 1) : []} />
          <SkillMenu buttons={sortedSkills.weapon3 ? sortedSkills.weapon3.slice(0, 1) : []} />
          <SkillMenu buttons={sortedSkills.weapon4 ? sortedSkills.weapon4.slice(0, 1) : []} />
        </div>
        <Tooltip label={"skin.png"} description={"適当に作ったスキン"}>
          <div className="w-20 lg:w-52">
            <Image layout="responsive" width={250} height={400} src={CONST_CHARACTER_IMAGE} className="" />
          </div>
        </Tooltip>
        <div className="ml-6 relative">
          <Tooltip label={"POWER"} description={"装備しているスキルのパワーの合計"}>
            <div className="text-right absolute top-0 -left-16">
              <div className="-mb-4">POWER</div>
              <div className="font-bold text-5xl">
                {displayPower}
              </div>
            </div>
          </Tooltip>
          <SkillMenu left buttons={sortedSkills.head ? sortedSkills.head.slice(0, 1) : []} />
          <SkillMenu left buttons={sortedSkills.arm ? sortedSkills.arm.slice(0, 1) : []} />
          <SkillMenu left buttons={sortedSkills.body ? sortedSkills.body.slice(0, 1) : []} />
          <SkillMenu left buttons={sortedSkills.leg ? sortedSkills.leg.slice(0, 1) : []} />
        </div>
      </div>
      <p className="text-center">(元ネタはDestinyってゲームです)</p>
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
      sortedSkills
    },
  };
}