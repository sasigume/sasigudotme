import { CONST_SITE_NAME } from '../../libs/constants'
import { MathApi, Math } from '../../services'
import { ReactElement } from 'react'

import { MathList } from '../../components/math-list'

import Layout from '../../components/layout'
import Container from ' ../../components/container'
import Head from 'next/head'

type NengaProps = {
  preview: boolean,
  allQs: Math[]
}



export default function Nenga({preview, allQs}:NengaProps): ReactElement {
  const Title = "あけおめ！"
  const tex1 = "$\sigma_U \sim \mathrm{Normal}(0, \Theta_U^2)$"
  return (
    <Layout preview={false}>
      <Head>
        <title>{Title} | {CONST_SITE_NAME}</title>
      </Head>
        <h1 className="text-4xl font-bold mb-4">{Title}</h1>
        <p className="text-2xl font-bold mb-12">積分しよ！！！！！！</p>
        <MathList questions={allQs} />
    </Layout >
  )
}

export const getStaticProps = async () => {
  const qApi = new MathApi()
  const allQs = (await qApi.fetchMathEntries()) ?? []
  return {
    props: {
      allQs,
    },
  };
}