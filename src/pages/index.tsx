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
      <div className="flex flex-col items-center">
      </div>
    </Layout>
  )
}