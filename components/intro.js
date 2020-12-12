import {CONST_MYNAME, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL} from '@/libs/constants'
import Menu from '@/components/menu'
export default function Intro() {
  const menuButtons = [
      {
        label: "About me",
        path: "/works/aboutme",
        text: "Know more about me."
      },
      {
        label: "YouTube",
        path: CONST_YOUTUBE_URL,
        text: "Watch my videos on YouTube."
      },
      {
        label: "Twitter",
        path: CONST_TWITTER_URL,
        text: "Feel free to follow me on Twitter."
      },
      {
        label: "LAPRAS",
        path: CONST_LAPRAS_URL,
        text: "An analysis of my skills."
      }
    ]
  return (
    <>
    <nav className="flex-col md:flex-row flex md:justify-between mt-6 mb-6 md:mb-4">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {CONST_MYNAME}
      </h1>
      <p className="md:text-right text-lg mt-5 md:pl-8">
      I'm a student living in Japan.<br />Dreaming the future where everyone has equal rights to learn anytime, anywhere.
      </p>
      
    </nav>
    <Menu buttons={menuButtons} />
  </>
  )
}
