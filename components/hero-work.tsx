import Link from 'next/link'
import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'
import WorkBody from './work-body'
import { ReactElement } from 'react'
import { Work } from '../services'

type HeroWorkProps = {
  work: Work
}

export default function HeroWork({work}:HeroWorkProps):ReactElement{
  return (
    <div className="rounded-xl shadow-xl p-6">
      <div className="mb-8 md:mb-16">
        <CoverImage work={work} isCard={false} isHero />
      </div>
      <div className="">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/works/${work.slug}`} href="/works/[slug]">
              <a className="hover:underline">
                {work.title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={work.date} />
            {work.creator && <Avatar creator={work.creator} />}
          </div>
        </div>
        <div className="">
          <WorkBody work={work}/>
        </div>
      </div>
    </div>
  )
}
