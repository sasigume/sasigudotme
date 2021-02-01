import { CONST_LEVELS } from '../options/constants'
import { SkillApi, Skill } from '../services'
import { ReactElement } from 'react'

import { CONST_SITE_NAME } from '../options/constants'

import Head from 'next/head'

import { SkillMenu } from '../components/skill-list'
import Layout from '../components/layout'

type HomeProps = {
  preview: boolean,
  allSkills: Skill[]
}

export default function Home({
  preview,
  allSkills,
}: HomeProps): ReactElement {
  const weapon1 = allSkills.filter(function (skill) {return skill.slot == 'weapon1';}) ?? []
  const weapon2 = allSkills.filter(function (skill) {return skill.slot == 'weapon2';}) ?? []
  const weapon3 = allSkills.filter(function (skill) {return skill.slot == 'weapon3';}) ?? []
  const weapon4 = allSkills.filter(function (skill) {return skill.slot == 'weapon4';}) ?? []
  const head = allSkills.filter(function (skill) {return skill.slot == 'head';}) ?? []
  const arm = allSkills.filter(function (skill) {return skill.slot == 'arm';}) ?? []
  const body = allSkills.filter(function (skill) {return skill.slot == 'body';}) ?? []
  const leg = allSkills.filter(function (skill) {return skill.slot == 'leg';}) ?? []

  return (
    <Layout page="index" preview={false}>
      <SkillMenu direction="bottom" buttons={allSkills} />
      <br />
      <div className="my-6 mb-2 font-bold">Each color indicates skill level.</div>
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
      allSkills
    },
  };
}