import WorkPreview from '@/components/work-preview'

export default function MoreStories({ works }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
      More Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:gap-x-8 gap-y-14 md:gap-y-20 mb-20">
        {works.map((work) => (
          <WorkPreview
            key={work.slug}
            title={work.title}
            coverImage={work.coverImage}
            date={work.date}
            creator={work.creator}
            slug={work.slug}
            excerpt={work.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
