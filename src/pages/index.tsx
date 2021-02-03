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
       <h2 className="text-4xl">Welcome to my portfolio</h2>
       <p>For more information, visit links below.</p>
      </div>
    </Layout>
  )
}