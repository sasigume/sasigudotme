import {CONST_MYNAME, CONST_FB_URL, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL} from '@/libs/constants'
import Menu from '@/components/menu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Intro() {
  const menuButtons = [
      {
        label: "Facebook",
        iconStyle: "fab",
        iconName: "facebook",
        path: CONST_FB_URL,
      },
      {
        label: "YouTube",
        iconStyle: "fab",
        iconName: "youtube",
        path: CONST_YOUTUBE_URL,
      },
      {
        label: "Twitter",
        iconStyle: "fab",
        iconName: "twitter",
        path: CONST_TWITTER_URL,
      },
      {
        label: "LAPRAS",
        iconStyle: "fas",
        iconName: "external-link-alt",
        path: CONST_LAPRAS_URL,
      }
    ]
  return (
    <>
    <nav className="flex-col md:flex-row flex md:items-center md:justify-between mt-6 mb-6 md:mb-4">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-6 md:mb-0 md:pr-8">
      {CONST_MYNAME}
      </h1>
      <div className="md:text-right text-lg mt-5 md:pl-8">
      I'm always dreaming the future where everyone has equal rights to learn anytime, anywhere.
      </div>
      
    </nav>
    <Menu buttons={menuButtons} />
  </>
  )
}
