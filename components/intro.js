import {CONST_REPO_URL, CONST_SITE_URL, CONST_SITE_NAME, CONST_TWITTER_URL, CONST_YOUTUBE_URL, CONST_LAPRAS_URL} from '@/libs/constants'

export default function Intro() {
  return (
    <nav className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {CONST_SITE_NAME}
      </h1>
      <p className="text-center md:text-left text-lg mt-5 md:pl-8">
          I'm a student.<br />
          I have a dream: the future where everyone has equal rights to learn anytime, anywhere.
      </p>
      <div className="flex flex-col">
          <a href={CONST_REPO_URL} className="p-card">
            <h3>Repository &rarr;</h3>
            <p>You can view the source code.</p>
          </a>

          <a href={CONST_YOUTUBE_URL} className="p-card">
            <h3>YouTube &rarr;</h3>
            <p>Watch my videos on YouTube.</p>
          </a>

          <a href={CONST_TWITTER_URL} className="p-card">
            <h3>Twitter &rarr;</h3>
            <p>Feel free to follow me on Twitter.</p>
          </a>

          <a href={CONST_LAPRAS_URL} className="p-card">
            <h3>LAPRAS &rarr;</h3>
            <p>For more info about me, visit my page onn LAPRAS.</p>
          </a>
        </div>
    </nav>
  )
}
