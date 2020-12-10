import Link from 'next/link'
import {CONST_MYNAME} from '@/libs/constants'


export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bungee font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">{CONST_MYNAME}</a>
      </Link>
    </h2>
  )
}
