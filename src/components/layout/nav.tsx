import Link from 'next/link'
import moment from 'moment'
import cn from 'classnames'
import { CONST_MYNAME, CONST_BIRTHDAY } from '../../options/constants'

import Logo from './logo'
import Tooltip from '../tooltip'


function NavLink({ label, href, targetPage, page }) {
  const linkClass = "mx-1 md:mx-3 transition duration-200 hover:text-black flex justify-center h-10 md:h-20 relative items-center"
  const active = <div className="absolute -bottom-1 w-full h-1 bg-black"></div>

  return (
      <Link href={href}>

        <a className={cn(linkClass, {
          "text-gray-600": page !== targetPage,
          "text-black": page == targetPage
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
    desc: "トップページです",
    href: "/"
  },
  {
    label: "Weapons",
    targetPage: "weapons",
    desc: "今勉強中のスキルです",
    href: "weapons"
  },
  {
    label: "Inventory",
    targetPage: "inventory",
    desc: "全スキルです",
    href: "inventory"
  },
]

type NavProps = {
  page: string
}

export default function Nav({ page }: NavProps) {

  const age = moment().diff(moment(CONST_BIRTHDAY, 'YYYYMMDD'), 'years')
  const bdThisYear = moment().year() + '-' + moment(CONST_BIRTHDAY).format('MM-DD')
  const diff = moment().diff(moment(bdThisYear, 'YYYYMMDD'), 'days')
  let exp: number
  diff < 0 ? exp = 365 + diff : exp = diff

  return (
    <nav className={cn('z-50 w-screen align-middle fixed top-0 left-0 bg-white uppercase px-10 flex md:justify-between items-center flex-col md:flex-row', {
      'md:h-20': page !== 'index',
      'h-full justify-center pb-20': page == 'index'
    })}>
      <div className={cn('flex flex-row mb-4 md:-mb-8', {
        'mt-4': page !== 'index'
      })}>
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
              {`//`} LEVEL {age}
            </div>
          </div>

          <Tooltip label={exp + "/365日"} description={"誕生日からの経過日数"} top>
            <div className="bg-gray-200 border w-40 md:w-64 md:mt-3 h-3 border-gray-400">
              <div className="h-full bg-green-600" style={{ width: `${exp / 365 * 100}%` }}></div>
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