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
    <div className="rounded-xl shadow-xl p-6">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} url={coverImage.url} isHero />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="font-bold mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/works/${slug}`} href="/works/[slug]">
              <a className="font-bold hover:underline">
                {title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-lg leading-relaxed">{excerpt}</p>
          {creator && <Avatar name={creator.name} picture={creator.picture} twitter={creator.twitter} />}
        </div>
      </div>
    </div>
  )
}
