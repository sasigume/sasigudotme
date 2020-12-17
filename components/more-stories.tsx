import WorkPreview from '../components/work-preview'
import { ReactElement } from 'react'
import { Work } from '../services'

type MoreStoriesProps = {
  works: Work[]
}

export default function MoreStories({ works, }
  : MoreStoriesProps):ReactElement {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-4xl">
      Other works
      </h2>
      <div className="grid grid-cols-1 gap-y-14 mb-20">
        {works.map((work) => (
          <WorkPreview
            key={work.slug}
            work={work}
          />
        ))}
      </div>
    </section>
  )
}
