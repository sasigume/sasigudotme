import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-md', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0 max-h-96 flex overflow-hidden justify-center content-center">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="" aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
