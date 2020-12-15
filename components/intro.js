import {CONST_MYNAME, CONST_FB_URL, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL} from '@/libs/constants'
import Menu from '@/components/menu'

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
    <nav className="mt-4 md:mt-6 mb-6 md:mb-8">
      <h1 className="text-6xl font-bold tracking-tighter leading-tight mb-2 pb-4 border-b-2 border-gray-200">
      {CONST_MYNAME}'s Works
      </h1>
    <Menu buttons={menuButtons} />
    </nav>
  </>
  )
}
