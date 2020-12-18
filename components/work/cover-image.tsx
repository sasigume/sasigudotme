import { ReactElement } from 'react'
import { Work } from '../../services'
import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'

type CoverImageProps = {
  work: Work,
  fixHeight: boolean
}


export default function CoverImage({ work, fixHeight }: CoverImageProps): ReactElement {
  const image = (
    <Image
      src={work.coverImage.imageUrl}
      alt={`${work.title}のアイキャッチ画像`}
      width={work.coverImage.width}
      height={work.coverImage.height}
      />
  )
  return (
    <div className={cn(`flex shadow-lg overflow-hidden w-full bg-gray-200 items-center justify-center`,
      {
        "max-h-64": fixHeight
      })}>
      <Link href={`/works/${work.slug}`}><a>{image}</a></Link>
    </div>
  )
}
