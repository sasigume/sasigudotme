import Link from 'next/link'
import moment from 'moment'
import cn from 'classnames'
import { CONST_MYNAME, CONST_BIRTHDAY, CONST_BIRTHYEAR } from '../../options/constants'

import Logo from './logo'
import Tooltip from '../tooltip'

type NavProps = {
  page: string
}

export default function Nav({ page }: NavProps) {

  const birthDayFirst = CONST_BIRTHYEAR + '-' + CONST_BIRTHDAY
  const birthDayLast = (moment.utc().year() - 1) + '-' + CONST_BIRTHDAY

  const age = moment().diff(moment(birthDayFirst, 'YYYYMMDD'), 'years')
  const exp = moment().diff(moment(birthDayLast, 'YYYYMMDD'), 'days')

  const active = <div className="absolute -bottom-1 w-full h-1 bg-white"></div>
  const linkClass = "transition duration-200 hover:text-white flex justify-center h-20 relative items-center"

  return (
    <section className="z-50 h-20 w-screen lg:fixed top-0 left-0 bg-green-900 uppercase px-10 flex justify-between items-center flex-row">
      <div className="flex flex-row -mb-8 lg:mt-4">
        <Link href="/">
          <a className="block w-16 lg:w-24 mr-4 p-2">
            <Logo />
          </a>
        </Link>
        <div className="">
          <div>
            <div className="text-3xl font-bold">
              {CONST_MYNAME}
            </div>
            <div className="tracking-widest text-lg">
              // LEVEL {age}
            </div>
          </div>

          <Tooltip description={"誕生日からの経過日数"}>
            <div className="bg-gray-700 border w-40 lg:w-64 mt-3 h-3 border-gray-400">
              <div className="h-full bg-green-600" style={{ width: exp }}></div>
            </div>
          </Tooltip >
        </div>
      </div>
      <nav className="hidden text-lg sm:grid grid-cols-2 gap-x-4">
        <Link href="/">
          <a className={cn(linkClass, {
            "text-gray-400": page !== 'index',
            "text-white": page == 'index'
          })}>
            <div className="mx-5">CHARACTER</div>

            {page == 'index' ? active : ''}
          </a>
        </Link>
        <Link href="/inventory">
          <a className={cn(linkClass, {
            "text-gray-400": page !== 'inventory',
            "text-white": page == 'inventory'
          })}>
            <div className="mx-5">INVENTORY</div>

            {page == 'inventory' ? active : ''}
          </a>
        </Link>
      </nav>
    </section >
  )
}