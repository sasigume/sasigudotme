import Link from 'next/link'
import {CONST_REPO_URL, CONST_SITE_URL, CONST_SITE_NAME, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL, CONST_OG_IMAGE_URL} from '@/libs/constants'


export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">{CONST_SITE_NAME}</a>
      </Link>
      .
    </h2>
  )
}
