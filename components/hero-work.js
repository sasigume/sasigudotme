import Link from 'next/link'
import Avatar from '@/components/avatar'
import DateComponent from '@/components/date'
import CoverImage from '@/components/cover-image'

export default function HeroWork({
  title,
  coverImage,
  date,
  excerpt,
  creator,
  slug,
}) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bungee font-bold tracking-tighter leading-tight">
      Works
      </h2>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} isHero />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="font-bungee font-bold mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/works/${slug}`} href="/works/[slug]">
              <a className="font-bold hover:underline">
                {title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {creator && <Avatar name={creator.name} picture={creator.picture} twitter={creator.twitter} />}
        </div>
      </div>
    </section>
  )
}
