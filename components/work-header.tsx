import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'
import { ReactElement } from 'react'
import { Work } from '../services'

type WorkHeaderProps = {
  work: Work
}


export default function WorkHeader({ work }:WorkHeaderProps):ReactElement {
  return (
    <>
      <h1 className="text-4xl md:text-5xl mt-12 mb-8">
      {work.title}
      </h1>
      <div className="hidden md:block md:mb-12">
        {work.creator && <Avatar creator={work.creator} />}
      </div>
      <div className="mb-6 md:mb-12 sm:mx-0">
        <CoverImage work={work} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {work.creator && <Avatar creator={work.creator} />}
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={work.date} />
        </div>
      </div>
    </>
  )
}
