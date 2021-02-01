import Link from 'next/link'
import moment from 'moment'
import { CONST_MYNAME, CONST_BIRTHDAY } from '../../options/constants'

type NavProps = {
  page: string
}

export default function Nav({page}:NavProps) {

  const age = moment().diff(moment(CONST_BIRTHDAY, 'YYYYMMDD'), 'years')

  const active = <div className="absolute bottom-0 w-full h-1 bg-white"></div>

  return (
    <section className="w-screen fixed top-0 left-0 z-20 bg-green-900 uppercase px-10 flex justify-between items-center flex-row">
      <div className="font-bold">
        <div className="text-4xl">
          {CONST_MYNAME}
        </div>
        <div className="text-xl">
          // LEVEL {age}
        </div>
      </div>
      <nav className="text-lg grid grid-cols-2 gap-x-4">
        <Link href="/">
          <a className="flex justify-center h-20 relative items-center">
            <div className="mx-5">CHARACTER</div>

            {page == 'index' ? active : ''}
          </a>
        </Link>
        <Link href="/inventory">
          <a className="flex justify-center h-20 relative items-center">
            <div className="mx-5">INVENTORY</div>

            {page == 'innventory' ? active : ''}
          </a>
        </Link>
      </nav>
    </section>
  )
}