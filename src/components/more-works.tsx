import WorkPreview from './work/work-preview'
import { ReactElement } from 'react'
import { Work } from '../services'

type MoreWorksProps = {
  works: Work[]
}

export default function MoreWorks({ works, }
  : MoreWorksProps):ReactElement {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-4xl">
      Other works
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-14 mb-20">
        {works.map((work) => (
          <WorkPreview
            key={work.slug}
            work={work}
            first={false}
          />
        ))}
      </div>
    </section>
  )
}
