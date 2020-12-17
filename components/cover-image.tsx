import cn from 'classnames'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Work } from '../services'

type CoverImageProps = {
  work: Work,
  isHero: boolean,
  isCard: boolean
}


export default function CoverImage({ work,isHero,isCard }:CoverImageProps):ReactElement {
  const image = (
    <img
      src={work.coverImage.imageUrl}
      alt={`Cover Image for ${work.title}. ${work.excerpt}`}
      className={cn('w-full object-cover shadow-md', {
        'hover:shadow-lg transition-shadow duration-200': work.slug,
      })}
    />
  )
  return (
    <div className={cn('m:mx-0 flex overflow-hidden w-full items-center justify-center', {
      '': isHero,
      'max-h-64': isCard
    })}>
      {image}
    </div>
  )
}
