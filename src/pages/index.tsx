import { Center } from '@chakra-ui/react'
import { ReactElement } from 'react'
import Layout from '../components/layout'

type HomeProps = {
  preview: boolean,
}

export default function Home({
  preview,
}: HomeProps): ReactElement {

  return (
    <Layout page="index" preview={false}>
      <Center px={6}>
        現在依頼は受け付けておりません。
        詳細はResumeをご覧ください
      </Center>
    </Layout>
  )
}