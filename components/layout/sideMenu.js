import {CONST_BLOG_URL} from '@/libs/constants'
import cn from 'classnames'
import Link from 'next/link'
import{ useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({path, label, iconStyle, iconName, active}) => (
    <Link href={path}>
      <a className={cn(`z-10 flex justify-around items-center text-md mx-1 h-full no-underline py-3 px-4 mt-2 mb-0`,
      {
        'rounded-t-xl bg-white': active,
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

export default function SideMenu({preview}) {
  const router = useRouter()
  let isHome, isWork
  router.pathname == '/' ? isHome = true : isHome = false
  router.pathname == '/works' ? isWork = true : isWork = false
    const sideButtons = [
      {
        path: "/",
        label: "Me",
        iconStyle: "fas",
        iconName: "user",
        active: isHome,
      },
      {
          path: "/works",
          label: "Works",
          iconStyle: "fas",
          iconName: "border-all",
          active: isWork,
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
        
        {preview ? (
          <div className={cn('border-b mt-4 py-4 px-2 text-sm',
          {
            'bg-accent-7 border-accent-7 text-white': preview,
            'bg-accent-1 border-accent-2': !preview,
          })}>
            <span>This is page is a preview.</span>{' '}
            <a
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </div>
        ) : (
          <> </>
        )
        }
      </>
    )
}