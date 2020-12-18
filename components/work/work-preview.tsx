import { ReactElement } from 'react'
import { Work } from '../../services'
import Link from 'next/link'

import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'

type WorkPreviewProps = {
  work: Work,
  first: boolean
}

export default function WorkPreview({ work, first }: WorkPreviewProps): ReactElement {
  return (
    <div id={work.slug} className="bg-white shadow-xl p-6 rounded-xl flex flex-col overflow-hidden">
      <div className="flex-grow">
        <div className="mb-6">
          <CoverImage work={work} fixHeight={!first} />
        </div>
        <h3 className="mb-0 text-4xl">
          <Link href={`works/${work.slug}`}><a className="hover:underline">{work.title}</a></Link>
        </h3>
      </div>
      <div className="flex-none mt-4">
        
        <div className="mb-6 text-lg">
          <DateComponent dateString={work.date} />
        </div>
        <div className="mb-6 text-lg">
          {work.creator && <Avatar creator={work.creator} />}
        </div>
        <Link href={`/works/${work.slug}`}>
          <a className="flex rounded-lg shadow-lg hover:shadow-xl text-xl bg-black hover:bg-white hover:text-black border border-black text-white py-4 justify-center duration-200 transition mb-0">
            DETAILS &rarr;
          </a>
        </Link>
      </div>
    </div>
  )
}
