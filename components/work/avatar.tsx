import { ReactElement } from 'react'
import { Creator } from '../../services'

type AvaterProps = {
  creator: Creator
}

export default function Avatar({ creator }:AvaterProps):ReactElement {
  return (
    <div className="flex items-center">
      <img
        src={creator.picture.imageUrl}
        className="w-12 h-12 rounded-full mr-4"
        alt={creator.name}
      />
      <div className="text-xl">{creator.name} (@{creator.twitter})</div>
    </div>
  )
}
