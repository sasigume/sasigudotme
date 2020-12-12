import WorkPreview from '@/components/work-preview'

export default function MoreStories({ works }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bungee font-bold tracking-tighter leading-tight">
      More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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
