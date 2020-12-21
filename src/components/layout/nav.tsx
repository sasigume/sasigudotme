import {CONST_BLOG_URL, CONST_LAPRAS_URL} from '../../services/constants'
import cn from 'classnames'
import Link from 'next/link'
import{ useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({path, label, iconStyle, iconName, active}) => (
    <Link href={path}>
      <a className={cn(`font-faster italic z-10 flex justify-around items-center text-lg mx-1 h-full no-underline py-3 px-4 mt-2 mb-0`,
      {
        'rounded-t-xl bg-sasibg text-black': active,
        'text-white' : !active
      })}>
          <FontAwesomeIcon className="w-5 h-5 mr-3" icon={[iconStyle, iconName]}/>
          <span>{label}</span>
      </a>
    </Link>
);

const Menu = props => (
    <div className="flex flex-row justify-center">
      {props.buttons.map(button => (
        <Button
          key={button.path}
          path={button.path}
          iconStyle={button.iconStyle}
          iconName={button.iconName}
          label={button.label}
          active={button.active}
        />
      ))}
    </div>
);

export default function Nav({}) {
  const router = useRouter()
  let isHome
  router.pathname == '/' ? isHome = true : isHome = false
    const sideButtons = [
      {
        path: "/",
        label: "Top",
        iconStyle: "fas",
        iconName: "user",
        active: isHome,
      },
      {
          path: CONST_LAPRAS_URL,
          label: "Lapras",
          iconStyle: "fas",
          iconName: "border-all",
          active: false,
      },
      {
        path: CONST_BLOG_URL,
        label: "Blog",
        iconStyle: "fas",
        iconName: "book",
        active: false,
  },
    ]
    return (
      <>
        <Menu buttons={sideButtons} />
      </>
    )
}