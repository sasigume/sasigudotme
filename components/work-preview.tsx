import Link from 'next/link'
import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'
import { ReactElement } from 'react'
import { Work } from '../services'

type WorkPreviewProps = {
  work: Work
}

export default function WorkPreview({work}: WorkPreviewProps):ReactElement {
  return (
    <div className="flex flex-col justify-between shadow-xl p-6 rounded-xl">
      <div className="flex mb-5">
        <CoverImage work={work} isHero={false} isCard />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        {work.title}
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={work.date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{work.excerpt}</p>
      {work.creator && <Avatar creator={work.creator} />}
    </div>
  )
}
