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
        <CoverImage work={work} isHero={false} isCard={false} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <a target="_blank" href={work.url} className="flex text-xl bg-black hover:bg-white hover:text-black border border-black text-white py-4 justify-center duration-200 transition-colors mb-0">
          VIEW THIS WORK &rarr;
          </a>
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
