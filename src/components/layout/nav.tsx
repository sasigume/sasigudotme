import Link from 'next/link'
import moment from 'moment'
import cn from 'classnames'
import { CONST_MYNAME, CONST_BIRTHDAY, CONST_BIRTHYEAR } from '../../options/constants'

import Logo from './logo'
import Tooltip from '../tooltip'

type LinkType = {
  label: string,
  targetPage: string,
  href: string
}



function NavLink({ label, href, targetPage, page }) {
  const linkClass = "mx-3 transition duration-200 hover:text-white flex justify-center h-10 md:h-20 relative items-center"
  const active = <div className="absolute -bottom-1 w-full h-1 bg-white"></div>

  return (
    <Link href={href}>
      <a className={cn(linkClass, {
        "text-gray-400": page !== targetPage,
        "text-white": page == targetPage
      })}>
        <div className="mx-5">{label}</div>

        {page == targetPage ? active : ''}
      </a>
    </Link>
  )
}

const NavLinkList = [
  {
    label: "About",
    targetPage: "index",
    href: "/"
  },
  {
    label: "Character",
    targetPage: "character",
    href: "character"
  },
  {
    label: "Inventory",
    targetPage: "inventory",
    href: "inventory"
  },
]

type NavProps = {
  page: string
}

export default function Nav({ page }: NavProps) {

  const birthDayFirst = CONST_BIRTHYEAR + '-' + CONST_BIRTHDAY
  const birthDayLast = (moment.utc().year() - 1) + '-' + CONST_BIRTHDAY

  const age = moment().diff(moment(birthDayFirst, 'YYYYMMDD'), 'years')
  const exp = moment().diff(moment(birthDayLast, 'YYYYMMDD'), 'days')

  return (
    <nav className="z-50 md:h-20 w-screen fixed top-0 left-0 bg-green-900 uppercase px-10 flex justify-between items-center flex-col md:flex-row">
      <div className="flex flex-row mb-4 md:-mb-8 mt-4">
        <Link href="/">
          <a className="block w-16 md:w-24 mr-4 p-2">
            <Logo />
          </a>
        </Link>
        <div className="">
          <div>
            <h1 className="text-3xl font-bold">
              {CONST_MYNAME}
            </h1>
            <div className="tracking-widest text-lg">
              // LEVEL {age}
            </div>
          </div>

          <Tooltip description={"誕生日からの経過日数"}>
            <div className="bg-gray-700 border w-40 md:w-64 md:mt-3 h-3 border-gray-400">
              <div className="h-full bg-green-600" style={{ width: exp }}></div>
            </div>
          </Tooltip >
        </div>
      </div>
      <nav className="flex flex-row">
        {NavLinkList.map((link) => (
          <NavLink
            key={link.label}
            label={link.label}
            href={link.href}
            targetPage={link.targetPage}
            page={page}
          />))}
      </nav>
    </nav >
  )
}