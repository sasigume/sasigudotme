import Link from 'next/link'
import Avatar from '@/components/avatar'
import DateComponent from '@/components/date'
import CoverImage from './cover-image'
import {CONST_LOCALE} from '@/libs/constants'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} url={coverImage.url} isCard />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="font-bold hover:underline">
          {CONST_LOCALE == 'ja-JP'
          ? <span className="font-noto">{title}</span>
          : title
          }
          </a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
