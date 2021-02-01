import Link from 'next/link'
import moment from 'moment'
import { CONST_MYNAME, CONST_BIRTHDAY } from '../../options/constants'

export default function Nav({ }) {

  const age = moment().diff(moment(CONST_BIRTHDAY, 'YYYYMMDD'), 'years')

  return (
    <section className="w-screen fixed top-0 left-0 z-20 bg-green-900 uppercase px-10 flex justify-between items-center flex-row py-4">
      <div className="font-bold">
        <div className="text-4xl">
          {CONST_MYNAME}
        </div>
        <div className="text-xl">
          // LEVEL {age}
        </div>
      </div>
      <nav className="text-lg grid grid-cols-2 gap-x-10">
        <Link href="/">
          <a>
            CHARACTER
          </a>
        </Link>
        <Link href="/inventory">
          <a>
            INVENTORY
          </a>
        </Link>
      </nav>
    </section>
  )
}