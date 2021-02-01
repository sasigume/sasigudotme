import Link from 'next/link'
import moment from 'moment'
import cn from 'classnames'
import { CONST_MYNAME, CONST_BIRTHDAY } from '../../options/constants'

import Logo from './logo'

type NavProps = {
  page: string
}

export default function Nav({ page }: NavProps) {

  const age = moment().diff(moment(CONST_BIRTHDAY, 'YYYYMMDD'), 'years')

  const active = <div className="absolute -bottom-1 w-full h-1 bg-white"></div>
  const linkClass = "transition duration-200 hover:text-white flex justify-center h-20 relative items-center"

  return (
    <section className="w-screen lg:fixed top-0 left-0 z-20 bg-green-900 uppercase px-10 flex justify-between items-center flex-row">
      <div className="flex flex-row font-bold">
        <Link href="/">
          <a className="block w-16 mr-4 p-2">
            <Logo />
          </a>
        </Link>
        <div><div className="text-4xl">
          {CONST_MYNAME}
        </div>
          <div className="text-xl">
            // LEVEL {age}
          </div>
        </div>
      </div>
      <nav className="text-lg grid grid-cols-2 gap-x-4">
        <Link href="/">
          <a className={cn(linkClass,{
              "text-gray-400" : page !== 'index',
              "text-white" : page == 'index'
            })}>
            <div className="mx-5">CHARACTER</div>

            {page == 'index' ? active : ''}
          </a>
        </Link>
        <Link href="/inventory">
          <a className={cn(linkClass,{
              "text-gray-400" : page !== 'inventory',
              "text-white" : page == 'inventory'
            })}>
            <div className="mx-5">INVENTORY</div>

            {page == 'inventory' ? active : ''}
          </a>
        </Link>
      </nav>
    </section>
  )
}