import { ReactElement } from 'react'
import { Work } from '../services'

type CoverImageProps = {
  work: Work
}


export default function CoverImage({ work }:CoverImageProps):ReactElement {
  const image = (
    <img
      src={work.coverImage.imageUrl}
      alt={`Cover Image for ${work.title}. ${work.excerpt}`}
      className="w-full object-cover shadow-md hover:shadow-lg transition-shadow duration-200" />
  )
  return (
    <div className="flex overflow-hidden w-full items-center justify-center">
      {image}
    </div>
  )
}
