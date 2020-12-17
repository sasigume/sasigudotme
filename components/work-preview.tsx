import WorkBody from './work-body'
import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'
import { ReactElement } from 'react'
import { Work } from '../services'
import cn from 'classnames'

type WorkPreviewProps = {
  work: Work,
  first: boolean
}

export default function WorkPreview({work, first}: WorkPreviewProps):ReactElement {
  return (
    <div className={cn('flex flex-col overflow-hidden rounded-xl shadow-xl p-8',{
      "bg-white": first,
      "bg-gray-50": !first
    })}>
      <div className="flex-grow">
        <div className="mb-8">
          <CoverImage work={work} />
        </div>
          <h3 className="mb-6 text-4xl">
            {work.title}
        </h3>
        <div className="mb-6 md:mb-0 text-lg">
          <DateComponent dateString={work.date} />
        </div>
        <div className="mb-6 md:mb-0 text-lg">
            {work.creator && <Avatar creator={work.creator} />}
        </div>
        <WorkBody work={work}/>
      </div>
      <div className="flex-none mt-4">
        <a target="_blank" href={work.url} className="flex text-xl bg-black hover:bg-white hover:text-black border border-black text-white py-4 justify-center duration-200 transition-colors mb-0">
          VIEW THIS WORK &rarr;
        </a>
      </div>
    </div>
  )
}
