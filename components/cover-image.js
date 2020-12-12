import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, url, slug, isHero, isCard }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('w-full object-cover shadow-md', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className={cn('m:mx-0 flex overflow-hidden w-full items-center justify-center', {
      '': isHero,
      'max-h-64': isCard
    })}>
      {slug ? (
        <Link as={`/works/${slug}`} href="/works/[slug]">
          <a className="w-full" aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
