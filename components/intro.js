import {CONST_LOCALE, CONST_MYNAME, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL} from '@/libs/constants'
import Menu from '@/components/menu'
export default function Intro() {
  let hello
  let menuButtons
  if (CONST_LOCALE == 'ja-JP') {
    hello = <span className="font-noto">学生です。<br />誰もが自由に学べる世界を作りたい。</span>;
    menuButtons = [
      {
        label: "About me",
        path: "/posts/aboutme",
        text: "さしぐめについて."
      },
      {
        label: "YouTube",
        path: CONST_YOUTUBE_URL,
        text: "チャンネル登録者1万人感謝"
      },
      {
        label: "Twitter",
        path: CONST_TWITTER_URL,
        text: "気軽にフォローしてね"
      },
      {
        label: "LAPRAS",
        path: CONST_LAPRAS_URL,
        text: "スキルをAIでスコア化"
      }
    ]
  } else {
    hello = <span>I'm a student living in Japan.<br />Dreaming the future where everyone has equal rights to learn anytime, anywhere.</span>
    menuButtons = [
      {
        label: "About me",
        path: "/posts/aboutme",
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
  }
  return (
    <>
    <nav className="flex-col md:flex-row flex md:justify-between mt-6 mb-6 md:mb-4">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {CONST_MYNAME}
      </h1>
      <p className="md:text-right text-lg mt-5 md:pl-8">
        {hello}
      </p>
      
    </nav>
    <Menu buttons={menuButtons} />
  </>
  )
}
