import {CONST_MYNAME, CONST_FB_URL, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL} from '@/libs/constants'
import Menu from '@/components/menu'
export default function Intro() {
  const menuButtons = [
      {
        label: "Facebook",
        path: CONST_FB_URL,
      },
      {
        label: "YouTube",
        path: CONST_YOUTUBE_URL,
      },
      {
        label: "Twitter",
        path: CONST_TWITTER_URL,
      },
      {
        label: "LAPRAS",
        path: CONST_LAPRAS_URL,
      }
    ]
  return (
    <>
    <nav className="flex-col md:flex-row flex md:items-center md:justify-between mt-6 mb-6 md:mb-4">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-6 md:mb-0 md:pr-8">
        {CONST_MYNAME}
      </h1>
      <p className="md:text-right text-lg mt-5 md:pl-8">
      I'm always dreaming the future where everyone<br />has equal rights to learn anytime, anywhere.
      </p>
      
    </nav>
    <Menu buttons={menuButtons} />
  </>
  )
}
