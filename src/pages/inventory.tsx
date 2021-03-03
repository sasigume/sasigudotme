import { SkillApi, Skill } from '../services'
import { ReactElement } from 'react'

import { CONST_SITE_NAME } from '../options/constants'

import Head from 'next/head'

import { SkillMenu } from '../components/skill-list'
import Layout from '../components/layout'
import { Box } from '@chakra-ui/react'

type InventoryProps = {
  preview: boolean,
  allSkills: Skill[]
}

export default function Inventory({
  preview,
  allSkills,
}: InventoryProps): ReactElement {

  return (
    <Layout page="inventory" preview={false}>
      <Head>
        <title>Inventory | {CONST_SITE_NAME}</title>
      </Head>
      <Box style={{height: "40vh"}} overflowY="scroll">
        <SkillMenu buttons={allSkills} />
      </Box>
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