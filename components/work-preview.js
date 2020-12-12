import Link from 'next/link'
import Avatar from '@/components/avatar'
import DateComponent from '@/components/date'
import CoverImage from './cover-image'

export default function WorkPreview({
  title,
  coverImage,
  date,
  excerpt,
  creator,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} isCard />
      </div>
      <h3 className="text-3xl mb-3 leading-snug font-bungee">
        <Link as={`/works/${slug}`} href="/works/[slug]">
          <a className="font-bold hover:underline">
          {title}
          </a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {creator && <Avatar name={creator.name} picture={creator.picture} twitter={creator.twitter} />}
    </div>
  )
}
